import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {NotificationService} from './notification.service';
import {Observable, of} from 'rxjs';
import {mergeMap, tap} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(private readonly notificationService: NotificationService,
              private readonly translateService: TranslateService) {
  }

  error<T>(): (source: Observable<T>) => Observable<T> {
    return tap(() => {}, (error) => { this.handleError(error); });
  }

  private handleError(response: HttpErrorResponse): void {

    const key = `HTTP.${response.status}`;

    this.translateService.get(key, response)
      .pipe(
        mergeMap((text) => key === text ? this.translateService.get('HTTP.UNKNOWN', response) : of(text))
      ).subscribe(text => this.notificationService.error(text));
  }
}

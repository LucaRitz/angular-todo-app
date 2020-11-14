import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class DialogService {

  confirm(messageKey: string, interpolationParams?: object): boolean {
    const msg = this.translateService.instant(messageKey, interpolationParams);
    return confirm(msg);
  }

  constructor(private readonly translateService: TranslateService) {
  }

}

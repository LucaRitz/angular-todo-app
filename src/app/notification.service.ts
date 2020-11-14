import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private readonly snackBar: MatSnackBar,
              private readonly translateService: TranslateService) {
  }

  show(message: string): void {
    this.translateService.get(message).subscribe(translation => this.snackBar.open(translation, '', {
      duration: 3000
    })).unsubscribe();
  }

  info(message: string): void {
    this.translateService.get(message).subscribe(translation => this.snackBar.open(translation, '', {
      duration: 3000,
      panelClass: ['toast-info']
    })).unsubscribe();
  }

  success(message: string): void {
    this.translateService.get(message).subscribe(translation => this.snackBar.open(translation, '', {
      duration: 3000,
      panelClass: ['toast-success']
    })).unsubscribe();
  }

  warn(message: string): void {
    this.translateService.get(message).subscribe(translation => this.snackBar.open(translation, '', {
      duration: 3000,
      panelClass: ['toast-warn']
    })).unsubscribe();
  }

  error(message: string): void {
    this.translateService.get(message).subscribe(translation => this.snackBar.open(translation, '', {
      duration: 3000,
      panelClass: ['toast-error']
    })).unsubscribe();
  }
}

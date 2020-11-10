import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import * as Action from './login.actions';
import {Store} from '@ngrx/store';
import {UserState} from './login.reducer';
import {LoginForm} from './login.form';
import {User} from './login';
import {MatSnackBar} from '@angular/material/snack-bar';
import {NotificationService} from '../notification.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <mat-card [formGroup]="loginForm.form">
      <div fxLayout="row">
        <mat-form-field fxFlex="25">
          <input matInput placeholder="{{ 'LOGIN.USER_NAME' | translate }}" formControlName="name"/>
        </mat-form-field>
        <mat-form-field fxFlex="25">
          <input type="password" matInput placeholder="{{ 'LOGIN.PASSWORD' | translate }}" formControlName="password"/>
        </mat-form-field>
      </div>
      <button (click)="onLogin()">{{'LOGIN.LOGIN' | translate}}</button>
      <button (click)="onRegister()">{{'LOGIN.REGISTER' | translate}}</button>
    </mat-card>
  `
})
export class LoginContainer implements OnInit {

  constructor(public readonly loginForm: LoginForm,
              private readonly notificationService: NotificationService,
              private readonly store: Store<UserState>) {
  }

  ngOnInit(): void {
    this.loginForm.reset();
    this.loginForm.patchValue({name: undefined, password: undefined, loggedIn: false});
    this.store.dispatch(Action.logout());
  }

  onLogin(): void {
    const user: User = this.getValueIfValid();
    if (user) {
      this.store.dispatch(Action.login({user}));
    }
  }

  onRegister(): void {
    const user: User = this.getValueIfValid();
    if (user) {
      this.store.dispatch(Action.register({user}));
    }
  }

  private getValueIfValid(): User {
    let user: User;
    if (this.loginForm.isInvalid()) {
      this.notificationService.show('FORM_INVALID');
    } else {
      user = this.loginForm.value();
    }
    return user;
  }
}

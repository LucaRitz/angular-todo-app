import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import * as Action from './login.actions';
import {Store} from '@ngrx/store';
import {UserState} from './login.reducer';
import {LoginForm} from './login.form';
import {User} from './login';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <mat-card [formGroup]="loginForm.form">
      <div fxLayout="row">
        <mat-form-field fxFlex="25">
          <input matInput placeholder="{{ 'LOGIN.USER_NAME' | translate }}" formControlName="name" #nameInput/>
          <mat-error appFormError></mat-error>
        </mat-form-field>
        <mat-form-field fxFlex="25">
          <input matInput placeholder="{{ 'LOGIN.PASSWORD' | translate }}" formControlName="password"
                 #password/>
          <mat-error appFormError></mat-error>
        </mat-form-field>
      </div>
      <button (click)="onLogin()">{{'LOGIN.LOGIN' | translate}}</button>
      <button (click)="onRegister()">{{'LOGIN.REGISTER' | translate}}</button>
    </mat-card>
  `
})
export class LoginContainer implements OnInit {

  constructor(public readonly loginForm: LoginForm,
              private readonly store: Store<UserState>) {
  }

  ngOnInit(): void {
    this.loginForm.reset();
    this.loginForm.patchValue({name: undefined, password: undefined});
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
      // this.notificationService.warning('FORM_INVALID'); TODO: Notify
    } else {
      user = this.loginForm.value();
    }
    return user;
  }
}

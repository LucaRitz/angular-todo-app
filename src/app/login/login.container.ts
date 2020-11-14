import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import * as Action from './login.actions';
import {Store} from '@ngrx/store';
import {UserState} from './login.reducer';
import {LoginForm} from './login.form';
import {User} from './login';
import {NotificationService} from '../notification.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <form [formGroup]="loginForm.form" (ngSubmit)="onLogin()">
      <mat-card>
        <mat-card-title>
          {{'LOGIN.LOGIN' | translate}}
        </mat-card-title>
        <mat-card-content>
          <div>
            <mat-form-field>
              <input matInput placeholder="{{ 'LOGIN.USER_NAME' | translate }}" formControlName="name"/>
            </mat-form-field>
          </div>
          <div>
            <mat-form-field>
              <input type="password" matInput placeholder="{{ 'LOGIN.PASSWORD' | translate }}"
                     formControlName="password"/>
            </mat-form-field>
          </div>
        </mat-card-content>
        <mat-card-actions>
          <button type="submit" mat-raised-button color="primary">{{'LOGIN.LOGIN' | translate}}</button>
          <button type="button" (click)="onRegister()" mat-raised-button>{{'LOGIN.REGISTER' | translate}}</button>
        </mat-card-actions>
      </mat-card>
    </form>
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

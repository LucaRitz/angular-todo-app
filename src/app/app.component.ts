import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {UserState} from './login/login.reducer';
import {Observable} from 'rxjs';
import {User} from './login/login';
import * as Selectors from './login/login.selectors';
import * as Actions from './login/login.actions';
import {Router} from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  template: `
    <div>
      <mat-toolbar color="primary">
        <mat-toolbar-row>
          <h1>{{ 'TITLE' | translate}}</h1>
          <div>
            <a mat-button routerLink="todo">
              <mat-label>{{ 'TODO.TODO' | translate }}</mat-label>
            </a>
            <a mat-button (click)="logout()">
              <mat-label *ngIf="user$ | async as user">{{user ? user.name + ' | ' : ''}}</mat-label>
              <mat-label>{{ 'LOGIN.LOGOUT' | translate }}</mat-label>
            </a>
          </div>
        </mat-toolbar-row>
      </mat-toolbar>
      <div>
        <div class="main-view">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `,
  styles: [
    '.main-view {width: 60%; margin: auto;}'
  ]
})
export class AppComponent {

  user$: Observable<User>;

  constructor(private readonly store: Store<UserState>,
              private readonly router: Router) {
    this.user$ = this.store.select(Selectors.selectUser);
  }

  logout(): void {
    this.store.dispatch(Actions.logout());
    this.router.navigateByUrl('login');
  }
}

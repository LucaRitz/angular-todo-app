import {ChangeDetectionStrategy, Component} from '@angular/core';

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
            <a mat-button routerLink="login">
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
}

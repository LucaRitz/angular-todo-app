import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  template: `
    <div>
      <ul slot="sidenav">
        <li routerLinkActive="active-item">
          <a routerLink="todo" fxLayout="row" fxLayoutAlign="start center">
            <mat-icon>list</mat-icon>
            <mat-label fxFlexOffset="5">{{ 'TODO.TODO' | translate }}</mat-label>
          </a>
        </li>
      </ul>
      <div fxLayout="column" fxFill>
        <div fxLayout="column" fxFlexAlign="center">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `
})
export class AppComponent {
}

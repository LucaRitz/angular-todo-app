import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {TodoSearchResult} from './todo';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-todo-search-results',
  template: `
    <mat-card>
      <mat-card-title-group>
        <mat-card-title>
          <span>{{'TODO.TITLE' | translate}}</span>
          <button mat-icon-button [attr.aria-label]="'TODO.ADD' | translate" [routerLink]="detailPath">
            <mat-icon>add</mat-icon>
          </button>
        </mat-card-title>
      </mat-card-title-group>
      <mat-card-content>
        <app-todo-result (completed)="completed.emit($event)"
                         (setImportant)="setImportant.emit($event)"
                         (delete)="delete.emit($event)"
                         [results]="results"></app-todo-result>
      </mat-card-content>
    </mat-card>
  `
})
export class TodoSearchResultsComponent {

  @Input()
  results: TodoSearchResult[];
  @Output()
  completed = new EventEmitter();
  @Output()
  setImportant = new EventEmitter();
  @Output()
  delete = new EventEmitter();

  detailPath = '/todo/detail/';
}

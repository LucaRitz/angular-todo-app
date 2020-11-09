import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {TodoSearchResult} from './todo';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-todo-search-results',
  template: `
    <mat-card>
      <mat-card-title-group>
        <mat-card-title>
          <span>{{'TODO.TITLE' | translate}}</span>
        </mat-card-title>
      </mat-card-title-group>
      <mat-card-content>
        <app-todo-result [results]="results"></app-todo-result>
      </mat-card-content>
    </mat-card>
  `
})
export class TodoSearchResultsComponent {

  @Input()
  results: TodoSearchResult[];
}

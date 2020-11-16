import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import * as Selectors from './todo.selectors';
import * as Action from './todo.actions';
import {Store} from '@ngrx/store';
import {Todo, TodoSearchResult} from './todo';
import {TodoState} from './todo.reducer';
import {DialogService} from '../dialog.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-container>
      <app-todo-search-results [results]="results$ | async"
                               (completed)="complete($event)"
                               (delete)="onDelete($event)"
                               (setImportant)="setImportant($event)">
      </app-todo-search-results>
    </ng-container>
  `
})
export class TodoSearchContainer implements OnInit {

  results$: Observable<TodoSearchResult[]>;

  constructor(private readonly store: Store<TodoState>,
              private readonly dialogService: DialogService) {
    this.results$ = this.store.select(Selectors.selectResults);
  }

  ngOnInit(): void {
    this.onSearch();
  }

  onSearch(): void {
    this.store.dispatch(Action.search());
  }

  complete(todo: {id: string, completed: boolean}): void {
    this.store.dispatch(Action.completeTodo({item: todo}));
  }

  setImportant(action: {detail: Todo, important: boolean}): void {
    this.store.dispatch(Action.setImportant(action));
  }

  onDelete(id: string): void {
    if (this.dialogService.confirm('TODO.CONFIRM_DELETE')) {
      this.store.dispatch(Action.deleteRow({id}));
    }
  }
}

import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import * as Selectors from './todo.selectors';
import * as Action from './todo.actions';
import {Store} from '@ngrx/store';
import {TodoSearchResult} from './todo';
import {TodoState} from './todo.reducer';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-container>
      <app-todo-search-results [results]="results$ | async" (completed)="save($event)"></app-todo-search-results>
    </ng-container>
  `
})
export class TodoSearchContainer implements OnInit {

  results$: Observable<TodoSearchResult[]>;

  constructor(private readonly store: Store<TodoState>) {
    this.results$ = this.store.select(Selectors.selectResults);
  }

  ngOnInit(): void {
    this.onSearch();
  }

  onSearch(): void {
    this.store.dispatch(Action.search());
  }

  save(todo: {id: string, completed: boolean}): void {
    this.store.dispatch(Action.completeTodo({item: todo}));
  }
}

import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {TodoService} from './todo.service';
import {of} from 'rxjs';
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators';
import * as Action from './todo.actions';
import * as Selectors from '../login/login.selectors';
import {UserState} from '../login/login.reducer';
import {Store} from '@ngrx/store';

@Injectable()
export class TodoEffects {

  search$ = createEffect(() => this.actions$.pipe(
    ofType(Action.search),
    switchMap(() => this.store.select(Selectors.selectUser).pipe(
      mergeMap(user => this.service.search(user)),
      mergeMap(results => of(Action.resultsLoaded({results}))),
      catchError(() => of(Action.resultsLoaded({results: []})))
    ))
  ));

  constructor(private readonly actions$: Actions,
              private readonly store: Store<UserState>,
              private readonly service: TodoService) {
  }

}

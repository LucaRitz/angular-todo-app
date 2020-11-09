import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {TodoService} from './todo.service';
import {of} from 'rxjs';
import {catchError, mergeMap, switchMap} from 'rxjs/operators';
import * as Action from './todo.actions';

@Injectable()
export class TodoEffects {

  search$ = createEffect(() => this.actions$.pipe(
    ofType(Action.search),
    switchMap(() => this.service.search().pipe(
      mergeMap(results => of(Action.resultsLoaded({results}))),
      catchError(() => of(Action.resultsLoaded({results: []})))
    ))
  ));

  constructor(private readonly actions$: Actions,
              private readonly service: TodoService) {
  }

}

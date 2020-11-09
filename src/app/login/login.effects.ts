import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {LoginService} from './login.service';
import {TodoService} from '../todo/todo.service';
import {of} from 'rxjs';
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators';
import * as Action from './login.actions';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {UserState} from './login.reducer';
import * as Selectors from './login.selectors';

@Injectable()
export class LoginEffects {

  login$ = createEffect(() => this.actions$.pipe(
    ofType(Action.login),
    switchMap(() => this.store.select(Selectors.selectUser).pipe(
      mergeMap(user => this.service.login(user)),
      map(() => {
        this.router.navigateByUrl('/todo/search');
        return Action.empty();
      }),
      catchError(() => of(Action.empty())) //  TODO: Display error message
    ))
  ));

  register$ = createEffect(() => this.actions$.pipe(
    ofType(Action.register),
    switchMap(() => this.store.select(Selectors.selectUser).pipe(
      mergeMap(user => this.service.register(user)),
      map(() => {
        this.router.navigateByUrl('/todo/search');
        return Action.empty();
      }),
      catchError(() => of(Action.empty())) //  TODO: Display error message
    ))
  ));

  constructor(private readonly actions$: Actions,
              private readonly service: LoginService,
              private readonly router: Router,
              private readonly store: Store<UserState>) {
  }

}

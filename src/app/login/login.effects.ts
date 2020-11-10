import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {LoginService} from './login.service';
import {of} from 'rxjs';
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators';
import * as Action from './login.actions';
import {Router} from '@angular/router';

@Injectable()
export class LoginEffects {

  login$ = createEffect(() => this.actions$.pipe(
    ofType(Action.login),
    switchMap(param => of(param.user).pipe(
      mergeMap(user => this.service.login(user)),
      map(user => {
        return Action.loggedIn({user});
      }),
      catchError(() => of(Action.empty())) //  TODO: Display error message
    ))
  ));

  register$ = createEffect(() => this.actions$.pipe(
    ofType(Action.register),
    switchMap(param => of(param.user).pipe(
      mergeMap(user => this.service.register(user)),
      map(user => {
        return Action.loggedIn({user});
      }),
      catchError(() => of(Action.empty())) //  TODO: Display error message
    ))
  ));

  loggedIn$ = createEffect(() => this.actions$.pipe(
    ofType(Action.loggedIn),
    switchMap(() => of(undefined).pipe(
      map(() => {
        this.router.navigateByUrl('/todo');
        return Action.empty();
      })))
  ));
  constructor(private readonly actions$: Actions,
              private readonly service: LoginService,
              private readonly router: Router) {
  }

}

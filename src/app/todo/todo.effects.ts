import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {TodoService} from './todo.service';
import {EMPTY, forkJoin, Observable, of} from 'rxjs';
import {catchError, mergeMap, switchMap, tap} from 'rxjs/operators';
import * as Action from './todo.actions';
import * as LoginSelectors from '../login/login.selectors';
import {UserState} from '../login/login.reducer';
import {Store} from '@ngrx/store';
import {TodoState} from './todo.reducer';
import {Router} from '@angular/router';
import {NotificationService} from '../notification.service';
import {Todo} from './todo';
import {User} from '../login/login';

@Injectable()
export class TodoEffects {

  search$ = createEffect(() => this.actions$.pipe(
    ofType(Action.search, Action.importantSet, Action.completed, Action.rowDeleted),
    switchMap(() => this.user$.pipe(
      mergeMap(user => this.service.search(user)),
      mergeMap(results => of(Action.resultsLoaded({results}))),
      catchError(() => of(Action.resultsLoaded({results: []})))
    ))
  ));

  getDetail$ = createEffect(() => this.actions$.pipe(
    ofType(Action.getDetail),
    switchMap((action) => of(action.id).pipe(
      mergeMap(id => id
        ? this.user$.pipe(
          mergeMap(user => this.service.get(user, id)),
          mergeMap(detail => of(Action.detailLoaded({detail}))),
        )
        : EMPTY),
      catchError(() => EMPTY)
    ))
  ));

  completeTodo$ = createEffect(() => this.actions$.pipe(
    ofType(Action.completeTodo),
    switchMap(action => of(action.item).pipe(
      mergeMap(item => this.user$.pipe(
        mergeMap(user => forkJoin([this.service.get(user, item.id), of(user)])),
        mergeMap(([todo, user]) => {
          todo.completed = item.completed;
          return this.service.update(user, todo);
        }),
      )),
      mergeMap(() => of(Action.completed())),
      catchError(() => EMPTY)
    ))
  ));

  saveDetail$ = createEffect(() => this.actions$.pipe(
    ofType(Action.saveDetail),
    switchMap((action) => of(action.detail).pipe(
      mergeMap((detail) =>
        this.user$.pipe(
          mergeMap(user => !detail.id
            ? this.service.create(user, detail).pipe(
              tap(d => this.showDetail(d))
            )
            : this.service.update(user, detail))
        )
      ),
      tap(() => this.notificationService.success('TODO.SAVED')),
      mergeMap(detail => of(Action.detailSaved({detail}))),
      catchError(() => EMPTY)
    ))
  ));

  setImportant$ = createEffect(() => this.actions$.pipe(
    ofType(Action.setImportant),
    switchMap((action) => of({...action.detail, important: action.important}).pipe(
      mergeMap((detail: Todo) =>
        this.user$.pipe(
          mergeMap(user => this.service.update(user, detail))
        )
      ),
      mergeMap(detail => of(Action.importantSet())),
      catchError(() => EMPTY)
    ))
  ));

  deleteRow$ = createEffect(() => this.actions$.pipe(
    ofType(Action.deleteRow),
    switchMap((action) => of(action.id).pipe(
      mergeMap(id =>
        this.user$.pipe(
          mergeMap(user => this.service.delete(user, id)),
        )),
      mergeMap(() => of(Action.rowDeleted())),
      catchError(() => EMPTY)
    ))
  ));

  private get user$(): Observable<User> {
    return this.userStore.select(LoginSelectors.selectUser);
  }

  private showDetail(detail: Todo): void {
    this.router.navigate(['todo', 'detail', detail.id], {replaceUrl: true}).then();
  }

  constructor(private readonly actions$: Actions,
              private readonly userStore: Store<UserState>,
              private readonly store: Store<TodoState>,
              private readonly service: TodoService,
              private readonly notificationService: NotificationService,
              private readonly router: Router) {
  }

}

import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';
import * as Selectors from './todo.selectors';
import * as Action from './todo.actions';
import {Store} from '@ngrx/store';
import {Todo} from './todo';
import {TodoState} from './todo.reducer';
import {ActivatedRoute} from '@angular/router';
import {switchMap, tap} from 'rxjs/operators';
import {DialogService} from '../dialog.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-container>
      <app-todo-detail [detail]="detail$ | async"
                       (save)="onSave($event)"
                       (delete)="onDelete($event)">
      </app-todo-detail>
    </ng-container>
  `
})
export class TodoDetailContainer implements OnInit {

  detail$: Observable<Todo>;

  constructor(private readonly store: Store<TodoState>,
              private readonly route: ActivatedRoute,
              private readonly dialogService: DialogService) {
    this.detail$ = this.store.select(Selectors.selectDetail);
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => of(params.get('id'))),
      tap((id) => {
        this.store.dispatch(Action.getDetail({id}));
      })
    ).subscribe();
  }

  onSave(detail: Todo): void {
    this.store.dispatch(Action.saveDetail({detail}));
  }

  onDelete(detail: Todo): void {
    if (this.dialogService.confirm('TODO.CONFIRM_DELETE')) {
      this.store.dispatch(Action.deleteDetail({id: String(detail.id)}));
    }
  }
}

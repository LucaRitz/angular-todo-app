import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Todo} from './todo';
import {TodoForm} from './todo.form';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-todo-detail',
  template: `
    <form [formGroup]="form.group" (ngSubmit)="onSubmit()">
      <mat-card>
        <mat-card-title>
          <span>{{_detail?.title || 'TODO.ADD' | translate}}</span>
          <button type="button" mat-icon-button [attr.aria-label]="'TODO.DELETE' | translate"
                  *ngIf="_detail?.id"
                  (click)="delete.emit(_detail)">
            <mat-icon>delete</mat-icon>
          </button>
        </mat-card-title>
        <mat-card-content>
          <div>
            <mat-form-field>
              <mat-label>{{'TODO.DETAIL.TITLE' | translate}}</mat-label>
              <input type="text" matInput [formControlName]="'title'">
              <mat-error *ngIf="form.title.invalid">{{form.getError(form.title) | translate}}</mat-error>
            </mat-form-field>
          </div>
          <div>
            <mat-form-field>
              <mat-label>{{'TODO.DETAIL.DUE_DATE' | translate}}</mat-label>
              <input type="date" matInput [formControlName]="'dueDate'">
              <mat-error *ngIf="form.dueDate.invalid">{{form.getError(form.dueDate) | translate}}</mat-error>
            </mat-form-field>
          </div>
        </mat-card-content>
        <mat-card-actions>
          <button type="submit" mat-raised-button color="primary">{{'SAVE' | translate}}</button>
          <button type="button" appBackButton mat-raised-button>{{'BACK' | translate}}</button>
        </mat-card-actions>
      </mat-card>
    </form>
  `
})
export class TodoDetailComponent {

  form = new TodoForm();

  _detail: Todo;

  @Input()
  set detail(value: Todo) {
    this._detail = value;
    this.form.patchValue(value);
  }

  @Output()
  save = new EventEmitter<Todo>();

  @Output()
  delete = new EventEmitter<Todo>();

  onSubmit(): void {
    if (this.form.valid) {
      this.save.emit(this.form.value);
    }
  }
}

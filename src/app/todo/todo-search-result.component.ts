import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {TodoSearchResult} from './todo';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-todo-result',
  template: `
    <table mat-table [dataSource]="results">
      <!-- Completed -->
      <ng-container matColumnDef="completed">
        <th mat-header-cell *matHeaderCellDef></th>
        <td mat-cell *matCellDef="let todo">
          <div>
            <a>
              <div style="cursor: pointer;">
                <mat-checkbox [checked]="todo.completed" (change)="completed.emit({id: todo.id, completed: $event.checked})"></mat-checkbox>
              </div>
            </a>
          </div>
        </td>
      </ng-container>
      <!-- Title -->
      <ng-container matColumnDef="title">
        <th mat-header-cell *matHeaderCellDef></th>
        <td mat-cell *matCellDef="let todo" [routerLink]="detailPath + todo.id">
          <div>
            <a>
              <div style="cursor: pointer;">
                <mat-label [class.main-text]="todo.important" [class.strike-through]="todo.completed">{{ todo.title }}</mat-label>
              </div>
            </a>
          </div>
        </td>
      </ng-container>
      <!-- Important -->
      <ng-container matColumnDef="important">
        <th mat-header-cell *matHeaderCellDef></th>
        <td mat-cell *matCellDef="let todo">
          <div>
            <button type="button" mat-icon-button
                    [attr.aria-label]="(todo.important ? 'TODO.MARK_UNIMPORTANT' : 'TODO.MARK_IMPORTANT') | translate"
                    (click)="setImportant.emit({detail: todo, important: !todo.important})">
              <mat-icon [fontSet]="todo.important ? '' : 'material-icons-outlined'"
                        [attr.aria-label]="todo.important ? ('TODO.IS_IMPORTANT' | translate) : ('TODO.IS_UNIMPORTANT' | translate)">
                grade
              </mat-icon>
            </button>
          </div>
        </td>
      </ng-container>
      <!-- Due date -->
      <ng-container matColumnDef="dueDate">
        <th mat-header-cell *matHeaderCellDef></th>
        <td mat-cell *matCellDef="let todo" [routerLink]="detailPath + todo.id">
          <div>
            <a>
              <div style="cursor: pointer;">
                <mat-label>{{ todo.dueDate }}</mat-label>
              </div>
            </a>
          </div>
        </td>
      </ng-container>
      <!-- Edit-/Delete-Button -->
      <ng-container matColumnDef="actions">
        <th mat-header-cell *matHeaderCellDef></th>
        <td mat-cell *matCellDef="let todo">
          <div>
            <button type="button" mat-icon-button [attr.aria-label]="'TODO.EDIT' | translate" [routerLink]="detailPath + todo.id">
              <mat-icon>edit</mat-icon>
            </button>
            <button type="button" mat-icon-button [attr.aria-label]="'TODO.DELETE' | translate"
                    (click)="delete.emit(todo.id)">
              <mat-icon>delete</mat-icon>
            </button>
          </div>
        </td>
      </ng-container>
      <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
    </table>
  `,
  styles: [
    '.mat-cell {padding: 10px 5px 10px 5px; vertical-align: middle; }',
    'mat-label {margin-left: 10px;}',
    '.main-text {font-weight: bold;}',
    '.strike-through {text-decoration: line-through;}'
  ]
})
export class TodoSearchResultComponent {

  @Input()
  results: TodoSearchResult[];

  @Output()
  completed = new EventEmitter();

  @Output()
  setImportant = new EventEmitter();

  @Output()
  delete = new EventEmitter();

  displayedColumns: string[] = ['completed', 'title', 'important', 'dueDate', 'actions'];
  detailPath = '/todo/detail/';

}

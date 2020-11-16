import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {TodoSearchResult} from './todo';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-todo-result',
  template: `
    <table mat-table [dataSource]="results">
      <!-- Number -->
      <ng-container matColumnDef="number">
        <th mat-header-cell *matHeaderCellDef></th>
        <td mat-cell *matCellDef="let todo" [routerLink]="detailPath + todo.id">
          <div>
            <a>
              <div style="cursor: pointer;">
                <mat-label>{{ todo.id }}</mat-label>
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
                <mat-label class="main-text">{{ todo.title }}</mat-label>
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
            <button type="button" mat-icon-button [attr.aria-label]="(todo.important ? 'TODO.MARK_UNIMPORTANT' : 'TODO.MARK_IMPORTANT') | translate">
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
            <button type="button" mat-icon-button [attr.aria-label]="'TODO.DELETE' | translate">
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
    '.main-text {font-weight: bold;}'
  ]
})
export class TodoSearchResultComponent {

  @Input()
  results: TodoSearchResult[];

  displayedColumns: string[] = ['number', 'title', 'important', 'dueDate', 'actions'];
  detailPath = '/todo/detail/';

}

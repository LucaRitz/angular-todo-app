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

  displayedColumns: string[] = ['number', 'title', 'dueDate'];
  detailPath = '/todo/detail/';

}

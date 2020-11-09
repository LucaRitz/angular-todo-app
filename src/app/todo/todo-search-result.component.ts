import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {TodoSearchResult} from './todo';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-todo-result',
  template: `
    <table mat-table [dataSource]="results" fxFill>
      <!-- Data Column -->
      <ng-container matColumnDef="data">
        <th mat-header-cell *matHeaderCellDef fxFlex></th>
        <td mat-cell *matCellDef="let todo" fxFlex fxLayout="row" [routerLink]="detailPath + todo.id">
          <div fxFlexAlign="center" fxFlex>
            <a>
              <div fxLayout="row wrap" fxFlex style="cursor: pointer;">
                <mat-label fxFlex="20" appTruncate
                           fxLayoutAlign="left center">{{ todo.id }}</mat-label>
                <mat-label fxFlex="80" appTruncate
                           fxLayoutAlign="left center">{{ todo.title }}</mat-label>
              </div>
            </a>
          </div>
        </td>
      </ng-container>
      <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
    </table>
  `,
  styles: [
    '.mat-cell {padding: 10px 5px 10px 5px; vertical-align: middle; }'
  ]
})
export class TodoSearchResultComponent {

  @Input()
  results: TodoSearchResult[];

  displayedColumns: string[] = ['data'];
  detailPath = '/todo/detail/';

}

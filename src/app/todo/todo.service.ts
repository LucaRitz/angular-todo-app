import {Observable, of} from 'rxjs';
import {TodoSearchResult} from './todo';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  search(): Observable<TodoSearchResult[]> {
    return of([{name: 'test', checked: true}]);
  }
}

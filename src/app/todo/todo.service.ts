import {Observable} from 'rxjs';
import {Todo, TodoSearchResult} from './todo';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../login/login';
import {getAuthHeader} from '../service.helper';
import {ErrorHandlerService} from '../error-handler.service';

@Injectable({
  providedIn: 'root',
})
export class TodoService {

  BASE_URL = 'http://distsys.ch:1450';

  search(user: User): Observable<TodoSearchResult[]> {
    return this.httpClient.get<TodoSearchResult[]>(`${this.BASE_URL}/todos`, {
      headers: {Authorization: getAuthHeader(user)}
    }).pipe(this.errorHandler.error());
  }

  get(user: User, id: string): Observable<Todo> {
    return this.httpClient.get<Todo>(`${this.BASE_URL}/todos/${id}`, {
      headers: {Authorization: getAuthHeader(user)}
    }).pipe(this.errorHandler.error());
  }

  delete(user: User, id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.BASE_URL}/todos/${id}`, {
      headers: {Authorization: getAuthHeader(user)}
    }).pipe(this.errorHandler.error());
  }

  create(user: User, todo: Todo): Observable<Todo> {
    return this.httpClient.post<Todo>(`${this.BASE_URL}/todos`, todo, {
      headers: {Authorization: getAuthHeader(user)}
    }).pipe(this.errorHandler.error());
  }

  update(user: User, todo: Todo): Observable<Todo> {
    return this.httpClient.put<Todo>(`${this.BASE_URL}/todos/${todo.id}`, todo, {
      headers: {Authorization: getAuthHeader(user)}
    }).pipe(this.errorHandler.error());
  }

  constructor(private readonly httpClient: HttpClient,
              private readonly errorHandler: ErrorHandlerService) {
  }

}

import {Observable, of} from 'rxjs';
import {TodoSearchResult} from './todo';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../login/login';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  BASE_URL = 'http://distsys.ch:1450';

  search(user: User): Observable<TodoSearchResult[]> {
    return this.httpClient.get<TodoSearchResult[]>(`${this.BASE_URL}/todos`, {
      headers: {Authorization: this.getAuthHeader(user)}
    });
  }

  constructor(private readonly httpClient: HttpClient) {
  }

  getAuthHeader(user): string {
    return 'Basic ' + btoa(user.name + ':' + user.password);
  }
}

import {Observable} from 'rxjs';
import {User} from './login';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {TodoSearchResult} from '../todo/todo';
import {getAuthHeader} from '../service.helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  BASE_URL = 'http://distsys.ch:1450';

  register(user: User): Observable<User> {
    return this.httpClient.post<void>(`${this.BASE_URL}/users`, user)
      .pipe(
        map(() => user)
      );
  }

  login(user: User): Observable<User> {
    return this.httpClient.get<TodoSearchResult[]>(`${this.BASE_URL}/todos`, {
      headers: {Authorization: getAuthHeader(user)}
    }).pipe(
      map(() => user)
    );
  }

  constructor(private readonly httpClient: HttpClient) {
  }
}

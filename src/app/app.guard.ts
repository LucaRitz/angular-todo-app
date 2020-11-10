import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Store} from '@ngrx/store';
import {UserState} from './login/login.reducer';
import {Injectable} from '@angular/core';
import * as Selector from './login/login.selectors';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return this.store.select(Selector.selectUser).pipe(
      map(user => {
        if (user && user.loggedIn) {
          return true;
        }
        return this.router.parseUrl('/login');
      })
    );
  }

  constructor(private readonly store: Store<UserState>,
              private readonly router: Router) {
  }

}

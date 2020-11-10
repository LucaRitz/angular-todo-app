import {Action, createReducer, on} from '@ngrx/store';
import * as Actions from './login.actions';
import {User} from './login';

export const loginFeatureKey = 'login';

export interface UserState {
  user: User;
}

export const initialState: UserState = {
  user: undefined
};

const loginReducer = createReducer(
  initialState,
  on(Actions.logout, (state) => {
    return {
      ...state,
      user: undefined
    };
  }),
  on(Actions.loggedIn, (state, {user}) => {
    return {
      ...state,
      user: {...user, loggedIn: true}
    };
  })
);

export function reducer(state: UserState | undefined, action: Action): UserState {
  return loginReducer(state, action);
}

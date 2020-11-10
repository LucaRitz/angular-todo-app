import {createAction, props} from '@ngrx/store';
import {User} from './login';

export const login = createAction('[Login] Login', props<{user: User}>());
export const logout = createAction('[Login] Logout');
export const register = createAction('[Login] Register', props<{user: User}>());
export const loggedIn = createAction('[Login] Logged in', props<{user: User}>());

export const empty = createAction('[Login] No op action');

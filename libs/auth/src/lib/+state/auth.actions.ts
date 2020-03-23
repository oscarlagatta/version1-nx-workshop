import { createAction, props } from '@ngrx/store';
import { Authenticate } from '../data-models/authenticate';
import { User } from '../data-models/user';

export const login = createAction(
  '[Auth Page] Login',
  props<{ authenticate: Authenticate }>()
);

export const loginSuccess = createAction(
  '[Auth API] Login Success',
  props<{ user: User }>()
);

export const loginFail = createAction(
  '[Auth] Load Auth Failure',
  props<{ error: any }>()
);

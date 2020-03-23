import { createReducer, on, Action } from '@ngrx/store';
import * as AuthActions from './auth.actions';
import { AuthData } from './auth.models';

export const AUTH_FEATURE_KEY = 'auth';

export interface AuthState {
  auth: AuthData;
}

export interface AuthPartialState {
  readonly [AUTH_FEATURE_KEY]: AuthState;
}

export const initialState: AuthData = {
  // set initial required properties
  user: null,
  loading: false,
  error: ''
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.login, state => ({ ...state, loading: true, error: null })),
  on(AuthActions.loginSuccess, (state, action) => {
    return { ...state, user: action.user, loading: false };
  }),
  on(AuthActions.loginFail, (state, { error }) => ({
    ...state,
    user: null,
    loading: false,
    error
  }))
);

export function reducer(state: AuthData | undefined, action: Action) {
  return authReducer(state, action);
}

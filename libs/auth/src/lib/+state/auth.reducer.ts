import { AuthActions, AuthActionTypes } from './auth.actions';
import { User } from '../data-models/user';

export const AUTH_FEATURE_KEY = 'auth';

/**
 * Interface for the 'Auth' data used in
 *  - AuthState, and the reducer function
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface AuthData {
  loading: boolean;
  user: User;
  error: string;
}

// export interface AuthState {
//   list: Entity[]; // list of Auth; analogous to a sql normalized table
//   selectedId?: string | number; // which Auth record has been selected
//   loaded: boolean; // has the Auth list been loaded
//   error?: any; // last none error (if any)
// }

export interface AuthState {
  readonly auth: AuthData;
}

export const initialState: AuthData = {
  error: '',
  user: null,
  loading: false
};

export function reducer(
  state: AuthData = initialState,
  action: AuthActions
): AuthData {
  switch (action.type) {
    case AuthActionTypes.Login: {
      return { ...state, loading: true };
    }
    case AuthActionTypes.LoginSuccess: {
      return { ...state, user: action.payload, loading: false };
    }
    case AuthActionTypes.LoginFail: {
      return { ...state, user: null, loading: false };
    }
    default:
      return state;
  }
}

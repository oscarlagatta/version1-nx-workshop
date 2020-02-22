import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import { AuthPartialState } from './auth.reducer';
import {
  Login,
  LoginSuccess,
  LoginFail,
  AuthActionTypes
} from './auth.actions';

@Injectable()
export class AuthEffects {
  @Effect() loadAuth$ = this.dataPersistence.fetch(AuthActionTypes.Login, {
    run: (action: Login, state: AuthPartialState) => {
      // Your custom REST 'load' logic goes here. For now just return an empty list...
      return new LoginSuccess(state['user']);
    },

    onError: (action: Login, error) => {
      console.error('Error', error);
      return new LoginFail(error);
    }
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<AuthPartialState>
  ) {}
}

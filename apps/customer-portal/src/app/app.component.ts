import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState, loginSuccess } from '@version1/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'customer-portal';
  constructor(private store: Store<AuthState>) {
    const user = JSON.parse(localStorage.getItem('workshop-user'));
    if (user) {
      this.store.dispatch(loginSuccess({ user: user }));
    }
  }
}

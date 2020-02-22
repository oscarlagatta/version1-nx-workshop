import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthState, User, authQuery } from '@version1/auth';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  user$: Observable<User>;
  constructor(private store: Store<AuthState>) {}

  ngOnInit() {
    this.user$ = this.store.select(authQuery.getUser)
  }
}

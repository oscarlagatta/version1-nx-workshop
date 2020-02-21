import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { Authenticate } from '../../data-models/authenticate';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent implements OnInit {
  @Output() submitData = new EventEmitter<Authenticate>();

  constructor() {}

  ngOnInit() {}

  login(authenticate: Authenticate) {
    this.submitData.emit(authenticate);
  }
}

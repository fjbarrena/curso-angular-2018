import { Component } from '@angular/core';
import { LoginService } from './core/login.service';
import { Login } from './shared/entities/login';
import { Token } from './shared/entities/token';
import { CurrentUserService } from './core/current-user.service';

@Component({
  selector: 'lol-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
  ) {
  }
}

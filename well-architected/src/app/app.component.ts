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
    private readonly loginService: LoginService,
    private readonly currentUserService: CurrentUserService
  ) {
    let login: Login = new Login();

    login.email = 'kelear@iti.es';
    login.password = 'n0tiene';

    this.loginService.login(login).subscribe(
      (receivedToken: Token) => {
        console.log('Login correcto. El token es: '
          + receivedToken.access_token);

        this.currentUserService.token = receivedToken;
      }
    );
  }
}

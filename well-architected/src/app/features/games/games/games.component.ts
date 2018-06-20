import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../core/login.service';
import { Login } from '../../../shared/entities/login';
import { Token } from '../../../shared/entities/token';

@Component({
  selector: 'lol-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  constructor(private readonly loginService: LoginService) { }

  ngOnInit() {
    let login: Login = new Login();

    login.email = 'kelear@iti.es';
    login.password = 'n0tiene';

    this.loginService.login(login).subscribe(
      (receivedToken: Token) => {
        console.log('Login correcto. El token es: '
          + receivedToken.access_token);
      }
    );
  }

}

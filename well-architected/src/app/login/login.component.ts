import { Component, OnInit } from '@angular/core';
import { LoginService } from '../core/login.service';
import { Login } from '../shared/entities/login';
import { Token } from '../shared/entities/token';
import { Router } from '@angular/router';
import { CurrentUserService } from '../core/current-user.service';
import { TimelineEvent } from '../shared/entities/timeline-event';

@Component({
  selector: 'lol-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  errorMessage = '';

  

  constructor(private readonly loginService: LoginService,
    private readonly router: Router,
    private readonly currentUserService: CurrentUserService) { }

  ngOnInit() {
  }

  doSubmit() {
    let login: Login = new Login();

    login.email = this.username;
    login.password = this.password;

    this.loginService.login(login).subscribe(
      (result: Token) => {
        this.currentUserService.token = result;
        this.router.navigate(['/private/dashboard']);
      },
      (error) => {
        console.log("Error en el login");
        this.errorMessage = 'Login incorrecto';
      }
    );
  }
}

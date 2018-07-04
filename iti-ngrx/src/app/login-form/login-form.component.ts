import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { LoginModel, Login } from '../models/login.model';
import { DoLoginAction } from '../actions/login.actions';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm: LoginModel = new Login();

  constructor(private store: Store<AppState>) { }

  ngOnInit() {

  }

  doLogin() {
    this.store.dispatch(new DoLoginAction(this.loginForm));
  }

}

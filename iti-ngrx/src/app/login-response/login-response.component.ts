import { Component, OnInit } from '@angular/core';
import { AppState } from '../app.state';
import { Store } from '@ngrx/store';
import { LoginModel } from '../models/login.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login-response',
  templateUrl: './login-response.component.html',
  styleUrls: ['./login-response.component.css']
})
export class LoginResponseComponent implements OnInit {
  logins: Observable<LoginModel[]>;

  constructor(private store: Store<AppState>) {
    this.logins = this.store.select('login');
  }

  ngOnInit() {

  }

}

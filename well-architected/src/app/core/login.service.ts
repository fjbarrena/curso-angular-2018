import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Login } from '../shared/entities/login';
import { Token } from '../shared/entities/token';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private readonly httpClient: HttpClient) { }

  public login(data: Login): Observable<Token> {
    return this.httpClient.post<Token>(
      environment.baseEndpointUrl + '/auth/login', data);
  }
}

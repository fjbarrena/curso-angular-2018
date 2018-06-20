import { Injectable } from '@angular/core';
import { Token } from '../shared/entities/token';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {
  public token: Token = new Token();

  constructor() { }
}

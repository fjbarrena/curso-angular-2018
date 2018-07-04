import { Action } from '@ngrx/store';
import { LoginModel } from '../models/login.model';

export const DO_LOGIN       = '[LOGIN] Do login';
export const LOGIN_SUCCESS  = '[LOGIN] Login successful';
export const LOGIN_FAILURE  = '[LOGIN] Login failure';

export class DoLoginAction implements Action {
    readonly type = DO_LOGIN;

    constructor(public payload: LoginModel) {}
}

export class LoginSuccessAction implements Action {
    readonly type = LOGIN_SUCCESS;

    constructor() {}
}

export class LoginFailureAction implements Action {
    readonly type = LOGIN_FAILURE;

    constructor() {}
}

export type Actions = DoLoginAction | LoginSuccessAction | LoginFailureAction;



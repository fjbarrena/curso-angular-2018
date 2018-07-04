export interface LoginModel {
    email: string;
    password: string;
    remember: boolean;
}

export class Login implements LoginModel {
    email: string;
    password: string;
    remember: boolean;
}



import { LoginModel } from '../models/login.model';
import { Actions, DO_LOGIN, LOGIN_SUCCESS } from '../actions/login.actions';

// Estado inicial de la aplicación
const initialState: LoginModel = {
    email: '',
    password: '',
    remember: false
};

export function reducer(state: LoginModel[] = [initialState], action: Actions) {
    switch (action.type) {
        case DO_LOGIN:
            // Si llega la acción de DO_LOGIN, como payload nos llegará los datos que ha
            // insertado el usuario. Simplemente devolvemos el mismo estado con los datos
            // nuevos
            console.log(action);
            return [...state, action.payload];
        default:
            return state;
    }
}


import { IAction, IUserState, TError } from '../../models';
import { userActionTypes } from '../../consts';
import { userState } from '../states/user.state';
import { createReducer } from './';

export const userReducer = createReducer<IUserState>(userState, {
    [userActionTypes.LOGIN_SUCCESS]: loginSuccessReducer,
    [userActionTypes.LOGIN_FAILED]: loginFailedReducer,
    [userActionTypes.REFRESH_TOKEN_SUCCESS]: refreshTokenSuccessReducer,
    [userActionTypes.REFRESH_TOKEN_FAILED]: refreshTokenFailedReducer,
    [userActionTypes.LOGOUT]: logoutReducer,
});

function loginSuccessReducer(
    state: IUserState,
    { payload }: IAction<IUserState>
) {
    const { user, expiresIn, idToken, refreshToken } = payload;

    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('expiresIn', expiresIn || '');
    localStorage.setItem('idToken', idToken || '');
    localStorage.setItem('refreshToken', refreshToken || '');

    return {
        ...state,
        ...payload,
    };
}

function loginFailedReducer(state: IUserState, { payload }: IAction<TError>) {
    return {
        ...state,
        error: payload,
    };
}

function refreshTokenSuccessReducer(
    state: IUserState,
    { payload }: IAction<any>
) {
    const { expiresIn, idToken, refreshToken } = payload;

    localStorage.setItem('expiresIn', expiresIn || '');
    localStorage.setItem('idToken', idToken || '');
    localStorage.setItem('refreshToken', refreshToken || '');

    return {
        ...state,
        ...payload,
    };
}

function refreshTokenFailedReducer(
    state: IUserState,
    { payload }: IAction<TError>
) {
    return {
        ...state,
        error: payload,
    };
}

function logoutReducer(state: IUserState) {
    localStorage.removeItem('user');
    localStorage.removeItem('expiresIn');
    localStorage.removeItem('idToken');
    localStorage.removeItem('refreshToken');

    return {
        userState,
    };
}

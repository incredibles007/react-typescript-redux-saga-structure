import { EUserActionTypes } from '../../enums';
import { ILoginUser, IUserState, TError } from '../../models';

export const login = (payload: ILoginUser) => {
    return {
        type: EUserActionTypes.LOGIN,
        payload,
    };
};

export const loginSuccess = (payload: IUserState) => {
    return {
        type: EUserActionTypes.LOGIN_SUCCESS,
        payload,
    };
};

export const loginFailed = (payload: TError) => {
    return {
        type: EUserActionTypes.LOGIN_FAILED,
        payload,
    };
};

export const refreshToken = (payload: any) => {
    return {
        type: EUserActionTypes.REFRESH_TOKEN,
        payload,
    };
};

export const refreshTokenSuccess = (payload: any) => {
    return {
        type: EUserActionTypes.REFRESH_TOKEN_SUCCESS,
        payload,
    };
};

export const refreshTokenFailed = (payload: TError) => {
    return {
        type: EUserActionTypes.REFRESH_TOKEN_FAILED,
        payload,
    };
};

export const logout = () => {
    return {
        type: EUserActionTypes.LOGOUT,
    };
};

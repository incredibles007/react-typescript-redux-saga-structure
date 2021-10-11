import { all, put, takeLatest, call } from 'redux-saga/effects';

import { EUserActionTypes, EBasicActionTypes } from '../../enums';
import { IUser, IUserState } from '../../models';
import { accountService } from '../../services';
import * as fromUserAction from '../actions/user.action';

function* watchReload() {
    try {
        const userState: IUserState = {};

        const idToken = localStorage.getItem('idToken');
        const refreshToken = localStorage.getItem('refreshToken');
        const user = localStorage.getItem('user');

        if (idToken) {
            userState.idToken = idToken;
        }

        if (refreshToken) {
            userState.refreshToken = refreshToken;
        }

        if (user) {
            userState.user = JSON.parse(user);
        }

        yield put(fromUserAction.loginSuccess(userState));
    } catch (err) {}
}

export function* watchLogin(action: { type: string; payload: IUser }) {
    try {
        const { data } = yield call(accountService.loginApi, action.payload);

        const {
            avatarUrl,
            email,
            expiresIn,
            externalId,
            fullName,
            idToken,
            refreshToken,
            roles,
            tokenType,
            userId,
            userSettings,
        } = data;

        const user: IUser = {
            avatarUrl,
            email,
            password: '',
            fullName,
            userId,
        };

        const userState: IUserState = {
            user,
            expiresIn,
            externalId,
            idToken,
            refreshToken,
            roles,
            tokenType,
            userSettings,
        };

        yield put(fromUserAction.loginSuccess(userState));
    } catch (error) {
        const { data, status, statusText } = error.response;

        yield put(fromUserAction.loginFailed({ data, status, statusText }));
    }
}

export function* watchRefreshToken(action: { type: string; payload: any }) {
    try {
        const { data } = yield call(accountService.refreshTokenApi);
        const { userId } = data;

        const currentUser = JSON.parse(
            localStorage.getItem('user') || `{userId: ''}`
        );

        if (currentUser.userId !== userId) {
            yield put(fromUserAction.logout());
            return;
        }

        yield put(fromUserAction.refreshTokenSuccess(data));
        yield put({
            type: action.payload.type,
            payload: action.payload.payload,
        });
    } catch (error) {
        yield put(fromUserAction.logout());
    }
}

export default function* root() {
    yield all([
        takeLatest(EBasicActionTypes.INIT_STORE as any, watchReload),
        takeLatest(EUserActionTypes.LOGIN as any, watchLogin),
        takeLatest(EUserActionTypes.REFRESH_TOKEN as any, watchRefreshToken),
    ]);
}

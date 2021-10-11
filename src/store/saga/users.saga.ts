import { all, call, put, takeLatest } from 'redux-saga/effects';

import { EUsersActionTypes } from '../../enums';
import { appValuesService, usersService } from '../../services';
import * as fromusersAction from '../actions/users.action';
import * as fromUserAction from '../actions/user.action';

export function* watchGetAllUsers(action: { type: string }) {
    try {
        const { data } = yield call(usersService.getAllUserGroupUsers);
        yield put(fromusersAction.getAllUsersSuccess(data));
    } catch (error) {
        if (
            error.response.status === 401 &&
            error.response.statusText === 'Unauthorized'
        ) {
            yield put(fromUserAction.refreshToken(action));
        }
    }
}

export function* whatchAddUserGroupUser(action: {
    type: string;
    payload: any;
}) {
    try {
        const { data } = yield call(
            usersService.addUserGroupUser,
            action.payload
        );

        yield put(fromusersAction.addUserGroupUserSuccess(data));
    } catch (error) {
        if (
            error.response.status === 401 &&
            error.response.statusText === 'Unauthorized'
        ) {
            yield put(fromUserAction.refreshToken(action));
        }
    }
}

export function* watchGetAllRoles(action: { type: string }) {
    try {
        const { data } = yield call(appValuesService.getAllRoles);
        yield put(fromusersAction.getAllRolesSuccess(data));
    } catch (error) {
        if (
            error.response.status === 401 &&
            error.response.statusText === 'Unauthorized'
        ) {
            yield put(fromUserAction.refreshToken(action));
        }
    }
}

export default function* root() {
    yield all([
        takeLatest(EUsersActionTypes.GET_ALL_USERS as any, watchGetAllUsers),
        takeLatest(EUsersActionTypes.GET_ALL_ROLES as any, watchGetAllRoles),
        takeLatest(
            EUsersActionTypes.ADD_USER_GROUP_USER as any,
            whatchAddUserGroupUser
        ),
    ]);
}

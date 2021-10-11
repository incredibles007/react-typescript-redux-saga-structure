import { produce } from 'immer';

import { createReducer } from '.';
import { IAction, IAppUserViewModel, IUserGroupUserState } from '../../models';
import { usersActionTypes } from '../../consts';
import { usersState } from '../states/users.state';

export const usersReducer = createReducer<IUserGroupUserState>(usersState, {
    [usersActionTypes.GET_ALL_USERS_SUCCESS]: getAllUsersSuccess,
    [usersActionTypes.GET_ALL_ROLES_SUCCESS]: getAllRolesSuccess,
    [usersActionTypes.SEARCH_USERS]: searchUsers,
    [usersActionTypes.SELECT_USER_GROUP_USER]: selectUserGroupUser,
    [usersActionTypes.UPDATE_SELECTED_USER_GROUP_USER]: updateSelectedUserGroupUser,
});

function getAllUsersSuccess(
    state: IUserGroupUserState,
    { payload }: IAction<Array<IAppUserViewModel>>
) {
    return {
        ...state,
        users: payload,
    };
}

function getAllRolesSuccess(state: IUserGroupUserState, { payload }: any) {
    return {
        ...state,
        roles: payload,
    };
}

function searchUsers(state: IUserGroupUserState, { payload }: IAction<string>) {
    return produce(state, draft => {
        draft.searchText = payload;
    });
}

function selectUserGroupUser(
    state: IUserGroupUserState,
    { payload }: IAction<IAppUserViewModel>
) {
    return produce(state, draft => {
        draft.selectedUser = payload;
    });
}

function updateSelectedUserGroupUser(
    state: IUserGroupUserState,
    { payload }: IAction<any>
) {
    return produce(state, draft => {
        draft.selectedUser = { ...state.selectedUser, ...payload };
    });
}

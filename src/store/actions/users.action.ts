import { EUsersActionTypes } from '../../enums';
import { IAppUserViewModel } from '../../models';

export const getAllUsers = () => {
    return {
        type: EUsersActionTypes.GET_ALL_USERS,
    };
};

export const getAllUsersSuccess = (payload: IAppUserViewModel[]) => {
    return {
        type: EUsersActionTypes.GET_ALL_USERS_SUCCESS,
        payload,
    };
};

export const getAllUsersFailed = (payload: any) => {
    return {
        type: EUsersActionTypes.GET_ALL_USERS_FAILED,
        payload,
    };
};

export const searchUsers = (payload: string) => {
    return {
        type: EUsersActionTypes.SEARCH_USERS,
        payload,
    };
};

export const addUserGroupUser = (payload: any) => {
    return {
        type: EUsersActionTypes.ADD_USER_GROUP_USER,
        payload,
    };
};

export const addUserGroupUserSuccess = (payload: any) => {
    return {
        type: EUsersActionTypes.ADD_USER_GROUP_USER_SUCCESS,
        payload,
    };
};

export const addUserGroupUserFailed = (payload: any) => {
    return {
        type: EUsersActionTypes.ADD_USER_GROUP_USER_FAILED,
        payload,
    };
};

export const selectUserGroupUser = (payload: IAppUserViewModel) => {
    return {
        type: EUsersActionTypes.SELECT_USER_GROUP_USER,
        payload,
    };
};

export const selectUserGroupUserSuccess = (payload: any) => {
    return {
        type: EUsersActionTypes.SELECT_USER_GROUP_USER_SUCCESS,
        payload,
    };
};

export const selectUserGroupUserFailed = (payload: any) => {
    return {
        type: EUsersActionTypes.SELECT_USER_GROUP_USER_FAILED,
        payload,
    };
};

export const updateSelectedUserGroupUser = (payload: any) => {
    return {
        type: EUsersActionTypes.UPDATE_SELECTED_USER_GROUP_USER,
        payload,
    };
};

export const updateSelectedUserGroupUserSuccess = (payload: any) => {
    return {
        type: EUsersActionTypes.UPDATE_SELECTED_USER_GROUP_USER_SUCCESS,
        payload,
    };
};

export const updateSelectedUserGroupUserFailed = (payload: any) => {
    return {
        type: EUsersActionTypes.UPDATE_SELECTED_USER_GROUP_USER_FAILED,
        payload,
    };
};

export const getAllRoles = () => {
    return {
        type: EUsersActionTypes.GET_ALL_ROLES,
    };
};

export const getAllRolesSuccess = (payload: any[]) => {
    return {
        type: EUsersActionTypes.GET_ALL_ROLES_SUCCESS,
        payload,
    };
};

export const getAllRolesFailed = (payload: any) => {
    return {
        type: EUsersActionTypes.GET_ALL_ROLES_FAILED,
        payload,
    };
};

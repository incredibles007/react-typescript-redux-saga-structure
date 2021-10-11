import { createSelector } from 'reselect';

import { IUserGroupUserState, IRootState } from '../../models';

export const selectUsersState = (
    rootState: IRootState
): IUserGroupUserState => {
    return rootState.usersState;
};

export const selectUsers = createSelector([selectUsersState], usersState => {
    return usersState.users;
});

export const selectRoles = createSelector([selectUsersState], usersState => {
    return usersState.roles;
});

export const selectSearchedUsers = createSelector(
    [selectUsersState],
    usersState =>
        usersState.users.filter(
            (user: any) =>
                user.firstName
                    .toLowerCase()
                    .includes(usersState.searchText.toLowerCase()) ||
                user.lastName
                    .toLowerCase()
                    .includes(usersState.searchText.toLowerCase()) ||
                user.email
                    .toLowerCase()
                    .includes(usersState.searchText.toLowerCase())
        )
);

export const selectSelectedUserGroupUser = createSelector(
    [selectUsersState],
    usersState => usersState.selectedUser
);

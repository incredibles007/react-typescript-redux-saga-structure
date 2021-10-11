import { createSelector } from 'reselect';
import { IRootState, IUserState } from '../../models';

export const selectUserState = (rootState: IRootState): IUserState => {
    return rootState.userState;
};

export const selectUser = createSelector([selectUserState], userState => {
    return userState?.user;
});

export const selectIsLoggedIn = createSelector([selectUserState], userState => {
    return !!userState.idToken;
});

export const selectErrorText = createSelector([selectUserState], userState => {
    return userState?.error?.data?.text;
});

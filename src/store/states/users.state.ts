import { IUserGroupUserState } from '../../models';
import { emptyAppUserViewModel } from '../../utils';

export const usersState: IUserGroupUserState = {
    users: [],
    roles: [],
    searchText: '',
    selectedUser: emptyAppUserViewModel(),
};

import { apiUrls } from '../consts';
import { axiosService } from '.';

export const usersService = (function () {
    const getAllUserGroupUsers = async () => {
        axiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return axiosService.get(apiUrls.USERS_GET_ALL_RESULT);
    };

    const addUserGroupUser = async (payload: any) => {
        axiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return axiosService.post(apiUrls.USERS_ADD_USER_GROUP_USER, payload);
    };

    return {
        getAllUserGroupUsers,
        addUserGroupUser,
    };
})();

import { AxiosService } from '.';
import { apiUrlsV2 } from '../consts';

export const AccountService = (function () {
    const endpoint_post_v1_accounts_login = async (payload: {
        email: string;
        password: string;
    }) => {
        return AxiosService.post(apiUrlsV2.post_v1_accounts_login, payload);
    };

    const endpoint_get_v1_accounts_refresh = async () => {
        const refreshToken = localStorage.getItem('refreshToken') || '';
        return AxiosService.get(
            apiUrlsV2.get_v1_accounts_refresh(refreshToken)
        );
    };

    const endpoint_post_v1_accounts_signup = async (payload: {
        password: string;
        firstName: string;
        email: string;
        lastName: string;
        roleIds: Array<number>;
    }) => {
        return AxiosService.post(apiUrlsV2.post_v1_accounts_signup, payload);
    };

    return {
        endpoint_post_v1_accounts_login,
        endpoint_get_v1_accounts_refresh,
        endpoint_post_v1_accounts_signup,
    };
})();

import { AxiosService } from '.';
import { apiUrlsV2 } from '../consts';

export const UserService = (function () {
    const endpoint_get_v1_users = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(apiUrlsV2.get_v1_users);
    };

    const endpoint_post_v1_users = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.post(apiUrlsV2.post_v1_users);
    };

    const endpoint_get_v1_users_paged_pageSize_page = async (
        pageSize: number,
        page: number
    ) => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(
            apiUrlsV2.get_v1_users_paged_pageSize_page(pageSize, page)
        );
    };

    const endpoint_get_v1_users_id = async (id: number) => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(apiUrlsV2.get_v1_users_id(id));
    };

    const endpoint_get_v1_users_id_settings = async (id: number) => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(apiUrlsV2.get_v1_users_id_settings(id));
    };

    const endpoint_post_v1_users_id_settings = async (id: number) => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.post(apiUrlsV2.post_v1_users_id_settings(id));
    };

    const endpoint_post_v1_users_update_id = async (id: number) => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.post(apiUrlsV2.post_v1_users_update_id(id));
    };

    const endpoint_post_v1_users_resetPassword_id = async (id: number) => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.post(apiUrlsV2.post_v1_users_resetPassword_id(id));
    };

    const endpoint_post_v1_users_changeSuspendedState_id = async (
        id: number
    ) => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.post(
            apiUrlsV2.post_v1_users_changeSuspendedState_id(id)
        );
    };

    const endpoint_post_v1_users_update_profile_id = async (id: number) => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.post(apiUrlsV2.post_v1_users_update_profile_id(id));
    };

    return {
        endpoint_get_v1_users,
        endpoint_post_v1_users,
        endpoint_get_v1_users_paged_pageSize_page,
        endpoint_get_v1_users_id,
        endpoint_get_v1_users_id_settings,
        endpoint_post_v1_users_id_settings,
        endpoint_post_v1_users_update_id,
        endpoint_post_v1_users_resetPassword_id,
        endpoint_post_v1_users_changeSuspendedState_id,
        endpoint_post_v1_users_update_profile_id,
    };
})();

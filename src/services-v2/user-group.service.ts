import { AxiosService } from '.';
import { apiUrlsV2 } from '../consts';

export const UserGroupService = (function () {
    const endpoint_get_v2_user_groups = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(apiUrlsV2.get_v2_user_groups);
    };

    const endpoint_post_v2_user_groups = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.post(apiUrlsV2.post_v2_user_groups);
    };

    const endpoint_patch_v2_user_groups = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.patch(apiUrlsV2.patch_v2_user_groups);
    };

    const endpoint_get_v2_user_groups_userGroupId = async (
        userGroupId: number
    ) => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(
            apiUrlsV2.get_v2_user_groups_userGroupId(userGroupId)
        );
    };

    const endpoint_put_v2_user_groups_check_name = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.put(apiUrlsV2.put_v2_user_groups_check_name);
    };

    const endpoint_delete_v2_user_groups_id = async (id: number) => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.del(apiUrlsV2.delete_v2_user_groups_id(id));
    };

    return {
        endpoint_get_v2_user_groups,
        endpoint_post_v2_user_groups,
        endpoint_patch_v2_user_groups,
        endpoint_get_v2_user_groups_userGroupId,
        endpoint_put_v2_user_groups_check_name,
        endpoint_delete_v2_user_groups_id,
    };
})();

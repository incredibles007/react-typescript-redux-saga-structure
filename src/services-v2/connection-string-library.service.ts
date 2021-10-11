import { AxiosService } from '.';
import { apiUrlsV2 } from '../consts';

export const ConnectionStringLibraryService = (function () {
    const endpoint_get_v1_connection_strings = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(apiUrlsV2.get_v1_connection_strings);
    };

    const endpoint_post_v1_connection_strings = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.post(apiUrlsV2.post_v1_connection_strings);
    };

    const endpoint_patch_v1_connection_strings = async (id: string) => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.patch(apiUrlsV2.patch_v1_connection_strings(id));
    };

    const endpoint_delete_v1_connection_strings = async (id: string) => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.del(apiUrlsV2.delete_v1_connection_strings(id));
    };

    return {
        endpoint_get_v1_connection_strings,
        endpoint_post_v1_connection_strings,
        endpoint_patch_v1_connection_strings,
        endpoint_delete_v1_connection_strings,
    };
})();

import { AxiosService } from '.';
import { apiUrlsV2 } from '../consts';

export const VersionService = (function () {
    const endpoint_get_v1_version = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(apiUrlsV2.get_v1_version);
    };

    const endpoint_get_v1_version_general_info = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(apiUrlsV2.get_v1_version_general_info);
    };

    return {
        endpoint_get_v1_version,
        endpoint_get_v1_version_general_info,
    };
})();

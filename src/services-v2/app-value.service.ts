import { AxiosService } from '.';
import { apiUrlsV2 } from '../consts';

export const AppValueService = (function () {
    const endpoint_get_v1_app_values_roles = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(apiUrlsV2.get_v1_app_values_roles);
    };

    const endpoint_get_v1_app_values_data_types = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(apiUrlsV2.get_v1_app_values_data_types);
    };

    return {
        endpoint_get_v1_app_values_roles,
        endpoint_get_v1_app_values_data_types,
    };
})();

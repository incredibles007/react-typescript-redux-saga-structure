import { AxiosService } from '.';
import { apiUrlsV2 } from '../consts';

export const AppuserSettingService = (function () {
    const endpoint_get_v1_setttings = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(apiUrlsV2.get_v1_setttings);
    };

    return {
        endpoint_get_v1_setttings,
    };
})();

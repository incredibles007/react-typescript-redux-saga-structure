import { AxiosService } from '.';
import { apiUrlsV2 } from '../consts';

export const LogService = (function () {
    const endpoint_get_v1_logs = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(apiUrlsV2.get_v1_logs);
    };

    const endpoint_get_v1_logs_CleareLogs = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(apiUrlsV2.get_v1_logs_CleareLogs);
    };

    return {
        endpoint_get_v1_logs,
        endpoint_get_v1_logs_CleareLogs,
    };
})();

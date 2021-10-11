import { AxiosService } from '.';
import { apiUrlsV2 } from '../consts';

export const SystemNodeService = (function () {
    const endpoint_get_v1_system_nodes = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(apiUrlsV2.get_v1_system_nodes);
    };

    return {
        endpoint_get_v1_system_nodes,
    };
})();

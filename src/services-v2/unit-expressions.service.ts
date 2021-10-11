import { AxiosService } from '.';
import { apiUrlsV2 } from '../consts';

export const UnitExpressionsService = (function () {
    const endpoint_get_v1_unit_expressions = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(apiUrlsV2.get_v1_unit_expressions);
    };

    return {
        endpoint_get_v1_unit_expressions,
    };
})();

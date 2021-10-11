import { AxiosService } from '.';
import { apiUrlsV2 } from '../consts';

export const UnitService = (function () {
    const endpoint_get_v1_units = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(apiUrlsV2.get_v1_units);
    };

    const endpoint_post_v1_units = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.post(apiUrlsV2.post_v1_units);
    };

    const endpoint_patch_v1_units = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.patch(apiUrlsV2.patch_v1_units);
    };

    const endpoint_get_v1_units_getCreationData = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(apiUrlsV2.get_v1_units_getCreationData);
    };

    const endpoint_delete_v1_units_unitId = async (unitId: string) => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.del(apiUrlsV2.delete_v1_units_unitId(unitId));
    };

    return {
        endpoint_get_v1_units,
        endpoint_post_v1_units,
        endpoint_patch_v1_units,
        endpoint_get_v1_units_getCreationData,
        endpoint_delete_v1_units_unitId,
    };
})();

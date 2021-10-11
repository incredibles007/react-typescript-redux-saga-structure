import { AxiosService } from '.';
import { apiUrlsV2 } from '../consts';

export const UnitDimensionService = (function () {
    const endpoint_get_v1_unit_dimension = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(apiUrlsV2.get_v1_unit_dimension);
    };

    const endpoint_post_v1_unit_dimension = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.post(apiUrlsV2.post_v1_unit_dimension);
    };

    const endpoint_get_v1_unit_dimension_id = async (id: string) => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(apiUrlsV2.get_v1_unit_dimension_id(id));
    };

    const endpoint_patch_v1_unit_dimension_id = async (id: string) => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.patch(apiUrlsV2.patch_v1_unit_dimension_id(id));
    };

    const endpoint_delete_v1_unit_dimension_id = async (id: string) => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.del(apiUrlsV2.delete_v1_unit_dimension_id(id));
    };

    return {
        endpoint_get_v1_unit_dimension,
        endpoint_post_v1_unit_dimension,
        endpoint_get_v1_unit_dimension_id,
        endpoint_patch_v1_unit_dimension_id,
        endpoint_delete_v1_unit_dimension_id,
    };
})();

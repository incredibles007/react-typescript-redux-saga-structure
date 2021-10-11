import { AxiosService } from '.';
import { apiUrlsV2 } from '../consts';

export const DataSourceService = (function () {
    const endpoint_get_v1_data_sources = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(apiUrlsV2.get_v1_data_sources);
    };

    const endpoint_post_v1_data_sources = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.post(apiUrlsV2.post_v1_data_sources);
    };

    const endpoint_patch_v1_data_sources_id = async (id: string) => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.patch(apiUrlsV2.patch_v1_data_sources_id(id));
    };

    const endpoint_delete_v1_data_sources_id = async (id: string) => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.del(apiUrlsV2.delete_v1_data_sources_id(id));
    };

    return {
        endpoint_get_v1_data_sources,
        endpoint_post_v1_data_sources,
        endpoint_patch_v1_data_sources_id,
        endpoint_delete_v1_data_sources_id,
    };
})();

import { AxiosService } from '.';
import { apiUrlsV2 } from '../consts';

export const BusinessVariableService = (function () {
    const endpoint_get_v1_business_variables = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(apiUrlsV2.get_v1_business_variables);
    };

    const endpoint_post_v1_business_variables = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.post(apiUrlsV2.post_v1_business_variables);
    };

    const endpoint_patch_v1_business_variables = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.patch(apiUrlsV2.patch_v1_business_variables);
    };

    const endpoint_get_v1_business_variables_all = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(apiUrlsV2.get_v1_business_variables_all);
    };

    const endpoint_get_v1_business_variables_all_map = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(apiUrlsV2.get_v1_business_variables_all_map);
    };

    const endpoint_get_v1_business_variables_versions = async (
        bvnGlobalId: string
    ) => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(
            apiUrlsV2.get_v1_business_variables_versions(bvnGlobalId)
        );
    };

    const endpoint_delete_v1_business_variables = async (id: string) => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.del(apiUrlsV2.delete_v1_business_variables(id));
    };

    const endpoint_post_v1_business_variables_data_sources = async (
        bvnId: string
    ) => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.post(
            apiUrlsV2.post_v1_business_variables_data_sources(bvnId)
        );
    };

    const endpoint_patch_v1_business_variables_data_sources = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.patch(
            apiUrlsV2.patch_v1_business_variables_data_sources
        );
    };

    const endpoint_post_v1_business_variables_data_sinks = async (
        bvnId: string
    ) => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.post(
            apiUrlsV2.post_v1_business_variables_data_sinks(bvnId)
        );
    };

    const endpoint_patch_v1_business_variables_data_sinks = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.patch(
            apiUrlsV2.patch_v1_business_variables_data_sinks
        );
    };

    const endpoint_get_v1_business_variables_compile = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(apiUrlsV2.get_v1_business_variables_compile);
    };

    return {
        endpoint_get_v1_business_variables,
        endpoint_post_v1_business_variables,
        endpoint_patch_v1_business_variables,
        endpoint_get_v1_business_variables_all,
        endpoint_get_v1_business_variables_all_map,
        endpoint_get_v1_business_variables_versions,
        endpoint_delete_v1_business_variables,
        endpoint_post_v1_business_variables_data_sources,
        endpoint_patch_v1_business_variables_data_sources,
        endpoint_post_v1_business_variables_data_sinks,
        endpoint_patch_v1_business_variables_data_sinks,
        endpoint_get_v1_business_variables_compile,
    };
})();

import { AxiosService } from '.';
import { apiUrlsV2 } from '../consts';

export const GraphBuilderService = (function () {
    const endpoint_post_v1_graph_builder_save = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.post(apiUrlsV2.post_v1_graph_builder_save);
    };

    const endpoint_post_v1_graph_builder_save_as_new = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.post(apiUrlsV2.post_v1_graph_builder_save_as_new);
    };

    const endpoint_post_v1_graph_builder_save_as_new_version = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.post(
            apiUrlsV2.post_v1_graph_builder_save_as_new_version
        );
    };

    return {
        endpoint_post_v1_graph_builder_save,
        endpoint_post_v1_graph_builder_save_as_new,
        endpoint_post_v1_graph_builder_save_as_new_version,
    };
})();

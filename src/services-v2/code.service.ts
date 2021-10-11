import { AxiosService } from '.';
import { apiUrlsV2 } from '../consts';

export const CodeService = (function () {
    const endpoint_post_v1_model_builder_Preview = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.post(apiUrlsV2.post_v1_model_builder_Preview);
    };

    const endpoint_post_v1_model_builder_Debug = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.post(apiUrlsV2.post_v1_model_builder_Debug);
    };

    const endpoint_post_v1_model_builder_TryCompile = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.post(apiUrlsV2.post_v1_model_builder_TryCompile);
    };

    return {
        endpoint_post_v1_model_builder_Preview,
        endpoint_post_v1_model_builder_Debug,
        endpoint_post_v1_model_builder_TryCompile,
    };
})();

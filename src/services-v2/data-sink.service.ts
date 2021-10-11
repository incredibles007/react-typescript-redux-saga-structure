import { AxiosService } from '.';
import { apiUrlsV2 } from '../consts';

export const DataSinkService = (function () {
    const endpoint_get_v1_data_sinks = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(apiUrlsV2.get_v1_data_sinks);
    };

    const endpoint_post_v1_data_sinks = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.post(apiUrlsV2.post_v1_data_sinks);
    };

    const endpoint_patch_v1_data_sinks = async (id: string) => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.patch(apiUrlsV2.patch_v1_data_sinks(id));
    };

    const endpoint_delete_v1_data_sinks = async (id: string) => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.del(apiUrlsV2.delete_v1_data_sinks(id));
    };

    const endpoint_get_v1_data_sinks_nodeInstanceId_graphRunId = async (
        nodeInstanceId: number,
        graphRunId: number
    ) => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(
            apiUrlsV2.get_v1_data_sinks_nodeInstanceId_graphRunId(
                nodeInstanceId,
                graphRunId
            )
        );
    };

    const endpoint_get_v1_data_sinks_nodeInstanceId_csv = async (
        nodeInstanceId: number
    ) => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(
            apiUrlsV2.get_v1_data_sinks_nodeInstanceId_csv(nodeInstanceId)
        );
    };

    return {
        endpoint_get_v1_data_sinks,
        endpoint_post_v1_data_sinks,
        endpoint_patch_v1_data_sinks,
        endpoint_delete_v1_data_sinks,
        endpoint_get_v1_data_sinks_nodeInstanceId_graphRunId,
        endpoint_get_v1_data_sinks_nodeInstanceId_csv,
    };
})();

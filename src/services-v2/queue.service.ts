import { AxiosService } from '.';
import { apiUrlsV2 } from '../consts';

export const QueueService = (function () {
    const endpoint_get_v1_queue_getgraphrun_graphRunId = async (
        graphRunId: number
    ) => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(
            apiUrlsV2.get_v1_queue_getgraphrun_graphRunId(graphRunId)
        );
    };

    const endpoint_get_v1_queue_graphRunId = async (graphRunId: number) => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(apiUrlsV2.get_v1_queue_graphRunId(graphRunId));
    };

    const endpoint_post_v1_queue_save = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.post(apiUrlsV2.post_v1_queue_save);
    };

    const endpoint_post_v1_queue_saveandqueue = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.post(apiUrlsV2.post_v1_queue_saveandqueue);
    };

    const endpoint_post_v1_queue_ReQueue_graphRunId = async (
        graphRunId: number
    ) => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.post(
            apiUrlsV2.post_v1_queue_ReQueue_graphRunId(graphRunId)
        );
    };

    const endpoint_get_V1_queue_cancel_graphRunId = async (
        graphRunId: number
    ) => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(
            apiUrlsV2.get_V1_queue_cancel_graphRunId(graphRunId)
        );
    };

    return {
        endpoint_get_v1_queue_getgraphrun_graphRunId,
        endpoint_get_v1_queue_graphRunId,
        endpoint_post_v1_queue_save,
        endpoint_post_v1_queue_saveandqueue,
        endpoint_post_v1_queue_ReQueue_graphRunId,
        endpoint_get_V1_queue_cancel_graphRunId,
    };
})();

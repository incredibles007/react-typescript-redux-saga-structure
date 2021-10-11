import { AxiosService } from '.';
import { apiUrlsV2 } from '../consts';

export const QueueServerConnectionService = (function () {
    const endpoint_get_v1_queue_server_connection = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(apiUrlsV2.get_v1_queue_server_connection);
    };

    const endpoint_post_v1_queue_server_connection = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.post(apiUrlsV2.post_v1_queue_server_connection);
    };

    const endpoint_get_v1_queue_server_connection_id = async (id: string) => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(
            apiUrlsV2.get_v1_queue_server_connection_id(id)
        );
    };

    const endpoint_patch_v1_queue_server_connection_id = async (id: string) => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.patch(
            apiUrlsV2.patch_v1_queue_server_connection_id(id)
        );
    };

    const endpoint_delete_v1_queue_server_connection_id = async (
        id: string
    ) => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.del(
            apiUrlsV2.delete_v1_queue_server_connection_id(id)
        );
    };

    return {
        endpoint_get_v1_queue_server_connection,
        endpoint_post_v1_queue_server_connection,
        endpoint_get_v1_queue_server_connection_id,
        endpoint_patch_v1_queue_server_connection_id,
        endpoint_delete_v1_queue_server_connection_id,
    };
})();

import { AxiosService } from '.';
import { apiUrlsV2 } from '../consts';

export const IteratorLibraryService = (function () {
    const endpoint_get_v1_iterators = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(apiUrlsV2.get_v1_iterators);
    };

    const endpoint_post_v1_iterators = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.post(apiUrlsV2.post_v1_iterators);
    };

    const endpoint_get_v1_iterators_externalId = async (externalId: string) => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(
            apiUrlsV2.get_v1_iterators_externalId(externalId)
        );
    };

    const endpoint_post_v1_iterators_upload = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.post(apiUrlsV2.post_v1_iterators_upload);
    };

    const endpoint_post_v1_iterators_submit = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.post(apiUrlsV2.post_v1_iterators_submit);
    };

    const endpoint_get_v1_iterators_id_delete = async (id: string) => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(apiUrlsV2.get_v1_iterators_id_delete(id));
    };

    const endpoint_get_v1_iterators_id_stats = async (id: string) => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(apiUrlsV2.get_v1_iterators_id_stats(id));
    };

    return {
        endpoint_get_v1_iterators,
        endpoint_post_v1_iterators,
        endpoint_get_v1_iterators_externalId,
        endpoint_post_v1_iterators_upload,
        endpoint_post_v1_iterators_submit,
        endpoint_get_v1_iterators_id_delete,
        endpoint_get_v1_iterators_id_stats,
    };
})();

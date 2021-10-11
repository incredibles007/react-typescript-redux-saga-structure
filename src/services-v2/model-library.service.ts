import { AxiosService } from '.';
import { apiUrlsV2 } from '../consts';

export const ModelLibraryService = (function () {
    const endpoint_get_v1_models = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(apiUrlsV2.get_v1_models);
    };

    const endpoint_post_v1_models = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.post(apiUrlsV2.post_v1_models);
    };

    const endpoint_get_v1_models_externalId = async (externalId: string) => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(apiUrlsV2.get_v1_models_externalId(externalId));
    };

    const endpoint_get_v1_models_class_nodeClassId = async (
        nodeClassId: string
    ) => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(
            apiUrlsV2.get_v1_models_class_nodeClassId(nodeClassId)
        );
    };

    const endpoint_post_v1_models_description = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.post(apiUrlsV2.post_v1_models_description);
    };

    const endpoint_post_v1_models_input_output_description = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.post(
            apiUrlsV2.post_v1_models_input_output_description
        );
    };

    const endpoint_post_v1_models_upload = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.post(apiUrlsV2.post_v1_models_upload);
    };

    const endpoint_post_v1_models_submit = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.post(apiUrlsV2.post_v1_models_submit);
    };

    const endpoint_get_v1_models_submit_with_entry_id_modelUploadEntryId = async (
        modelUploadEntryId: number
    ) => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(
            apiUrlsV2.get_v1_models_submit_with_entry_id_modelUploadEntryId(
                modelUploadEntryId
            )
        );
    };

    const endpoint_post_v1_models_submit_uploadId_ownerId = async (
        uploadId: number,
        ownerId: number
    ) => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.post(
            apiUrlsV2.post_v1_models_submit_uploadId_ownerId(uploadId, ownerId)
        );
    };

    const endpoint_get_v1_models_id_delete = async (id: string) => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(apiUrlsV2.get_v1_models_id_delete(id));
    };

    const endpoint_get_v1_models_id_stats = async (id: string) => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(apiUrlsV2.get_v1_models_id_stats(id));
    };

    const endpoint_get_v1_models_upload_entries_uploadEntryId = async (
        uploadEntryId: number
    ) => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(
            apiUrlsV2.get_v1_models_upload_entries_uploadEntryId(uploadEntryId)
        );
    };

    return {
        endpoint_get_v1_models,
        endpoint_post_v1_models,
        endpoint_get_v1_models_externalId,
        endpoint_get_v1_models_class_nodeClassId,
        endpoint_post_v1_models_description,
        endpoint_post_v1_models_input_output_description,
        endpoint_post_v1_models_upload,
        endpoint_post_v1_models_submit,
        endpoint_get_v1_models_submit_with_entry_id_modelUploadEntryId,
        endpoint_post_v1_models_submit_uploadId_ownerId,
        endpoint_get_v1_models_id_delete,
        endpoint_get_v1_models_id_stats,
        endpoint_get_v1_models_upload_entries_uploadEntryId,
    };
})();

import { AxiosService } from '.';
import { apiUrlsV2 } from '../consts';

export const AssetReportService = (function () {
    const endpoint_get_v1_asset_report_getAssets = async (
        assetType: number
    ) => {
        return AxiosService.get(
            apiUrlsV2.get_v1_asset_report_getAssets(assetType)
        );
    };

    const endpoint_get_v1_asset_report_getModelReport = async (
        externalId: string
    ) => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(
            apiUrlsV2.get_v1_asset_report_getModelReport(externalId)
        );
    };

    const endpoint_get_v1_asset_report_getModelVersionReport = async (
        bvnId: string
    ) => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(
            apiUrlsV2.get_v1_asset_report_getModelVersionReport(bvnId)
        );
    };

    const endpoint_get_v1_asset_report_getIteratorReport = async (
        externalId: string
    ) => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(
            apiUrlsV2.get_v1_asset_report_getIteratorReport(externalId)
        );
    };

    const endpoint_get_v1_asset_report_getIteratorVersionReport = async (
        bvnId: string
    ) => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(
            apiUrlsV2.get_v1_asset_report_getIteratorVersionReport(bvnId)
        );
    };

    const endpoint_get_v1_asset_report_getBusinessVariableReport = async (
        globalId: string
    ) => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(
            apiUrlsV2.get_v1_asset_report_getBusinessVariableReport(globalId)
        );
    };

    const endpoint_get_v1_asset_report_getBusinessVariableVersionReport = async (
        bvnId: string
    ) => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(
            apiUrlsV2.get_v1_asset_report_getBusinessVariableVersionReport(
                bvnId
            )
        );
    };

    return {
        endpoint_get_v1_asset_report_getAssets,
        endpoint_get_v1_asset_report_getModelReport,
        endpoint_get_v1_asset_report_getModelVersionReport,
        endpoint_get_v1_asset_report_getIteratorReport,
        endpoint_get_v1_asset_report_getIteratorVersionReport,
        endpoint_get_v1_asset_report_getBusinessVariableReport,
        endpoint_get_v1_asset_report_getBusinessVariableVersionReport,
    };
})();

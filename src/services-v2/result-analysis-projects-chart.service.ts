import { AxiosService } from '.';
import { apiUrlsV2 } from '../consts';

export const ResultAnalysisProjectsChartService = (function () {
    const endpoint_post_v1_result_analysis_project_charts_addChart = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(
            apiUrlsV2.post_v1_result_analysis_project_charts_addChart
        );
    };

    const endpoint_post_v1_result_analysis_project_charts_AddBvnToChart = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(
            apiUrlsV2.post_v1_result_analysis_project_charts_AddBvnToChart
        );
    };

    const endpoint_get_v1_result_analysis_project_charts_chartId = async (
        chartId: number
    ) => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(
            apiUrlsV2.get_v1_result_analysis_project_charts_chartId(chartId)
        );
    };

    return {
        endpoint_post_v1_result_analysis_project_charts_addChart,
        endpoint_post_v1_result_analysis_project_charts_AddBvnToChart,
        endpoint_get_v1_result_analysis_project_charts_chartId,
    };
})();

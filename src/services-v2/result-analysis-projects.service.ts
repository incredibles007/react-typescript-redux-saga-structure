import { AxiosService } from '.';
import { apiUrlsV2 } from '../consts';

export const ResultAnalysisProjectsService = (function () {
    const endpoint_get_v1_result_analysis_projects = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(apiUrlsV2.get_v1_result_analysis_projects);
    };

    const endpoint_post_v1_result_analysis_projects = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.post(apiUrlsV2.post_v1_result_analysis_projects);
    };

    const endpoint_delete_v1_result_analysis_projects_resultAnalysisProjectId = async (
        resultAnalysisProjectId: number
    ) => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.del(
            apiUrlsV2.delete_v1_result_analysis_projects_resultAnalysisProjectId(
                resultAnalysisProjectId
            )
        );
    };

    const endpoint_get_v1_result_analysis_projects_resultAnalysisProjectId = async (
        resultAnalysisProjectId: number
    ) => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(
            apiUrlsV2.get_v1_result_analysis_projects_resultAnalysisProjectId(
                resultAnalysisProjectId
            )
        );
    };

    const endpoint_post_v1_result_analysis_projects_AddGraphRuns = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.post(
            apiUrlsV2.post_v1_result_analysis_projects_AddGraphRuns
        );
    };

    return {
        endpoint_get_v1_result_analysis_projects,
        endpoint_post_v1_result_analysis_projects,
        endpoint_delete_v1_result_analysis_projects_resultAnalysisProjectId,
        endpoint_get_v1_result_analysis_projects_resultAnalysisProjectId,
        endpoint_post_v1_result_analysis_projects_AddGraphRuns,
    };
})();

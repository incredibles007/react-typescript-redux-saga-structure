import { apiUrls } from '../consts';
import { axiosService } from '.';

export const analysesService = (function () {
    const resultProjectAnalysesApi = async () => {
        axiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return axiosService.get(apiUrls.ANALYSES_GET_ALL_RESULT);
    };

    const analysesGetApi = async (analysesId: string) => {
        axiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return axiosService.get(apiUrls.ANALYSES_GET_A_RESULT(analysesId));
    };

    return {
        resultProjectAnalysesApi,
        analysesGetApi,
    };
})();

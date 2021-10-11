import { apiUrls } from '../consts';
import { axiosService } from '.';

export const appValuesService = (function () {
    const getAllRoles = async () => {
        axiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return axiosService.get(apiUrls.APP_VALUES_GET_ALL_ROLES);
    };

    const getAllDataTypes = async () => {
        axiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return axiosService.get(apiUrls.APP_VALUES_GET_ALL_DATA_TYPES);
    };

    return {
        getAllRoles,
        getAllDataTypes,
    };
})();

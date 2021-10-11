import { apiUrls } from '../consts';
import { axiosService } from '.';

export const accountService = (function () {
    const loginApi = async (payload: { email: string; password: string }) => {
        return axiosService.post(apiUrls.LOGIN, payload);
    };

    const refreshTokenApi = async () => {
        const refreshToken = localStorage.getItem('refreshToken') || '';
        return axiosService.get(apiUrls.REFRESH_TOKEN(refreshToken));
    };

    const signupApi = async (payload: {
        password: string;
        firstName: string;
        email: string;
        lastName: string;
        roleIds: number[];
    }) => {
        return axiosService.post(apiUrls.LOGIN, payload);
    };

    return { loginApi, refreshTokenApi, signupApi };
})();

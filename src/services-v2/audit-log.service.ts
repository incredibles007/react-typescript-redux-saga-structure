import { AxiosService } from '.';
import { apiUrlsV2 } from '../consts';

export const AuditLogService = (function () {
    const endpoint_post_v1_audit_logs = async (payload: {
        dateFrom: string;
        dateTo: string;
        changedByAppUserId: number;
        itemId: number;
        itemGuid: string;
        itemTypes: Array<number>;
        actions: Array<number>;
    }) => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.post(apiUrlsV2.post_v1_audit_logs, payload);
    };

    const endpoint_get_v1_audit_logs_GetItems = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(apiUrlsV2.get_v1_audit_logs_GetItems);
    };

    return {
        endpoint_post_v1_audit_logs,
        endpoint_get_v1_audit_logs_GetItems,
    };
})();

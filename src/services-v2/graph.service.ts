import { AxiosService } from '.';
import { apiUrlsV2 } from '../consts';

export const GraphService = (function () {
    const endpoint_post_v1_graph_submit_definition = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.post(apiUrlsV2.post_v1_graph_submit_definition);
    };

    const endpoint_post_v1_graph_import = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.post(apiUrlsV2.post_v1_graph_import);
    };

    const endpoint_post_v1_graph_graphId_export = async (graphId: number) => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.post(
            apiUrlsV2.post_v1_graph_graphId_export(graphId)
        );
    };

    const endpoint_post_v1_graph = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.post(apiUrlsV2.post_v1_graph);
    };

    const endpoint_get_v1_graph = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(apiUrlsV2.get_v1_graph);
    };

    const endpoint_get_v1_graph_graphId = async (graphId: number) => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(apiUrlsV2.get_v1_graph_graphId(graphId));
    };

    const endpoint_get_v1_graph_togglegraphlock_graphId = async (
        graphId: number
    ) => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(
            apiUrlsV2.get_v1_graph_togglegraphlock_graphId(graphId)
        );
    };

    const endpoint_post_v1_graph_update_graph_info = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.post(apiUrlsV2.post_v1_graph_update_graph_info);
    };

    const endpoint_get_v1_graph_DeleteGraph_graphGlobalId = async (
        graphGlobalId: string
    ) => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(
            apiUrlsV2.get_v1_graph_DeleteGraph_graphGlobalId(graphGlobalId)
        );
    };

    const endpoint_get_v1_graph_ChangeEditModeGraph_graphId = async (
        graphId: number
    ) => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(
            apiUrlsV2.get_v1_graph_ChangeEditModeGraph_graphId(graphId)
        );
    };

    const endpoint_get_v1_graph_versions_graphGlobalId = async (
        graphGlobalId: string
    ) => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(
            apiUrlsV2.get_v1_graph_versions_graphGlobalId(graphGlobalId)
        );
    };

    const endpoint_post_v2_graph_submit_definition = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.post(apiUrlsV2.post_v2_graph_submit_definition);
    };

    const endpoint_post_v2_graph_import = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.post(apiUrlsV2.post_v2_graph_import);
    };

    const endpoint_get_v2_graph_graphId_export = async (graphId: number) => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(apiUrlsV2.get_v2_graph_graphId_export(graphId));
    };

    const endpoint_post_v2_graph = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.post(apiUrlsV2.post_v2_graph);
    };

    const endpoint_get_v2_graph = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(apiUrlsV2.get_v2_graph);
    };

    const endpoint_get_v2_graph_graphId = async (graphId: number) => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(apiUrlsV2.get_v2_graph_graphId(graphId));
    };

    const endpoint_get_v2_graph_togglegraphlock_graphId = async (
        graphId: number
    ) => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(
            apiUrlsV2.get_v2_graph_togglegraphlock_graphId(graphId)
        );
    };

    const endpoint_post_v2_graph_updategraphinfo_graphId = async (
        graphId: number
    ) => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.post(
            apiUrlsV2.post_v2_graph_updategraphinfo_graphId(graphId)
        );
    };

    const endpoint_get_v2_graph_DeleteGraph_graphGlobalId = async (
        graphGlobalId: string
    ) => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(
            apiUrlsV2.get_v2_graph_DeleteGraph_graphGlobalId(graphGlobalId)
        );
    };

    const endpoint_get_v2_graph_ChangeEditModeGraph_graphId = async (
        graphId: number
    ) => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(
            apiUrlsV2.get_v2_graph_ChangeEditModeGraph_graphId(graphId)
        );
    };

    const endpoint_get_v2_graph_versions_graphGlobalId = async (
        graphGlobalId: string
    ) => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(
            apiUrlsV2.get_v2_graph_versions_graphGlobalId(graphGlobalId)
        );
    };

    return {
        endpoint_post_v1_graph_submit_definition,
        endpoint_post_v1_graph_import,
        endpoint_post_v1_graph_graphId_export,
        endpoint_post_v1_graph,
        endpoint_get_v1_graph,
        endpoint_get_v1_graph_graphId,
        endpoint_get_v1_graph_togglegraphlock_graphId,
        endpoint_post_v1_graph_update_graph_info,
        endpoint_get_v1_graph_DeleteGraph_graphGlobalId,
        endpoint_get_v1_graph_ChangeEditModeGraph_graphId,
        endpoint_get_v1_graph_versions_graphGlobalId,
        endpoint_post_v2_graph_submit_definition,
        endpoint_post_v2_graph_import,
        endpoint_get_v2_graph_graphId_export,
        endpoint_post_v2_graph,
        endpoint_get_v2_graph,
        endpoint_get_v2_graph_graphId,
        endpoint_get_v2_graph_togglegraphlock_graphId,
        endpoint_post_v2_graph_updategraphinfo_graphId,
        endpoint_get_v2_graph_DeleteGraph_graphGlobalId,
        endpoint_get_v2_graph_ChangeEditModeGraph_graphId,
        endpoint_get_v2_graph_versions_graphGlobalId,
    };
})();

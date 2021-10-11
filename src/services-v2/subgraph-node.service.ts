import { AxiosService } from '.';
import { apiUrlsV2 } from '../consts';

export const SubgraphNodeService = (function () {
    const endpoint_get_v1_subgraph_node = async () => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(apiUrlsV2.get_v1_subgraph_node);
    };

    const endpoint_get_v1_subgraph_node_nodeClassId = async (
        nodeClassId: string
    ) => {
        AxiosService.setAuthorizationToken(
            localStorage.getItem('idToken') || ''
        );

        return AxiosService.get(
            apiUrlsV2.get_v1_subgraph_node_nodeClassId(nodeClassId)
        );
    };

    return {
        endpoint_get_v1_subgraph_node,
        endpoint_get_v1_subgraph_node_nodeClassId,
    };
})();

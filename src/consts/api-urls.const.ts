export const apiUrls = {
    /**
     * Accounts management API urls
     */
    LOGIN: '/v1/accounts/login',
    REFRESH_TOKEN: (refreshToken: string) =>
        `/v1/accounts/refresh/${refreshToken}`,
    SIGNUP: '/v1/accounts/signup',

    /**
     * App Values management API urls
     */
    APP_VALUES_GET_ALL_ROLES: '/v1/app-values/roles',
    APP_VALUES_GET_ALL_DATA_TYPES: '/v1/app-values/data-types',

    /**
     * Analyses management API urls
     */
    ANALYSES_GET_ALL_RESULT: '/v1/result-analysis-projects',
    ANALYSES_GET_A_RESULT: (analyseId: string) =>
        `/v1/result-analysis-projects/${analyseId}`,

    /**
     * User List management API urls
     */
    USERS_GET_ALL_RESULT: '/v1/users',
    USERS_ADD_USER_GROUP_USER: '/v1/users',

    /**
     * Units management API urls
     */
    UNITS_GET_ALL_RESULT: '/v1/units',
    UNITS_ADD_DIMENSION_UNIT: '/v1/units',
    UNITS_EDIT_DIMENSION_UNIT: '/v1/units',
    UNITS_DELETE_DIMENSION_UNIT: (unitId: string) => `/v1/units/${unitId}`,
    UNITS_GET_ALL_DIMENSIONS: '/v1/unit-dimension',
    UNITS_ADD_DIMENSION: '/v1/unit-dimension',
    UNITS_EDIT_DIMENSION: (dimensionId: string) => `/v1/unit-dimension/${dimensionId}`,
    UNITS_DELETE_DIMENSION: (dimensionId: string) => `/v1/unit-dimension/${dimensionId}`,

    /**
     * Project management API urls
     */
    PROJECT_GRAPH_SUBMIT_DEFINITION: '/v1/graph/submit-definition',
    PROJECT_GRAPH_IMPORT: '/v1/graph/import',
    PROJECT_GRAPH_EXPORT: (graphId: string) => `/v1/graph/${graphId}/export`,
    PROJECT_POST_GRAPH: '/v1/graph',
    PROJECT_GET_ALL_GRAPH: '/v1/graph',
    PROJECT_GET_A_GRAPH: (graphId: string) => `/v1/graph/${graphId}`,
    PROJECT_TOGGLE_GRAPH_LOCK: (graphId: string) =>
        `/v1/graph/togglegraphlock/${graphId}`,
    PROJECT_UPDATE_GRAPH_INFO: (graphId: string) =>
        `/v1/graph/updategraphinfo/${graphId}`,
    PROJECT_DELETE_A_GRAPH: (graphGlobalId: string) =>
        `/v1/graph/DeleteGraph/${graphGlobalId}`,
    PROJECT_CHANGE_GRAPH_EDIT_MODE: (graphId: string) =>
        `/v1/graph/ChangeEditModeGraph/${graphId}`,
    PROJECT_GRAPH_VERSION: (graphGlobalId: string) =>
        `/v1/graph/versions/${graphGlobalId}`,

    /**
     * Library Assets
     * Variables management API urls
     */
    GET_BUSINESS_VARIABLES: '/v1/business-variables',
    POST_BUSINESS_VARIABLES: '/v1/business-variables',
    PATCH_BUSINESS_VARIABLES: '/v1/business-variables',
    GET_BUSINESS_VARIABLES_ALL: '/v1/business-variables/all',
    GET_BUSINESS_VARIABLE_VERSIONS: (bvnGlobalId: string) =>
        `/v1/business-variables/${bvnGlobalId}/versions`,
    DELETE_BUSINESS_VARIABLE: (id: string) => `/business-variables/${id}`,
    BUSINESS_VARIABLE_DATA_SOURCES: (bvnId: string) =>
        `/v1/business-variables/${bvnId}/data-sources`,
    BUSINESS_VARIABLES_DATA_SOURCES: '/v1/business-variables/data-sources',
    BUSINESS_VARIABLE_DATA_SINKS: (bvnId: string) =>
        `/v1/business-variables/${bvnId}/data-sinks`,
    BUSINESS_VARIABLES_DATA_SINKS: '/v1/business-variables/data-sinks',
    GET_BUSINESS_VARIABLES_COMPILE: '/v1/business-variables/compile',

    /**
     * Library Assets
     * Models management API urls
     */
    GET_ALL_MODELS: '/v1/models',
    POST_MODELS: '/v1/models',
    GET_MODEL: (externalId: string) => `/v1/models/${externalId}`,
    GET_MODEL_CLASS: (nodeClassId: string) => `/v1/models/class/${nodeClassId}`,
    POST_MODEL_DESCRIPTION: '/v1/models/description',
    POST_MODEL_IO_DESCRIPTION: '/v1/models/input-output/description',
    MODEL_UPLOAD: '/v1/models/upload',
    MODEL_SUBMIT: '/v1/models/submit',
    MODEL_SUBMIT_WITH_OWNER: (uploadId: string, ownerId: string) =>
        `/v1/models/submit/${uploadId}/${ownerId}`,
    DELETE_MODEL: (id: string) => `/v1/models/${id}/delete`,
    MODEL_STATS: (id: string) => `/v1/models/${id}/stats`,

    /**
     * Library Assets
     * Iterators management API urls
     */
    GET_ALL_ITERATORS: '/v1/iterators',

    /**
     * Library Assets
     * Nodes management API urls
     */
    GET_ALL_NODES: '/v1/system-nodes',

    /**
     * Library Assets
     * Graphs management API urls
     */
    GET_ALL_GRAPHS: '/v1/subgraph-node',
};

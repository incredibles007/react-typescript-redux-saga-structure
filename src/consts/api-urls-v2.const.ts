export const apiUrlsV2 = {
    // Account
    post_v1_accounts_login: '/v1/accounts/login',
    get_v1_accounts_refresh: (refreshToken: string) =>
        `/v1/accounts/refresh/${refreshToken}`,
    post_v1_accounts_signup: '/v1/accounts/signup',

    // AppuserSetting
    get_v1_setttings: '/v1/settings',

    // AppValue
    get_v1_app_values_roles: '/v1/app-values/roles',
    get_v1_app_values_data_types: '/v1/app-values/data-types',

    // AssetReport
    get_v1_asset_report_getAssets: (assetType: number) =>
        `/v1/asset-report/getAssets/${assetType}`,
    get_v1_asset_report_getModelReport: (externalId: string) =>
        `/v1/asset-report/getModelReport/${externalId}`,
    get_v1_asset_report_getModelVersionReport: (bvnId: string) =>
        `​/v1​/asset-report​/getModelVersionReport​/${bvnId}`,
    get_v1_asset_report_getIteratorReport: (externalId: string) =>
        `/v1/asset-report/getIteratorReport/${externalId}`,
    get_v1_asset_report_getIteratorVersionReport: (bvnId: string) =>
        `/v1/asset-report/getIteratorVersionReport/${bvnId}`,
    get_v1_asset_report_getBusinessVariableReport: (globalId: string) =>
        `/v1/asset-report/getBusinessVariableReport/${globalId}`,
    get_v1_asset_report_getBusinessVariableVersionReport: (bvnId: string) =>
        `​/v1​/asset-report​/getBusinessVariableVersionReport​/${bvnId}`,

    // AuditLog
    post_v1_audit_logs: '/v1/audit-logs',
    get_v1_audit_logs_GetItems: '/v1/audit-logs/GetItems',

    // BusinessVariable
    get_v1_business_variables: '​​/v1​/business-variables',
    post_v1_business_variables: '​​/v1​/business-variables',
    patch_v1_business_variables: '/v1/business-variables',
    get_v1_business_variables_all: '/v1/business-variables/all',
    get_v1_business_variables_all_map: '​​/v1​/business-variables​/all-map',
    get_v1_business_variables_versions: (bvnGlobalId: string) =>
        `​​/v1​/business-variables​/${bvnGlobalId}​/versions`,
    delete_v1_business_variables: (id: string) =>
        `​​/v1​/business-variables​/${id}`,
    post_v1_business_variables_data_sources: (bvnId: string) =>
        `​​/v1​/business-variables​/${bvnId}​/data-sources`,
    patch_v1_business_variables_data_sources:
        '​​/v1​/business-variables​/data-sources',
    post_v1_business_variables_data_sinks: (bvnId: string) =>
        `​​/v1​/business-variables​/${bvnId}​/data-sinks`,
    patch_v1_business_variables_data_sinks:
        '​​/v1​/business-variables​/data-sinks',
    get_v1_business_variables_compile: '​​/v1​/business-variables​/compile',

    // Code
    post_v1_model_builder_Preview: '​/v1​/model-builder​/Preview',
    post_v1_model_builder_Debug: '​/v1​/model-builder​/Debug',
    post_v1_model_builder_TryCompile: '​/v1​/model-builder​/TryCompile',

    // ConnectionStringLibrary
    get_v1_connection_strings: '​/v1​/connection-strings',
    post_v1_connection_strings: '​/v1​/connection-strings',
    patch_v1_connection_strings: (id: string) =>
        `​​/v1​/connection-strings​/${id}`,
    delete_v1_connection_strings: (id: string) =>
        `​​/v1​/connection-strings​/${id}`,

    // DatabaseConnection
    get_v1_database_connections: '​/v1​/database-connections',
    post_v1_database_connections: '​/v1​/database-connections',
    get_v1_database_connections_id: (id: string) =>
        `​/v1​/database-connections​/${id}`,
    patch_v1_database_connections_id: (id: string) =>
        `​/v1​/database-connections​/${id}`,
    delete_v1_database_connections_id: (id: string) =>
        `​/v1​/database-connections​/${id}`,

    // DataSink
    get_v1_data_sinks: '​/v1​/data-sinks',
    post_v1_data_sinks: '​/v1​/data-sinks',
    patch_v1_data_sinks: (id: string) => `​/v1​/data-sinks​/${id}`,
    delete_v1_data_sinks: (id: string) => `​/v1​/data-sinks​/${id}`,
    get_v1_data_sinks_nodeInstanceId_graphRunId: (
        nodeInstanceId: number,
        graphRunId: number
    ) => `​/v1​/data-sinks​/${nodeInstanceId}​/${graphRunId}`,
    get_v1_data_sinks_nodeInstanceId_csv: (nodeInstanceId: number) =>
        `​/v1​/data-sinks​/${nodeInstanceId}​/csv`,

    // DataSource
    get_v1_data_sources: '​/v1​/data-sources',
    post_v1_data_sources: '​/v1​/data-sources',
    patch_v1_data_sources_id: (id: string) => `​/v1​/data-sources​/${id}`,
    delete_v1_data_sources_id: (id: string) => `​/v1​/data-sources​/${id}`,

    // DataStreamConnection
    get_v1_data_stream_connection: '​/v1​/data-stream-connection',
    post_v1_data_stream_connection: '/v1​/data-stream-connection',
    get_v1_data_stream_connection_id: (id: string) =>
        `​/v1​/data-stream-connection​/${id}`,
    patch_v1_data_stream_connection_id: (id: string) =>
        `​/v1​/data-stream-connection​/${id}`,
    delete_v1_data_stream_connection_id: (id: string) =>
        `​/v1​/data-stream-connection​/${id}`,

    // ExecutionEnvironment
    get_v1_execution_environments: '​/v1​/execution-environments',
    post_v1_execution_environments: '​/v1​/execution-environments',
    get_v1_execution_environments_id: (id: string) =>
        `​/v1​/execution-environments​/${id}`,
    patch_v1_execution_environments_id: (id: string) =>
        `​/v1​/execution-environments​/${id}`,
    delete_v1_execution_environments_id: (id: string) =>
        `​/v1​/execution-environments​/${id}`,

    // Graph
    post_v1_graph_submit_definition: '​/v1​/graph​/submit-definition',
    post_v1_graph_import: '​/v1​/graph​/import',
    post_v1_graph_graphId_export: (graphId: number) =>
        `​/v1​/graph​/${graphId}​/export`,
    post_v1_graph: '​/v1​/graph',
    get_v1_graph: '​/v1​/graph',
    get_v1_graph_graphId: (graphId: number) => `​/v1​/graph​/${graphId}`,
    get_v1_graph_togglegraphlock_graphId: (graphId: number) =>
        `​/v1​/graph​/togglegraphlock​/${graphId}`,
    post_v1_graph_update_graph_info: '​/v1​/graph​/update-graph-info',
    get_v1_graph_DeleteGraph_graphGlobalId: (graphGlobalId: string) =>
        `​/v1​/graph​/DeleteGraph​/${graphGlobalId}`,
    get_v1_graph_ChangeEditModeGraph_graphId: (graphId: number) =>
        `​/v1​/graph​/ChangeEditModeGraph​/${graphId}`,
    get_v1_graph_versions_graphGlobalId: (graphGlobalId: string) =>
        `/v1​/graph​/versions​/${graphGlobalId}`,
    post_v2_graph_submit_definition: '​/v2​/graph​/submit-definition',
    post_v2_graph_import: '​/v2​/graph​/import',
    get_v2_graph_graphId_export: (graphId: number) =>
        `​​/v2​/graph​/${graphId}​/export`,
    post_v2_graph: '​/v2​/graph',
    get_v2_graph: '​/v2​/graph',
    get_v2_graph_graphId: (graphId: number) => `​​/v2​/graph​/${graphId}`,
    get_v2_graph_togglegraphlock_graphId: (graphId: number) =>
        `​​/v2​/graph​/togglegraphlock​/${graphId}`,
    post_v2_graph_updategraphinfo_graphId: (graphId: number) =>
        `​​/v2​/graph​/updategraphinfo​/${graphId}`,
    get_v2_graph_DeleteGraph_graphGlobalId: (graphGlobalId: string) =>
        `​/v2​/graph​/DeleteGraph​/${graphGlobalId}`,
    get_v2_graph_ChangeEditModeGraph_graphId: (graphId: number) =>
        `​​​/v2​/graph​/ChangeEditModeGraph​/${graphId}`,
    get_v2_graph_versions_graphGlobalId: (graphGlobalId: string) =>
        `​/v2​/graph​/versions​/${graphGlobalId}`,

    // GraphBuilder
    post_v1_graph_builder_save: '​/v1​/graph-builder​/save',
    post_v1_graph_builder_save_as_new: '​/v1​/graph-builder​/save-as-new',
    post_v1_graph_builder_save_as_new_version:
        '​/v1​/graph-builder​/save-as-new-version',

    // IteratorLibrary
    get_v1_iterators: '​/v1​/iterators',
    post_v1_iterators: '​/v1​/iterators',
    get_v1_iterators_externalId: (externalId: string) =>
        `​/v1​/iterators​/${externalId}`,
    post_v1_iterators_upload: '​/v1​/iterators​/upload',
    post_v1_iterators_submit: '​/v1​/iterators​/submit',
    get_v1_iterators_id_delete: (id: string) =>
        `​/v1​/iterators​/${id}​/delete`,
    get_v1_iterators_id_stats: (id: string) => `​/v1​/iterators​/${id}​/stats`,

    // Log
    get_v1_logs: '​/v1​/logs',
    get_v1_logs_CleareLogs: '​/v1​/logs​/CleareLogs',

    // ModelLibrary
    get_v1_models: '​/v1​/models',
    post_v1_models: '​/v1​/models',
    get_v1_models_externalId: (externalId: string) =>
        `​/v1​/models​/${externalId}`,
    get_v1_models_class_nodeClassId: (nodeClassId: string) =>
        `​/v1​/models​/class​/${nodeClassId}`,
    post_v1_models_description: '​/v1​/models​/description',
    post_v1_models_input_output_description:
        '​/v1​/models​/input-output​/description',
    post_v1_models_upload: '​/v1​/models​/upload',
    post_v1_models_submit: '​/v1​/models​/submit',
    get_v1_models_submit_with_entry_id_modelUploadEntryId: (
        modelUploadEntryId: number
    ) => `​/v1​/models​/submit-with-entry-id​/${modelUploadEntryId}`,
    post_v1_models_submit_uploadId_ownerId: (
        uploadId: number,
        ownerId: number
    ) => `​/v1​/models​/submit​/${uploadId}​/${ownerId}`,
    get_v1_models_id_delete: (id: string) => `​/v1​/models​/${id}​/delete`,
    get_v1_models_id_stats: (id: string) => `​/v1​/models​/${id}​/stats`,
    get_v1_models_upload_entries_uploadEntryId: (uploadEntryId: number) =>
        `​/v1​/models​/upload-entries​/${uploadEntryId}`,

    // Queue
    get_v1_queue_getgraphrun_graphRunId: (graphRunId: number) =>
        `​/v1​/queue​/getgraphrun​/${graphRunId}`,
    get_v1_queue_graphRunId: (graphRunId: number) =>
        `​/v1​/queue​/${graphRunId}`,
    post_v1_queue_save: '​/v1​/queue​/save',
    post_v1_queue_saveandqueue: '​/v1​/queue​/saveandqueue',
    post_v1_queue_ReQueue_graphRunId: (graphRunId: number) =>
        `​/v1​/queue​/ReQueue​/${graphRunId}`,
    get_V1_queue_cancel_graphRunId: (graphRunId: number) =>
        `​/v1​/queue​/cancel​/${graphRunId}`,

    // QueueServerConnection
    get_v1_queue_server_connection: '​/v1​/queue-server-connection',
    post_v1_queue_server_connection: '​/v1​/queue-server-connection',
    get_v1_queue_server_connection_id: (id: string) =>
        `​/v1​/queue-server-connection​/${id}`,
    patch_v1_queue_server_connection_id: (id: string) =>
        `​/v1​/queue-server-connection​/${id}`,
    delete_v1_queue_server_connection_id: (id: string) =>
        `​/v1​/queue-server-connection​/${id}`,

    // ResultAnalysisProjects
    get_v1_result_analysis_projects: '​/v1​/result-analysis-projects',
    post_v1_result_analysis_projects: '​/v1​/result-analysis-projects',
    delete_v1_result_analysis_projects_resultAnalysisProjectId: (
        resultAnalysisProjectId: number
    ) => `​/v1​/result-analysis-projects​/${resultAnalysisProjectId}`,
    get_v1_result_analysis_projects_resultAnalysisProjectId: (
        resultAnalysisProjectId: number
    ) => `​/v1​/result-analysis-projects​/${resultAnalysisProjectId}`,
    post_v1_result_analysis_projects_AddGraphRuns:
        '​/v1​/result-analysis-projects​/AddGraphRuns',

    // ResultAnalysisProjectsChart
    post_v1_result_analysis_project_charts_addChart:
        '​/v1​/result-analysis-project-charts​/addChart',
    post_v1_result_analysis_project_charts_AddBvnToChart:
        '​/v1​/result-analysis-project-charts​/AddBvnToChart',
    get_v1_result_analysis_project_charts_chartId: (chartId: number) =>
        `​/v1​/result-analysis-project-charts​/${chartId}`,

    // SubgraphNode
    get_v1_subgraph_node: '​/v1​/subgraph-node',
    get_v1_subgraph_node_nodeClassId: (nodeClassId: string) =>
        `​/v1​/subgraph-node​/${nodeClassId}`,

    // SystemNode
    get_v1_system_nodes: '​/v1​/system-nodes',

    // Unit
    get_v1_units: '​/v1​/units',
    post_v1_units: '​/v1​/units',
    patch_v1_units: '​/v1​/units',
    get_v1_units_getCreationData: '​/v1​/units​/getCreationData',
    delete_v1_units_unitId: (unitId: string) => `​/v1​/units​/${unitId}`,

    // UnitDimension
    get_v1_unit_dimension: '​/v1​/unit-dimension',
    post_v1_unit_dimension: '​/v1​/unit-dimension',
    get_v1_unit_dimension_id: (id: string) => `​/v1​/unit-dimension​/${id}`,
    patch_v1_unit_dimension_id: (id: string) => `​/v1​/unit-dimension​/${id}`,
    delete_v1_unit_dimension_id: (id: string) => `​/v1​/unit-dimension​/${id}`,

    // UnitExpressions
    get_v1_unit_expressions: '​/v1​/unit-expressions',

    // User
    get_v1_users: '​/v1​/users',
    post_v1_users: '​/v1​/users',
    get_v1_users_paged_pageSize_page: (pageSize: number, page: number) =>
        `​/v1​/users​/paged​/${pageSize}​/${page}`,
    get_v1_users_id: (id: number) => `​/v1​/users​/${id}`,
    get_v1_users_id_settings: (id: number) => `​/v1​/users​/${id}​/settings`,
    post_v1_users_id_settings: (id: number) => `​/v1​/users​/${id}​/settings`,
    post_v1_users_update_id: (id: number) => `​/v1​/users​/update​/${id}`,
    post_v1_users_resetPassword_id: (id: number) =>
        `​/v1​/users​/resetPassword​/${id}`,
    post_v1_users_changeSuspendedState_id: (id: number) =>
        `​/v1​/users​/changeSuspendedState​/${id}`,
    post_v1_users_update_profile_id: (id: number) =>
        `​/v1​/users​/update-profile​/${id}`,

    // UserGroup
    get_v2_user_groups: '​/v2​/user-groups',
    post_v2_user_groups: '​/v2​/user-groups',
    patch_v2_user_groups: '​/v2​/user-groups',
    get_v2_user_groups_userGroupId: (userGroupId: number) =>
        `​/v2​/user-groups​/${userGroupId}`,
    put_v2_user_groups_check_name: '​/v2​/user-groups​/check-name',
    delete_v2_user_groups_id: (id: number) => `​/v2​/user-groups​/${id}`,

    // Version
    get_v1_version: '​/v1​/version',
    get_v1_version_general_info: '​/v1​/version​/general-info',
};

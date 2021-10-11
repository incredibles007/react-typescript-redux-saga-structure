export const nodeInstanceTypes = {
    NodeInstanceModel: 'NodeInstanceModel',
    NodeInstanceIterator: 'NodeInstanceIterator',
    NodeInstanceDataSource: 'NodeInstanceDataSource',
    NodeInstanceBusinessVariableDataSource:
        'NodeInstanceBusinessVariableDataSource',
    NodeInstanceConstantDataSource: 'NodeInstanceConstantDataSource',
    NodeInstanceReport: 'NodeInstanceReport',
    NodeInstanceFlatFileDataSource: 'NodeInstanceFlatFileDataSource',
    NodeInstanceDataSink: 'NodeInstanceDataSink',
    NodeInstanceDataPartitionStart: 'NodeInstanceDataPartitionStart',
    NodeInstanceDataPartitionEnd: 'NodeInstanceDataPartitionEnd',
    NodeInstanceControlParameter: 'NodeInstanceControlParameter',
    NodeInstanceSubgraph: 'NodeInstanceSubgraph',
};

export const nodeClassTypes = {
    NodeClassModel: 'NodeClassModel',
    NodeClassIterator: 'NodeClassIterator',
    NodeClassDataSource: 'NodeClassDataSource',
    NodeClassDataSourceInput: 'NodeClassDataSourceInput',
    NodeClassConstantDataSource: 'NodeClassConstantDataSource',
    NodeClassControlParameter: 'NodeClassControlParameter',
    NodeClassReport: 'NodeClassReport',
    NodeClassFlatFileDataSource: 'NodeClassFlatFileDataSource',
    NodeClassDataSink: 'NodeClassDataSink',
    NodeClassDataPartitionStart: 'NodeClassDataPartitionStart',
    NodeClassDataPartitionEnd: 'NodeClassDataPartitionEnd',
    NodeClassLoop: 'NodeClassLoop',
};

export const GRAPH_STATUS = {
    NO_INIT: 'no-init',
    EMPTY: 'empty',
    READY: 'ready',
};

export const GRAPH_EVENT_TYPES = {
    ADD_NODE: 'add-node',
    ADD_CONNECTION: 'add-connection',
};

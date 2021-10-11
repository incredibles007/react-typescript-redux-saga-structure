import { libraryAssetType, nodeClassTypes, nodeInstanceTypes } from '../consts';

export function getDetailedName(fullName: string) {
    const names = fullName.split(' ');

    const firstName = names[0];
    const lastName = names.length <= 1 ? '' : names[names.length - 1];
    const firsNameInitial = firstName[0];
    const lastNameInitial = lastName[0];

    return {
        firstName,
        lastName,
        firsNameInitial,
        lastNameInitial,
    };
}

export function getNodeIndexByPId(nodeInstances: Array<any>, pid: number) {
    let nodeIndex: number = -1;

    nodeInstances.forEach((node: any, index: number) => {
        const { inputs, outputs } = node;

        if (
            inputs &&
            inputs.length &&
            inputs.findIndex((e: any) => e.pid === pid) > -1
        ) {
            nodeIndex = index;
        } else if (
            outputs &&
            outputs.length &&
            outputs.findIndex((e: any) => e.pid === pid) > -1
        ) {
            nodeIndex = index;
        }
    });

    return nodeIndex;
}

export function generateId() {
    return Math.floor(Math.random() * 1000000000000) + 1;
}

export function generateNodeColor(discriminator?: string) {
    switch (discriminator) {
        case nodeInstanceTypes.NodeInstanceModel: {
            return 'blue';
        }
        case nodeInstanceTypes.NodeInstanceIterator: {
            return 'yellow';
        }
        case nodeInstanceTypes.NodeInstanceDataSource: {
            return 'green';
        }
        case nodeInstanceTypes.NodeInstanceBusinessVariableDataSource: {
            return 'green';
        }
        case nodeInstanceTypes.NodeInstanceConstantDataSource: {
            return 'green';
        }
        case nodeInstanceTypes.NodeInstanceReport: {
            return 'cyan';
        }
        case nodeInstanceTypes.NodeInstanceFlatFileDataSource: {
            return 'green';
        }
        case nodeInstanceTypes.NodeInstanceDataSink: {
            return 'red';
        }
        case nodeInstanceTypes.NodeInstanceDataPartitionStart: {
            return 'purple';
        }
        case nodeInstanceTypes.NodeInstanceDataPartitionEnd: {
            return 'purple';
        }
        case nodeInstanceTypes.NodeInstanceControlParameter: {
            return 'purple';
        }
        case nodeInstanceTypes.NodeInstanceSubgraph: {
            return 'cyan';
        }
        default: {
            return 'red';
        }
    }
}

export function generateNodeDiscriminator(nodeType: string, item: any) {
    return nodeType === libraryAssetType.variable
        ? nodeInstanceTypes.NodeInstanceDataSource
        : nodeType === libraryAssetType.model
        ? nodeInstanceTypes.NodeInstanceModel
        : nodeType === libraryAssetType.iterator
        ? nodeInstanceTypes.NodeInstanceIterator
        : item.discriminator === nodeClassTypes.NodeClassDataPartitionStart
        ? nodeInstanceTypes.NodeInstanceDataPartitionStart
        : item.discriminator === nodeClassTypes.NodeClassDataPartitionEnd
        ? nodeInstanceTypes.NodeInstanceDataPartitionEnd
        : item.discriminator === nodeClassTypes.NodeClassControlParameter
        ? nodeInstanceTypes.NodeInstanceControlParameter
        : nodeType === libraryAssetType.graph
        ? nodeInstanceTypes.NodeInstanceSubgraph
        : '';
}

export function generateNodeName(nodeType: string, item: any) {
    return nodeType === libraryAssetType.variable
        ? item.name
        : item.defaultName;
}

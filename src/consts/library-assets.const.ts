import { EVariableActionType } from '../enums';
import { ILibraryAssetsNavItem } from '../models';

export const libraryAssetType = {
    variable: 'variable',
    model: 'model',
    iterator: 'iterator',
    node: 'node',
    graph: 'graph',
};

export const variableItemActions = [
    {
        id: EVariableActionType.FORWARD,
        icon: require('../assets/images/svg-icons/ic_forward.svg'),
    },
    {
        id: EVariableActionType.BACKWARD,
        icon: require('../assets/images/svg-icons/ic_backward.svg'),
    },
    {
        id: EVariableActionType.DIVIDER,
    },
    {
        id: EVariableActionType.INFO,
        icon: require('../assets/images/svg-icons/ic_info.svg'),
    },
    {
        id: EVariableActionType.SETTINGS,
        icon: require('../assets/images/svg-icons/ic_settings.svg'),
    },
];

export const modelItemActions = [
    {
        id: EVariableActionType.INFO,
        icon: require('../assets/images/svg-icons/ic_info.svg'),
    },
    {
        id: EVariableActionType.SETTINGS,
        icon: require('../assets/images/svg-icons/ic_settings.svg'),
    },
    {
        id: EVariableActionType.DIVIDER,
    },
];

export const iteratorItemActions = [
    {
        id: EVariableActionType.INFO,
        icon: require('../assets/images/svg-icons/ic_info.svg'),
    },
    {
        id: EVariableActionType.SETTINGS,
        icon: require('../assets/images/svg-icons/ic_settings.svg'),
    },
    {
        id: EVariableActionType.DIVIDER,
    },
];

export const nodeItemActions = [
    {
        id: EVariableActionType.INFO,
        icon: require('../assets/images/svg-icons/ic_info.svg'),
    },
    {
        id: EVariableActionType.DIVIDER,
    },
];

export const graphItemActions = [
    {
        id: EVariableActionType.INFO,
        icon: require('../assets/images/svg-icons/ic_info.svg'),
    },
    {
        id: EVariableActionType.SETTINGS,
        icon: require('../assets/images/svg-icons/ic_settings.svg'),
    },
    {
        id: EVariableActionType.DIVIDER,
    },
];

export const libraryAssetsNavItems: Array<ILibraryAssetsNavItem> = [
    {
        id: libraryAssetType.variable,
        title: 'Variables',
        icon: require('../assets/images/svg-icons/ic_variables.svg'),
    },
    {
        id: libraryAssetType.model,
        title: 'Models',
        icon: require('../assets/images/svg-icons/ic_models.svg'),
    },
    {
        id: libraryAssetType.iterator,
        title: 'Iterators',
        icon: require('../assets/images/svg-icons/ic_iterators.svg'),
    },
    {
        id: libraryAssetType.node,
        title: 'Nodes',
        icon: require('../assets/images/svg-icons/ic_nodes.svg'),
    },
    {
        id: libraryAssetType.graph,
        title: 'Graphs',
        icon: require('../assets/images/svg-icons/ic_graphs.svg'),
    },
];

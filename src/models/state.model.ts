import { IAnalyse } from './analyses.model';
import { INodeInstanceViewModel, IProject } from './project.model';
import { IUnit } from './units.model';
import { IUnitDimension, IUnitDimensionViewModel } from './units.model';
import { IAppUserViewModel, IRoleViewModel, IUser } from './user.model';
import { TError } from './error.model';

export interface ILibraryAssetsState {
    variables: any[];
    models: any[];
    iterators: any[];
    nodes: any[];
    graphs: any[];
}

export interface IProjectState {
    projects: IProject[];
    selectedProject: any;
    selectedGraph: any;
    selectedNode: any;
    newNode?: INodeInstanceViewModel;
    graphEvent?: any;
}

export interface IAnalysesState {
    analyses: IAnalyse[];
}

export interface IUnitsState {
    units: IUnit[];
    dimensions: IUnitDimension[];
    selectedDimension: IUnitDimensionViewModel;
}

export interface temp { }

export interface IUiState {
    layoutConfig: {
        titleBar: {
            title: string;
            versionControl: boolean;
            shareControl: boolean;
            downloadControl: boolean;
            saveControl: boolean;
            runsControl: boolean;
            editControl: boolean;
            compileControl: boolean;
            refreshControl: boolean;
            clearAllControl: boolean;
        };
        libraryAssets: {
            visible: boolean;
            selectedTab: string;
        };
        libraryAssetsInspector: boolean;
    };
    projectsPageConfig: {
        projectInspectorConfig: {
            visible: boolean;
        };
    };
    usersPageConfig: {
        userInspectorConfig: {
            visible: boolean;
            mode: string;
        };
    };
    unitsPageConfig: {
        unitInspectorConfig: {
            visible: boolean;
            mode: string;
        };
    };
    graphBuilderPageConfig: {
        graphPanel: any;
        graphRunInspectorConfig: {
            visible: boolean;
            selectedInspector: string;
        };
    };
}

export interface IUserState {
    user?: IUser;
    expiresIn?: string;
    externalId?: string;
    idToken?: string;
    refreshToken?: string;
    roles?: string[];
    tokenType?: string;
    userSettings?: object;
    error?: TError;
}

export interface IUserGroupUserState {
    users: IAppUserViewModel[];
    roles: IRoleViewModel[];
    searchText: string;
    selectedUser: IAppUserViewModel;
}

export interface IRootState {
    libraryAssetsState: ILibraryAssetsState;
    projectState: IProjectState;
    analysesState: IAnalysesState;
    uiState: IUiState;
    userState: IUserState;
    usersState: IUserGroupUserState;
    unitsState: IUnitsState;
}

import React, { FunctionComponent, useEffect } from 'react';
import {
    Route,
    Redirect,
    Switch,
    RouteComponentProps,
    withRouter,
} from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import AnalysesPage from './analyses-page';
import GraphBuilderPage from './graph-builder-page';
import LibraryAssetsPage from './library-assets-page';
import LogsPage from './logs-page';
import ProfilePage from './profile-page';
import ProjectsPage from './projects-page';
import UnitsPage from './units-page';
import UsersPage from './users-page';
import SystemAuditLogsPage from './system-audit-logs-page';
import { IRootState } from '../../models';
import * as fromLibraryAssetsAction from '../../store/actions/library-assets.action';
import * as fromProjectAction from '../../store/actions/project.action';
import * as fromAnalysesAction from '../../store/actions/analyses.action';
import * as fromUsersAction from '../../store/actions/users.action';
import * as fromUnitsAction from '../../store/actions/units.action';

interface DispatchFromProps {
    getAllAnalyses: typeof fromAnalysesAction.getAllAnalyses;
    getAllProjects: typeof fromProjectAction.getAllProjects;
    getAllBusinessVariables: typeof fromLibraryAssetsAction.getAllBusinessVariables;
    getAllModels: typeof fromLibraryAssetsAction.getAllModels;
    getAllIterators: typeof fromLibraryAssetsAction.getAllIterators;
    getAllNodes: typeof fromLibraryAssetsAction.getAllNodes;
    getAllGraphs: typeof fromLibraryAssetsAction.getAllGraphs;
    getAllUnits: typeof fromUnitsAction.getAllUnits;
    getAllDimensions: typeof fromUnitsAction.getAllDimensions;
    getAllUsers: typeof fromUsersAction.getAllUsers;
    getAllRoles: typeof fromUsersAction.getAllRoles;
}
interface StateFromProps { }

interface OwnProps { }

type Props = OwnProps &
    StateFromProps &
    DispatchFromProps &
    RouteComponentProps;

const AuthPages: FunctionComponent<Props> = props => {
    const {
        getAllAnalyses,
        getAllProjects,
        getAllBusinessVariables,
        getAllModels,
        getAllIterators,
        getAllNodes,
        getAllGraphs,
        getAllUnits,
        getAllDimensions,
        getAllUsers,
        getAllRoles,
    } = props;

    useEffect(() => {
        getAllAnalyses();
        getAllProjects();
        getAllBusinessVariables();
        getAllModels();
        getAllIterators();
        getAllNodes();
        getAllGraphs();
        getAllUnits();
        getAllDimensions();
        getAllUsers();
        getAllRoles();
    }, []); // eslint-disable-line

    return (
        <Switch>
            <Route exact path="/analyses" component={AnalysesPage} />
            <Route exact path="/graph-builder" component={GraphBuilderPage} />
            <Route
                exact
                path="/configure/library-assets"
                component={LibraryAssetsPage}
            />
            <Route exact path="/logs" component={LogsPage} />
            <Route exact path="/profile" component={ProfilePage} />
            <Route exact path="/projects" component={ProjectsPage} />
            <Route exact path="/configure/units" component={UnitsPage} />
            <Route exact path="/users" component={UsersPage} />
            <Route
                exact
                path="/system-audit-logs"
                component={SystemAuditLogsPage}
            />
            <Redirect to="/projects" />
        </Switch>
    );
};

function mapStateToProps(state: IRootState): StateFromProps {
    return {};
}

function mapDispatchToProps(dispatch: Dispatch): DispatchFromProps {
    return {
        getAllAnalyses: () => dispatch(fromAnalysesAction.getAllAnalyses()),
        getAllProjects: () => dispatch(fromProjectAction.getAllProjects()),
        getAllBusinessVariables: () =>
            dispatch(fromLibraryAssetsAction.getAllBusinessVariables()),
        getAllModels: () => dispatch(fromLibraryAssetsAction.getAllModels()),
        getAllIterators: () =>
            dispatch(fromLibraryAssetsAction.getAllIterators()),
        getAllNodes: () => dispatch(fromLibraryAssetsAction.getAllNodes()),
        getAllGraphs: () => dispatch(fromLibraryAssetsAction.getAllGraphs()),
        getAllUnits: () => dispatch(fromUnitsAction.getAllUnits()),
        getAllDimensions: () => dispatch(fromUnitsAction.getAllDimensions()),
        getAllUsers: () => dispatch(fromUsersAction.getAllUsers()),
        getAllRoles: () => dispatch(fromUsersAction.getAllRoles()),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(AuthPages));

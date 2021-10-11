import React, { FunctionComponent, useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import './index.scss';
import {
    UserAndGroupFilter,
    UserGroupInspector,
    UserGroupList,
    UserInspector,
    UserList,
} from '../../../components';
import { libraryAssetType } from '../../../consts';
import { MainLayout } from '../../../layouts';
import { IRootState } from '../../../models';
import {
    selectLayoutConfig,
    selectUserInspectorConfig,
} from '../../../store/selector';
import * as fromUiAction from '../../../store/actions/ui.action';

interface DispatchFromProps {
    updateLayoutConfig: typeof fromUiAction.updateLayoutConfig;
}

interface StateFromProps {
    layoutConfig: ReturnType<typeof selectLayoutConfig>;
    userInspectorConfig: ReturnType<typeof selectUserInspectorConfig>;
}

interface OwnProps { }

type Props = OwnProps &
    StateFromProps &
    DispatchFromProps &
    RouteComponentProps;

const UsersPage: FunctionComponent<Props> = props => {
    const { updateLayoutConfig, userInspectorConfig } = props;

    useEffect(() => {
        updateLayoutConfig({
            titleBar: {
                title: 'User Management',
                versionControl: false,
                shareControl: false,
                downloadControl: true,
                saveControl: false,
                runsControl: false,
                editControl: false,
                compileControl: false,
                refreshControl: true,
                clearAllControl: false,
            },
            libraryAssets: {
                visible: false,
                selectedTab: libraryAssetType.variable,
            },
            libraryAssetsInspector: false,
        });
    }, []); // eslint-disable-line

    const pageConfig = {
        viewMode: 'users',
    };

    return (
        <MainLayout>
            <div className="page-content-wrapper users-page-content-wrapper">
                <div className="main-section">
                    <UserAndGroupFilter />
                    {pageConfig.viewMode === 'users' && <UserList />}
                    {pageConfig.viewMode === 'groups' && <UserGroupList />}
                </div>

                {userInspectorConfig.visible && (
                    <div className="right-section">
                        {pageConfig.viewMode === 'users' && <UserInspector />}
                        {pageConfig.viewMode === 'groups' && (
                            <UserGroupInspector />
                        )}
                    </div>
                )}
            </div>
        </MainLayout>
    );
};

function mapStateToProps(state: IRootState): StateFromProps {
    return {
        layoutConfig: selectLayoutConfig(state),
        userInspectorConfig: selectUserInspectorConfig(state),
    };
}

function mapDispatchToProps(dispatch: Dispatch): DispatchFromProps {
    return {
        updateLayoutConfig: (payload: any) =>
            dispatch(fromUiAction.updateLayoutConfig(payload)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(UsersPage));

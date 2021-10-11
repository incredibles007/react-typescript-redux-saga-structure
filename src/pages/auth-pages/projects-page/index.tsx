import React, { FunctionComponent, useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import {
    ProjectSearchOrAdd,
    ProjectList,
    ProjectInspector,
} from '../../../components';
import { libraryAssetType } from '../../../consts';
import { MainLayout } from '../../../layouts';
import { IRootState } from '../../../models';
import {
    selectLayoutConfig,
    selectProjectInspectorConfig,
} from '../../../store/selector';
import * as fromUiAction from '../../../store/actions/ui.action';

interface DispatchFromProps {
    updateLayoutConfig: typeof fromUiAction.updateLayoutConfig;
}

interface StateFromProps {
    layoutConfig: ReturnType<typeof selectLayoutConfig>;
    projectInspectorConfig: ReturnType<typeof selectProjectInspectorConfig>;
}

interface OwnProps {}

type Props = OwnProps &
    StateFromProps &
    DispatchFromProps &
    RouteComponentProps;

const ProjectsPage: FunctionComponent<Props> = props => {
    const { projectInspectorConfig, updateLayoutConfig } = props;

    useEffect(() => {
        updateLayoutConfig({
            titleBar: {
                title: 'Projects',
                versionControl: false,
                shareControl: false,
                downloadControl: false,
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
        // eslint-disable-next-line
    }, []);

    return (
        <MainLayout>
            <div className="page-content-wrapper users-page-content-wrapper">
                <div className="main-section">
                    <ProjectSearchOrAdd />
                    <ProjectList />
                </div>

                {projectInspectorConfig.visible && (
                    <div className="right-section">
                        <ProjectInspector />
                    </div>
                )}
            </div>
        </MainLayout>
    );
};

function mapStateToProps(state: IRootState): StateFromProps {
    return {
        layoutConfig: selectLayoutConfig(state),
        projectInspectorConfig: selectProjectInspectorConfig(state),
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
)(withRouter(ProjectsPage));

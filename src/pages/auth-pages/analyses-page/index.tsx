import React, { FunctionComponent, useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { AnalyseSearchOrAdd, AnalyseList } from '../../../components';
import { libraryAssetType } from '../../../consts';
import { MainLayout } from '../../../layouts';
import { IRootState } from '../../../models';
import * as fromUiAction from '../../../store/actions/ui.action';
import { selectLayoutConfig } from '../../../store/selector';

interface DispatchFromProps {
    updateLayoutConfig: typeof fromUiAction.updateLayoutConfig;
}

interface StateFromProps {
    layoutConfig: ReturnType<typeof selectLayoutConfig>;
}

interface OwnProps {}

type Props = OwnProps &
    StateFromProps &
    DispatchFromProps &
    RouteComponentProps;

const AnalysesPage: FunctionComponent<Props> = props => {
    const { updateLayoutConfig } = props;

    useEffect(() => {
        updateLayoutConfig({
            titleBar: {
                title: 'Result Analyses',
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

    return (
        <MainLayout>
            <AnalyseSearchOrAdd />
            <AnalyseList />
        </MainLayout>
    );
};

function mapStateToProps(state: IRootState): StateFromProps {
    return {
        layoutConfig: selectLayoutConfig(state),
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
)(withRouter(AnalysesPage));

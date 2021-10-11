import React, { FunctionComponent, useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { UnitsSearchOrAdd, UnitsList, UnitInspector } from '../../../components';
import { libraryAssetType } from '../../../consts';
import { MainLayout } from '../../../layouts';
import { IRootState } from '../../../models';
import * as fromUiAction from '../../../store/actions/ui.action';
import { selectLayoutConfig, selectUnitInspectorConfig } from '../../../store/selector';

interface DispatchFromProps {
    updateLayoutConfig: typeof fromUiAction.updateLayoutConfig;
    updateUnitInspectorConfig: typeof fromUiAction.updateUnitInspectorConfig;
}

interface StateFromProps {
    layoutConfig: ReturnType<typeof selectLayoutConfig>;
    unitInspectorConfig: ReturnType<typeof selectUnitInspectorConfig>;
}

interface OwnProps { }

type Props = OwnProps &
    StateFromProps &
    DispatchFromProps &
    RouteComponentProps;

const UnitsPage: FunctionComponent<Props> = props => {
    const { updateLayoutConfig, unitInspectorConfig, updateUnitInspectorConfig } = props;

    useEffect(() => {
        updateLayoutConfig({
            libraryAssets: {
                visible: false,
                selectedTab: libraryAssetType.variable,
            },
            libraryAssetsInspector: false,
        });
    }, []); // eslint-disable-line

    return (
        <MainLayout>
            <div className="page-content-wrapper users-page-content-wrapper">
                <div className="main-section">
                    <UnitsSearchOrAdd />
                    <UnitsList />
                </div>
                {unitInspectorConfig.visible && (
                    <div className="right-section">
                        <UnitInspector />
                    </div>
                )}
            </div>
            {/* ok */}
        </MainLayout>
    );
};

function mapStateToProps(state: IRootState): StateFromProps {
    return {
        layoutConfig: selectLayoutConfig(state),
        unitInspectorConfig: selectUnitInspectorConfig(state),
    };
}

function mapDispatchToProps(dispatch: Dispatch): DispatchFromProps {
    return {
        updateLayoutConfig: (payload: any) =>
            dispatch(fromUiAction.updateLayoutConfig(payload)),
        updateUnitInspectorConfig: payload =>
            dispatch(fromUiAction.updateUnitInspectorConfig(payload)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(UnitsPage));

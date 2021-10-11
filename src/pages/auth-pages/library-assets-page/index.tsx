import React, { FunctionComponent, useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { libraryAssetType } from '../../../consts';
import { MainLayout } from '../../../layouts';
import { IRootState } from '../../../models';
import { selectLayoutConfig } from '../../../store/selector';
import * as fromUiAction from '../../../store/actions/ui.action';

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

const LibraryAssetsPage: FunctionComponent<Props> = props => {
    const { updateLayoutConfig } = props;

    useEffect(() => {
        updateLayoutConfig({
            libraryAssets: {
                visible: true,
                selectedTab: libraryAssetType.variable,
            },
            libraryAssetsInspector: false,
        });
    }, []); // eslint-disable-line

    return <MainLayout>library-assets-page works</MainLayout>;
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
)(withRouter(LibraryAssetsPage));

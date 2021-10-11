import React, { FunctionComponent } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import './index.scss';
import { OverHead, Header } from '../../components';
import { IRootState } from '../../models';

interface DispatchFromProps {}

interface StateFromProps {}

interface OwnProps {
    children: any;
}

type Props = OwnProps &
    StateFromProps &
    DispatchFromProps &
    RouteComponentProps;

const MainLayout: FunctionComponent<Props> = props => {
    return (
        <>
            <OverHead />
            <Header />

            <div className="content-wrapper">
                <div className="main-content">{props.children}</div>
            </div>
        </>
    );
};

function mapStateToProps(state: IRootState): StateFromProps {
    return {};
}

function mapDispatchToProps(dispatch: Dispatch): DispatchFromProps {
    return {};
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(MainLayout));

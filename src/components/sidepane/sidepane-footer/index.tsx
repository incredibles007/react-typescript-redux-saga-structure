import React, { FunctionComponent } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { IRootState } from '../../../models';

interface DispatchFromProps {}

interface StateFromProps {}

interface OwnProps {
    children: any;
}

type Props = OwnProps &
    StateFromProps &
    DispatchFromProps &
    RouteComponentProps;

const SidepaneFooter: FunctionComponent<Props> = props => {
    return <div className="sidepane__foot">{props.children}</div>;
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
)(withRouter(SidepaneFooter));

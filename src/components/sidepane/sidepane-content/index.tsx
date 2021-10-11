import React, { FunctionComponent } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { IRootState } from '../../../models';

interface DispatchFromProps {}

interface StateFromProps {}

interface OwnProps {
    children: any;
    style?: any;
}

type Props = OwnProps &
    StateFromProps &
    DispatchFromProps &
    RouteComponentProps;

const SidepaneContent: FunctionComponent<Props> = props => {
    return (
        <div className="sidepane__cont" style={props.style}>
            {props.children}
        </div>
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
)(withRouter(SidepaneContent));

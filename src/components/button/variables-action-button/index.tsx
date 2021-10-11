import React, { FunctionComponent } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import './index.scss';
import { IRootState } from '../../../models';
import { ReactSVG } from 'react-svg';

interface DispatchFromProps {}

interface StateFromProps {}

interface OwnProps {
    id: string;
    icon: string;
    onClick: (id: string) => void;
}

type Props = OwnProps &
    StateFromProps &
    DispatchFromProps &
    RouteComponentProps;

const VariablesActionButton: FunctionComponent<Props> = props => {
    const { id, icon, onClick } = props;

    return (
        <button onClick={() => onClick(id)}>
            <ReactSVG src={icon}></ReactSVG>
        </button>
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
)(withRouter(VariablesActionButton));

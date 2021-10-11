import React, { FunctionComponent } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { IRootState } from '../../../models';

interface DispatchFromProps {}

interface StateFromProps {}

interface OwnProps {
    title: string;
    onClose: () => void;
}

type Props = OwnProps &
    StateFromProps &
    DispatchFromProps &
    RouteComponentProps;

const SidepaneHeader: FunctionComponent<Props> = props => {
    const { title, onClose } = props;
    return (
        <div className="sidepane__head">
            <h3 className="tc--xlight">{title}</h3>
            <button
                type="button"
                className="sidepane__close"
                onClick={() => onClose()}
            ></button>
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
)(withRouter(SidepaneHeader));

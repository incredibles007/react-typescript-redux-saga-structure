import React, { FunctionComponent } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { IRootState } from '../../../models';

interface DispatchFromProps {}

interface StateFromProps {}

interface OwnProps {}

type Props = OwnProps &
    StateFromProps &
    DispatchFromProps &
    RouteComponentProps;

const UserEditPassword: FunctionComponent<Props> = () => {
    return (
        <>
            <div className="mt--050 grid-row">
                <div className="grid-col grid-col--4">
                    <label className="p tc--light sidepane__label">
                        Password
                    </label>
                </div>
                <div className="grid-col grid-col--8">
                    <input
                        type="text"
                        className="form-input"
                        placeholder="Enter new password"
                    />
                </div>
            </div>
            <div className="mt--050 grid-row">
                <div className="grid-col grid-col--4">
                    <label className="p tc--light sidepane__label">
                        Re-Confirm
                    </label>
                </div>
                <div className="grid-col grid-col--8">
                    <input
                        type="text"
                        className="form-input"
                        placeholder="Re-enter new password"
                    />
                </div>
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
)(withRouter(UserEditPassword));

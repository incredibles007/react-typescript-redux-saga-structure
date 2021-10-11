import React, { FunctionComponent, useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { UserPermissionSelector } from '../../dropdown';
import { IRootState } from '../../../models';
import * as fromUsersAction from '../../../store/actions/users.action';
import { selectSelectedUserGroupUser } from '../../../store/selector';

interface DispatchFromProps {
    updateSelectedUserGroupUser: typeof fromUsersAction.updateSelectedUserGroupUser;
}

interface StateFromProps {
    selectedUserGroupUser: ReturnType<typeof selectSelectedUserGroupUser>;
}

interface OwnProps { }

type Props = OwnProps &
    StateFromProps &
    DispatchFromProps &
    RouteComponentProps;

const UserDetails: FunctionComponent<Props> = props => {
    const { selectedUserGroupUser, updateSelectedUserGroupUser } = props;
    const [firstName, setFirstName] = useState(selectedUserGroupUser.firstName);
    const [lastName, setLastName] = useState(selectedUserGroupUser.lastName);

    const onUpdateUserDetails = (payload: any) => {
        updateSelectedUserGroupUser(payload);
    };

    return (
        <>
            <div className="grid-row">
                <div className="grid-col grid-col--4">
                    <label className="p tc--light sidepane__label">
                        Permission
                    </label>
                </div>
                <div className="grid-col grid-col--8">
                    <UserPermissionSelector />
                </div>
            </div>
            <div className="mt--050 grid-row">
                <div className="grid-col grid-col--4">
                    <label className="p tc--light sidepane__label">
                        First Name
                    </label>
                </div>
                <div className="grid-col grid-col--8">
                    <input
                        type="text"
                        className="form-input"
                        value={firstName}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setFirstName(e.target.value)
                        }
                        onBlur={(e: React.ChangeEvent<HTMLInputElement>) =>
                            onUpdateUserDetails({ firstName: e.target.value })
                        }
                    />
                </div>
            </div>
            <div className="mt--050 grid-row">
                <div className="grid-col grid-col--4">
                    <label className="p tc--light sidepane__label">
                        Last Name
                    </label>
                </div>
                <div className="grid-col grid-col--8">
                    <input
                        type="text"
                        className="form-input"
                        value={lastName}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setLastName(e.target.value)
                        }
                        onBlur={(e: React.ChangeEvent<HTMLInputElement>) =>
                            onUpdateUserDetails({ lastName: e.target.value })
                        }
                    />
                </div>
            </div>
            <div className="mt--050 grid-row">
                <div className="grid-col grid-col--4">
                    <label className="p tc--light sidepane__label">
                        Status
                    </label>
                </div>
                <div className="grid-col grid-col--8">
                    <select className="form-select">
                        <option value="Simple">Active</option>
                        <option value="Simple">Suspended</option>
                        <option value="Simple">Deleted</option>
                    </select>
                </div>
            </div>
        </>
    );
};

function mapStateToProps(state: IRootState): StateFromProps {
    return {
        selectedUserGroupUser: selectSelectedUserGroupUser(state),
    };
}

function mapDispatchToProps(dispatch: Dispatch): DispatchFromProps {
    return {
        updateSelectedUserGroupUser: payload =>
            dispatch(fromUsersAction.updateSelectedUserGroupUser(payload)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(UserDetails));

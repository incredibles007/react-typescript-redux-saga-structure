import React, { FunctionComponent } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import './index.scss';
import { AddUserAndGroupDropdown } from '../../../components';
import { IRootState } from '../../../models';
import * as fromUsersAction from '../../../store/actions/users.action';

interface DispatchFromProps {
    searchUsers: typeof fromUsersAction.searchUsers;
}

interface StateFromProps { }

interface OwnProps { }

type Props = OwnProps &
    StateFromProps &
    DispatchFromProps &
    RouteComponentProps;

const UserAndGroupFilter: FunctionComponent<Props> = props => {
    const { searchUsers } = props;

    const onChangeUserSearchText = (query: string) => {
        searchUsers(query);
    };

    return (
        <>
            <div className="grid-row grid-row--smg filter-users-or-groups-wrapper">
                <div className="grid-col grid-col--auto">
                    <select className="form-select">
                        <option value="">View Users</option>
                        <option value="">View User Groups</option>
                    </select>
                </div>
                <div className="grid-col">
                    <input
                        type="text"
                        placeholder="Search"
                        className="form-input sidebar-search__input"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            onChangeUserSearchText(e.target.value)
                        }
                    />
                </div>
                <div className="grid-col grid-col--auto">
                    <AddUserAndGroupDropdown />
                </div>
            </div>
        </>
    );
};

function mapStateToProps(state: IRootState): StateFromProps {
    return {};
}

function mapDispatchToProps(dispatch: Dispatch): DispatchFromProps {
    return {
        searchUsers: payload => dispatch(fromUsersAction.searchUsers(payload)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(UserAndGroupFilter));

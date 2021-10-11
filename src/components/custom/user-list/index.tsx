import React, { FunctionComponent } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import ReactTooltip from 'react-tooltip';

import './index.scss';
import { IAppUserViewModel, IRootState } from '../../../models';
import { selectSearchedUsers } from '../../../store/selector';
import * as fromUsersAction from '../../../store/actions/users.action';
import * as fromUiAction from '../../../store/actions/ui.action';

interface DispatchFromProps {
    selectUserGroupUser: typeof fromUsersAction.selectUserGroupUser;
    updateUserInspectorConfig: typeof fromUiAction.updateUserInspectorConfig;
}

interface StateFromProps {
    searchedUsers: ReturnType<typeof selectSearchedUsers>;
}

interface OwnProps {}

type Props = OwnProps &
    StateFromProps &
    DispatchFromProps &
    RouteComponentProps;

const UserList: FunctionComponent<Props> = props => {
    const {
        searchedUsers,
        selectUserGroupUser,
        updateUserInspectorConfig,
    } = props;

    const onChangePassword = (externalId: string) => {
        updateUserInspectorConfig({ visible: true, mode: 'change-password' });
    };

    const onEdit = (user: IAppUserViewModel) => {
        selectUserGroupUser(user);
        updateUserInspectorConfig({ visible: true, mode: 'edit' });
    };

    const headers = ['Name', 'Email', 'Permission', 'Status', 'User Group', ''];

    return (
        <>
            <div className="data-table user-list">
                <table className="data-table__table p">
                    <thead>
                        <tr>
                            {headers.map(item => (
                                <th key={`header-${item}`}>{item}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {searchedUsers.map((item: any, index: number) => (
                            <tr key={`user-item-${index}`}>
                                <td>
                                    <div className="data-table__username">
                                        {item.firstName} {item.lastName}
                                    </div>
                                </td>
                                <td>{item.email}</td>
                                <td>
                                    {item.userRoles.map(
                                        (role: any) => role.name
                                    )}
                                </td>
                                <td>
                                    {item.isDeleted
                                        ? 'Deleted'
                                        : item.isSuspended
                                        ? 'Suspended'
                                        : 'Active'}
                                </td>
                                <td>
                                    {item.userGroups ? item.userGroups : '-'}
                                </td>
                                <td className="data-table__actions">
                                    <button
                                        type="button"
                                        data-tip="Change Password"
                                        data-for="user-item-tooltip"
                                        className="data-table__action data-table__action--lock"
                                        onClick={() =>
                                            onChangePassword(item.externalId)
                                        }
                                    ></button>
                                    <button
                                        type="button"
                                        data-tip="Edit"
                                        data-for="user-item-tooltip"
                                        className="data-table__action data-table__action--edit"
                                        onClick={() => onEdit(item)}
                                    ></button>

                                    <ReactTooltip
                                        id="user-item-tooltip"
                                        place={'top'}
                                        effect={'solid'}
                                        className="tooltip-wrapper"
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

function mapStateToProps(state: IRootState): StateFromProps {
    return {
        searchedUsers: selectSearchedUsers(state),
    };
}

function mapDispatchToProps(dispatch: Dispatch): DispatchFromProps {
    return {
        selectUserGroupUser: payload =>
            dispatch(fromUsersAction.selectUserGroupUser(payload)),
        updateUserInspectorConfig: payload =>
            dispatch(fromUiAction.updateUserInspectorConfig(payload)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(UserList));

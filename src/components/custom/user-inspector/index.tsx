import React, { FunctionComponent } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ReactSVG } from 'react-svg';

import {
    Sidepane,
    SidepaneContent,
    SidepaneFooter,
    SidepaneHeader,
    SidepaneSpoiler,
} from '../../../components';
import UserDetails from '../user-details';
import UserGroups from '../user-groups';
import EditUserPassword from '../user-edit-password';
import { IRootState } from '../../../models';
import {
    selectSelectedUserGroupUser,
    selectUserInspectorConfig,
} from '../../../store/selector';
import * as fromUiAction from '../../../store/actions/ui.action';
import * as fromUsersAction from '../../../store/actions/users.action';

interface DispatchFromProps {
    updateUserInspectorConfig: typeof fromUiAction.updateUserInspectorConfig;
    addUserGroupUser: typeof fromUsersAction.addUserGroupUser;
}

interface StateFromProps {
    userInspectorConfig: ReturnType<typeof selectUserInspectorConfig>;
    selectedUserGroupUser: ReturnType<typeof selectSelectedUserGroupUser>;
}

interface OwnProps { }

type Props = OwnProps &
    StateFromProps &
    DispatchFromProps &
    RouteComponentProps;

const UserInspector: FunctionComponent<Props> = props => {
    const {
        userInspectorConfig,
        updateUserInspectorConfig,
        addUserGroupUser,
    } = props;
    const onClose = () => {
        updateUserInspectorConfig({ visible: false });
    };

    const onSave = () => {
        // should be made from the user-inspector sidepane
        const userGroupUser = {
            firstName: 'Test',
            lastName: 'User',
            email: 'test.user@gmail.com',
            password: 'test123456',
            roleIds: [0],
        };

        addUserGroupUser(userGroupUser);
    };

    const getInspectorTitleFromMode = (mode: string) => {
        return mode === 'edit'
            ? 'Edit User'
            : mode === 'change-password'
                ? 'Edit User Password'
                : mode === 'new-user'
                    ? 'Add New User'
                    : mode === 'new-user-group'
                        ? 'Add New User Group'
                        : 'User And Group';
    };

    return (
        <Sidepane>
            <SidepaneHeader
                title={getInspectorTitleFromMode(userInspectorConfig.mode)}
                onClose={() => onClose()}
            />
            <SidepaneContent style={{ height: `calc(100vh - 188px)` }}>
                {(userInspectorConfig.mode === 'edit' ||
                    userInspectorConfig.mode === 'new-user') && (
                        <SidepaneSpoiler title="Details">
                            <UserDetails />
                        </SidepaneSpoiler>
                    )}

                {(userInspectorConfig.mode === 'edit' ||
                    userInspectorConfig.mode === 'new-user') && (
                        <SidepaneSpoiler
                            title="User Groups"
                            visibleBadge={true}
                            badgeValue={2}
                            visibleDelete={true}
                            visibleAdd={true}
                        >
                            <UserGroups />
                        </SidepaneSpoiler>
                    )}

                {userInspectorConfig.mode === 'edit' && (
                    <button
                        type="button"
                        className="button button--delete sidepane__delete"
                    >
                        <ReactSVG
                            src={require('../../../assets/images/svg-icons/ic_delete.svg')}
                            style={{ display: 'inline-block' }}
                        />
                        &nbsp;&nbsp;Delete User
                    </button>
                )}

                {(userInspectorConfig.mode === 'change-password' ||
                    userInspectorConfig.mode === 'new-user') && (
                        <SidepaneSpoiler title="Password">
                            <EditUserPassword />
                        </SidepaneSpoiler>
                    )}
            </SidepaneContent>
            <SidepaneFooter>
                <button
                    type="submit"
                    className="button button--primary"
                    onClick={() => onSave()}
                >
                    Save Changes
                </button>
            </SidepaneFooter>
        </Sidepane>
    );
};

function mapStateToProps(state: IRootState): StateFromProps {
    return {
        userInspectorConfig: selectUserInspectorConfig(state),
        selectedUserGroupUser: selectSelectedUserGroupUser(state),
    };
}

function mapDispatchToProps(dispatch: Dispatch): DispatchFromProps {
    return {
        updateUserInspectorConfig: (payload: boolean) =>
            dispatch(fromUiAction.updateUserInspectorConfig(payload)),
        addUserGroupUser: (payload: any) =>
            dispatch(fromUsersAction.addUserGroupUser(payload)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(UserInspector));

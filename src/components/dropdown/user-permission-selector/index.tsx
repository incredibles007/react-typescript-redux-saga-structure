import React, { FunctionComponent, useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import './index.scss';
import { IRootState, IRoleViewModel } from '../../../models';
import { selectRoles } from '../../../store/selector';

interface DispatchFromProps {}

interface StateFromProps {
    userPermissions: ReturnType<typeof selectRoles>;
}

interface OwnProps {}

type Props = OwnProps &
    StateFromProps &
    DispatchFromProps &
    RouteComponentProps;

const UserPermissionSelector: FunctionComponent<Props> = props => {
    const [expanded, setExpanded] = useState(false);
    const [selectedRoles, setSelectedRoles] = useState([] as IRoleViewModel[]);
    const { userPermissions } = props;

    const toggleDropdown = () => {
        setExpanded(!expanded);
    };

    const onPermissionItem = (permission: IRoleViewModel) => {
        selectedRoles.find(
            (role: IRoleViewModel) => role.roleId === permission.roleId
        )
            ? selectedRoles.filter(
                  (role: IRoleViewModel) => role.roleId !== permission.roleId
              )
            : selectedRoles.push(permission);

        setSelectedRoles([...selectedRoles]);
    };

    return (
        <div className={`form-multiselect ${expanded ? 'active' : ''}`}>
            <input
                type="text"
                value={
                    selectedRoles.length > 0
                        ? selectedRoles.map(role => role['name']).join(', ')
                        : 'Select Permission'
                }
                readOnly
                className="form-select form-multiselect__input selected-group-names"
                onClick={() => toggleDropdown()}
            />
            <div className="form-multiselect__dropdown">
                {userPermissions.map((item, index) => (
                    <div
                        key={`permission-item-${index}`}
                        className="form-checkbox"
                        onClick={() => onPermissionItem(item)}
                    >
                        <input
                            type="checkbox"
                            name="checkbox"
                            className="form-checkbox__input"
                        />
                        <label className="form-checkbox__label">
                            {item.name}
                        </label>
                        <span className="form-checkbox__icon"></span>
                    </div>
                ))}
            </div>
        </div>
    );
};

function mapStateToProps(state: IRootState): StateFromProps {
    return {
        userPermissions: selectRoles(state),
    };
}

function mapDispatchToProps(dispatch: Dispatch): DispatchFromProps {
    return {};
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(UserPermissionSelector));

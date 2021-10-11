import React, { FunctionComponent, useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import './index.scss';
import { IRootState } from '../../../models';
import * as fromUiAction from '../../../store/actions/ui.action';
import { ReactSVG } from 'react-svg';

interface DispatchFromProps {
    updateUserInspectorConfig: typeof fromUiAction.updateUserInspectorConfig;
}

interface StateFromProps {}

interface OwnProps {}

type Props = OwnProps &
    StateFromProps &
    DispatchFromProps &
    RouteComponentProps;

const AddUserAndGroupDropdown: FunctionComponent<Props> = props => {
    const [expanded, setExpanded] = useState(false);
    const { updateUserInspectorConfig } = props;

    const toggleDropdown = () => {
        setExpanded(!expanded);
    };

    const onMenuItem = (menuId: string) => {
        updateUserInspectorConfig({ visible: true, mode: menuId });
        setExpanded(false);
    };

    const addUserAndGroupMenuItems = [
        {
            id: 'new-user',
            icon: require('../../../assets/images/svg-icons/ic_list.svg'),
            title: 'Add New User',
        },
        {
            id: 'new-user-group',
            icon: require('../../../assets/images/svg-icons/ic_list.svg'),
            title: 'Add New User Group',
        },
    ];

    return (
        <nav className="add-user-and-group-dropdown-wrapper">
            <button
                type="button"
                className="button button--small button--iconic"
                onClick={() => toggleDropdown()}
            >
                <ReactSVG
                    src={require('../../../assets/images/svg-icons/ic_plus.svg')}
                />
            </button>

            <div className={`main-nav__dropdown ${expanded ? 'visible' : ''}`}>
                {addUserAndGroupMenuItems.map((item, index) => (
                    <div
                        key={`new-user-and-group-menu-${index}`}
                        className="main-nav__subitem"
                        onClick={() => onMenuItem(item.id)}
                    >
                        <div className="main-nav__sublink">
                            <span className="main-nav__icon">
                                <img src={item.icon} alt="" />
                            </span>
                            {item.title}
                        </div>
                    </div>
                ))}
            </div>
        </nav>
    );
};

function mapStateToProps(state: IRootState): StateFromProps {
    return {};
}

function mapDispatchToProps(dispatch: Dispatch): DispatchFromProps {
    return {
        updateUserInspectorConfig: payload =>
            dispatch(fromUiAction.updateUserInspectorConfig(payload)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(AddUserAndGroupDropdown));

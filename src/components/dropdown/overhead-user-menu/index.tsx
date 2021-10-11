import React, { FunctionComponent, useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import './index.scss';
import { IOverheadMenuItem, IRootState } from '../../../models';
import { overheadUserMenuItems } from '../../../consts';
import { getDetailedName } from '../../../utils';
import { selectUser } from '../../../store/selector';
import * as fromUserAction from '../../../store/actions/user.action';

interface DispatchFromProps {
    logout: typeof fromUserAction.logout;
}

interface StateFromProps {
    user: ReturnType<typeof selectUser>;
}

interface OwnProps {}

type Props = OwnProps &
    StateFromProps &
    DispatchFromProps &
    RouteComponentProps;

const OverheadUserMenu: FunctionComponent<Props> = props => {
    const [expanded, setExpanded] = useState(false);
    const { user, logout } = props;
    const { firstName, firsNameInitial, lastNameInitial } = getDetailedName(
        user?.fullName ? user?.fullName : 'No Name'
    );

    const onMenu = () => {
        setExpanded(!expanded);
    };

    const onUserMenu = (item: IOverheadMenuItem) => {
        if (item.id === 'log-out') {
            logout();
            return;
        }

        setExpanded(false);

        props.history.push(item.href || '/projects');
    };

    return (
        <nav className="user-nav">
            <button className="user-nav__toggle" onClick={() => onMenu()}>
                {`${firstName} ${lastNameInitial}.`}
            </button>

            <div className={`user-nav__dropdown ${expanded ? 'visible' : ''}`}>
                {overheadUserMenuItems.map((item, index) =>
                    item.id === 'profile' ? (
                        <div
                            className="user-info-wrapper"
                            key={`overhead-user-menu-${index}`}
                            onClick={() => onUserMenu(item)}
                        >
                            <div className="user-nav__avatar">
                                {user?.avatarUrl ? (
                                    <img
                                        src={user?.avatarUrl}
                                        alt={`${user?.fullName} avatar`}
                                    />
                                ) : (
                                    `${firsNameInitial}${firsNameInitial}.`
                                )}
                            </div>
                            <div className="user-nav__name">
                                {user?.fullName}
                            </div>
                            <div className="user-nav__email">{user?.email}</div>
                        </div>
                    ) : (
                        <div
                            key={`overhead-user-menu-${index}`}
                            className="user-nav__subitem"
                            onClick={() => onUserMenu(item)}
                        >
                            <div className="user-nav__sublink">
                                <span className="user-nav__icon">
                                    <img src={item.icon} alt="" />
                                </span>
                                {item.title}
                            </div>
                        </div>
                    )
                )}

                <div className="user-nav__version">v1.0.0.0</div>
            </div>
        </nav>
    );
};

function mapStateToProps(state: IRootState): StateFromProps {
    return {
        user: selectUser(state),
    };
}

function mapDispatchToProps(dispatch: Dispatch): DispatchFromProps {
    return {
        logout: () => dispatch(fromUserAction.logout()),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(OverheadUserMenu));

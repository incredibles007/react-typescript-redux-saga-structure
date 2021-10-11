import React, { FunctionComponent } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ReactSVG } from 'react-svg';

import { IRootState, ILibraryAssetsNavItem } from '../../../models';

interface DispatchFromProps {}

interface StateFromProps {}

interface OwnProps {
    item: ILibraryAssetsNavItem;
    active: boolean;
    onClick: (id: string) => void;
}

type Props = OwnProps &
    StateFromProps &
    DispatchFromProps &
    RouteComponentProps;

const SidebarNavButton: FunctionComponent<Props> = props => {
    const { item, active, onClick } = props;
    const { id, title, icon } = item;

    return (
        <button
            onClick={() => onClick(id)}
            className={`sidebar-nav__link ${
                active ? 'sidebar-nav__link--active' : ''
            }`}
        >
            {icon && (
                <span className="sidebar-nav__icon">
                    <ReactSVG src={icon} />
                </span>
            )}
            <span className="sidebar-nav__label">{title}</span>
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
)(withRouter(SidebarNavButton));

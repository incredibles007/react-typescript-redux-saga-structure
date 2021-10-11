import React, { FunctionComponent, useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import './index.scss';
import { IRootState, IOverheadMenuItem } from '../../../models';

interface DispatchFromProps {}

interface StateFromProps {}

interface OwnProps {
    item: IOverheadMenuItem;
    onClick: (item: IOverheadMenuItem) => void;
}

type Props = OwnProps &
    StateFromProps &
    DispatchFromProps &
    RouteComponentProps;

const OverheadMenu: FunctionComponent<Props> = props => {
    const [expanded, setExpanded] = useState(false);
    const { item, onClick } = props;

    const onMenu = (item: IOverheadMenuItem) => {
        if (item.children && item.children.length > 0) {
            setExpanded(!expanded);
        } else {
            onClick(item);
        }
    };

    return (
        <div className="main-nav__item">
            <button className="main-nav__link" onClick={() => onMenu(item)}>
                {item.title}
            </button>

            {item.children && item.children.length > 0 && (
                <div
                    className={`main-nav__dropdown ${
                        expanded ? 'visible' : ''
                    }`}
                >
                    {item.children.map((childItem, index) => (
                        <div
                            key={`over-head-sub-menu-${index}`}
                            className="main-nav__subitem"
                            onClick={() => onMenu(childItem)}
                        >
                            <div className="main-nav__sublink">
                                {childItem && childItem.icon && (
                                    <span className="main-nav__icon">
                                        <img src={childItem.icon} alt="" />
                                    </span>
                                )}
                                {childItem.title}
                            </div>
                        </div>
                    ))}
                </div>
            )}
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
)(withRouter(OverheadMenu));

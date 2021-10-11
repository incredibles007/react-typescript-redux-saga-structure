import React, { FunctionComponent, useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ReactSVG } from 'react-svg';

import './index.scss';
import { IRootState } from '../../../models';

interface DispatchFromProps {}

interface StateFromProps {}

interface OwnProps {
    item: any;
    position?: string;
    onClick: (item: any) => void;
}

type Props = OwnProps &
    StateFromProps &
    DispatchFromProps &
    RouteComponentProps;

const HeaderActionDropdown: FunctionComponent<Props> = props => {
    const [expanded, setExpanded] = useState(false);
    const { item, position, onClick } = props;

    const onItem = (item: any) => {
        if (item.children && item.children.length > 0) {
            setExpanded(!expanded);
        } else {
            onClick(item);
            setExpanded(false);
        }
    };

    return (
        <div className="actions-nav__item header-action-dropdown">
            <button className="actions-nav__link" onClick={() => onItem(item)}>
                <span className="actions-nav__button">
                    <ReactSVG src={item.icon} />
                    <ReactSVG
                        style={{
                            marginLeft: '6px',
                            height: '8px',
                        }}
                        src={require('../../../assets/images/svg-icons/ic_arrow_down.svg')}
                    />
                </span>
                <span className="actions-nav__label">{item.title}</span>
            </button>

            {item.children && item.children.length > 0 && (
                <div
                    className={`main-nav__dropdown ${
                        expanded ? 'visible' : ''
                    } ${position ? position : ''}`}
                >
                    {item.children.map((childItem: any, index: number) => (
                        <div
                            key={`over-head-sub-menu-${index}`}
                            className="main-nav__subitem"
                            onClick={() => onItem(childItem)}
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
)(withRouter(HeaderActionDropdown));

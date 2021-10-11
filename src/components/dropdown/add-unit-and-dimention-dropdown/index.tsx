import React, { FunctionComponent, useState, useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import './index.scss';
import { IRootState } from '../../../models';
import * as fromUiAction from '../../../store/actions/ui.action';
import { ReactSVG } from 'react-svg';

interface DispatchFromProps {
    updateUnitInspectorConfig: typeof fromUiAction.updateUnitInspectorConfig;
}

interface StateFromProps { }

interface OwnProps { }

type Props = OwnProps &
    StateFromProps &
    DispatchFromProps &
    RouteComponentProps;

const AddUnitAndDimentionDropdown: FunctionComponent<Props> = props => {
    const [expanded, setExpanded] = useState(false);
    const { updateUnitInspectorConfig } = props;

    const toggleDropdown = () => {
        setExpanded(!expanded);
    };

    const onMenuItem = (menuId: string) => {
        updateUnitInspectorConfig({ visible: true, mode: menuId });
        setExpanded(false);
    };


    const addUnitAndDimenitionMenuItems = [
        {
            id: 'new-dimention',
            icon: require('../../../assets/images/svg-icons/ic_add_dimention.svg'),
            title: 'Add New Dimention',
        },
        {
            id: 'new-unit',
            icon: require('../../../assets/images/svg-icons/ic_add_unit.svg'),
            title: 'Add New Unit',
        },
    ];

    return (
        <nav className="add-unit-and-dimention-dropdown-wrapper">
            <button
                type="button"
                className="button button--small button--iconic button--primary"
                onClick={() => toggleDropdown()}
            >
                <ReactSVG
                    src={require('../../../assets/images/svg-icons/ic_plus.svg')}
                />
            </button>

            <div className={`main-nav__dropdown ${expanded ? 'visible' : ''}`}>
                {addUnitAndDimenitionMenuItems.map((item, index) => (
                    <div
                        key={`new-unit-and-dimention-menu-${index}`}
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
        updateUnitInspectorConfig: payload =>
            dispatch(fromUiAction.updateUnitInspectorConfig(payload)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(AddUnitAndDimentionDropdown));

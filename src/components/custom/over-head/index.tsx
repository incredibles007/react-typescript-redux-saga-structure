import React, { FunctionComponent } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { IOverheadMenuItem, IRootState } from '../../../models';
import { overheadMenuItems } from '../../../consts';
import { OverheadMenu, OverheadUserMenu } from '../../dropdown';

interface DispatchFromProps {}

interface StateFromProps {}

interface OwnProps {}

type Props = OwnProps &
    StateFromProps &
    DispatchFromProps &
    RouteComponentProps;

const OverHead: FunctionComponent<Props> = props => {
    const onOverheadMenu = (item: IOverheadMenuItem) => {
        props.history.push(item.href || '/projects');
    };

    return (
        <>
            <div className="overhead">
                <div className="grid-row">
                    <div className="grid-col grid-col--auto">
                        <nav className="main-nav">
                            {overheadMenuItems.map((item, index) => (
                                <OverheadMenu
                                    key={`overhead-menu-${index}`}
                                    item={item}
                                    onClick={item => onOverheadMenu(item)}
                                />
                            ))}
                        </nav>
                    </div>

                    <div className="grid-col"></div>

                    <div className="grid-col grid-col--auto">
                        <OverheadUserMenu />
                    </div>
                </div>
            </div>
        </>
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
)(withRouter(OverHead));

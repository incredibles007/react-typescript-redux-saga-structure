import React, { FunctionComponent } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ReactSVG } from 'react-svg';

import './index.scss';
import { IRootState } from '../../../models';

interface DispatchFromProps {}

interface StateFromProps {}

interface OwnProps {}

type Props = OwnProps &
    StateFromProps &
    DispatchFromProps &
    RouteComponentProps;

const ProjectSearchOrAdd: FunctionComponent<Props> = () => {
    const onSearch = () => {};

    return (
        <div className="sidebar-search projects-page">
            <div className="grid-row grid-row--smg">
                <div className="grid-col">
                    <input
                        type="text"
                        placeholder="Search"
                        className="form-input sidebar-search__input"
                    />
                </div>
                <div className="grid-col grid-col--auto">
                    <button
                        type="button"
                        className="button button--primary button--new-project"
                        onClick={() => onSearch()}
                    >
                        <div className="title">New Project</div>
                        <ReactSVG
                            src={require('../../../assets/images/svg-icons/ic_plus.svg')}
                        />
                    </button>
                </div>
            </div>
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
)(withRouter(ProjectSearchOrAdd));

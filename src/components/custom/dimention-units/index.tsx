import React, { FunctionComponent, useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { IRootState } from '../../../models';
import { DimentionUnitsSelector } from '../../../components';
import {
    selectSelectedDimension,
} from '../../../store/selector';
interface DispatchFromProps {
}

interface StateFromProps {
    selectedDimension: ReturnType<typeof selectSelectedDimension>;
}

interface OwnProps { }

type Props = OwnProps &
    StateFromProps &
    DispatchFromProps &
    RouteComponentProps;

const DimentionUnits: FunctionComponent<Props> = props => {

    const {
        selectedDimension,
    } = props;

    return (
        <>
            <div className="grid-row">
                <div className="grid-col grid-col--12">
                    <label className="p tc--light sidepane__label">
                        Base Unit
                    </label>
                </div>
            </div>
            <div className="grid-row">
                <select className="form-select">
                    <option value="Simple">Unit1</option>
                    <option value="Simple">Unit2</option>
                    <option value="Simple">Unit3</option>
                </select>
            </div>
            <div className="grid-row">
                <div className="grid-col grid-col--12 main-nav__item">
                    <label className="p tc--light sidepane__label">
                        Other Units
                    </label>
                    <button
                        type="button"
                        className="spoiler__delete"
                    ></button>
                    <button
                        type="button"
                        className="spoiler__plus"
                    ></button>
                </div>
            </div>
            <div className="grid-row">
                <div className="grid-col grid-col--12">
                    <DimentionUnitsSelector />
                    <DimentionUnitsSelector />
                    <DimentionUnitsSelector />
                </div>
            </div>
        </>
    );
};

function mapStateToProps(state: IRootState): StateFromProps {
    return {
        selectedDimension: selectSelectedDimension(state),
    };
}

function mapDispatchToProps(dispatch: Dispatch): DispatchFromProps {
    return {
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(DimentionUnits));

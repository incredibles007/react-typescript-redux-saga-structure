import React, { FunctionComponent, useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import {
    selectUnitInspectorConfig,
    selectSelectedDimension,
} from '../../../store/selector';
import * as fromUiAction from '../../../store/actions/ui.action';
import * as fromUnitsAction from '../../../store/actions/units.action';
import { IRootState } from '../../../models';

interface DispatchFromProps {
    updateSelectedDimension: typeof fromUnitsAction.updateSelectedDimension;
}

interface StateFromProps {
    selectedDimension: ReturnType<typeof selectSelectedDimension>;
}

interface OwnProps { }

type Props = OwnProps &
    StateFromProps &
    DispatchFromProps &
    RouteComponentProps;

const DimentionDetails: FunctionComponent<Props> = props => {
    const {
        updateSelectedDimension,
        selectedDimension,
    } = props;

    const [name, setName] = useState(selectedDimension.name);
    const onUpdateDimentionDetails = (payload: any) => {
        updateSelectedDimension(payload);
    };

    return (
        <>
            <div className="grid-row">
                <div className="grid-col grid-col--4">
                    <label className="p tc--light sidepane__label">
                        Name
                    </label>
                </div>
                <div className="grid-col grid-col--8">
                    <input
                        type="text"
                        className="form-input"
                        value={name}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setName(e.target.value)
                        }
                        onBlur={(e: React.ChangeEvent<HTMLInputElement>) =>
                            onUpdateDimentionDetails({ name: e.target.value })
                        }
                    />
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
        updateSelectedDimension: (payload) =>
            dispatch(fromUnitsAction.updateSelectedDimension(payload)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(DimentionDetails));

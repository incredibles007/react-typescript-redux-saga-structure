import React, { FunctionComponent, useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import './index.scss';
import { IRootState } from '../../../models';
import { ReactSVG } from 'react-svg';
import {
    Sidepane,
    SidepaneContent,
    SidepaneFooter,
    SidepaneHeader,
    SidepaneSpoiler,
} from '../../../components';

import UnitDetails from '../../../components/custom/unit-details';
import UnitTransform from '../../../components/custom/unit-transform';
import * as fromUnitsAction from '../../../store/actions/units.action';

const dimentionUnits = [
    {
        id: '0',
        title: 'Inch',
    },
    {
        id: '1',
        title: 'Meter',
    },
    {
        id: '2',
        title: 'Mile',
    },
    {
        id: '3',
        title: 'Unit2',
    },
    {
        id: '4',
        title: 'Unit1',
    },
    {
        id: '5',
        title: 'Unit7',
    },
];

interface DispatchFromProps {
    addDimensionUnits: typeof fromUnitsAction.addDimensionUnits;
}

interface StateFromProps { }

interface OwnProps { }

type Props = OwnProps &
    StateFromProps &
    DispatchFromProps &
    RouteComponentProps;

const DimentionUnitsSelector: FunctionComponent<Props> = props => {
    const { addDimensionUnits } = props;
    const [expanded, setExpanded] = useState(false);
    const [visibleEditPopup, setVisibleEditPopup] = useState(false);
    const [isAdd, setIsAdd] = useState(false);
    const [value, setValue] = useState('Select a unit');

    const toggleDropdown = () => {
        setExpanded(!expanded);
    };

    const onDimentionUnit = (unitId: string) => {
        setValue(dimentionUnits.filter(unit => unit.id === unitId)[0].title);
        setExpanded(false);
    };

    const onAddDimentionUnit = () => {
        setVisibleEditPopup(true);
        setIsAdd(true);
        setExpanded(false);
    };

    const onClose = () => {
        setVisibleEditPopup(false);
    }

    const onEdit = () => {
        setVisibleEditPopup(true);
        setIsAdd(false);
        setExpanded(false);
    };

    const onSave = () => {
        const data = {
            "name": "string",
            "unitDimensionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "transformCoefficientA": 0,
            "transformCoefficientB": 0,
            "unitDimension": {
                "unitDimensionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "name": "string",
                "baseUnitId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "baseUnit": {
                    "unitId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                    "name": "string",
                    "unitDimensionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                    "transformCoefficientA": 0,
                    "transformCoefficientB": 0
                },
                "dimensionUnits": [
                    {
                        "unitId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                        "name": "string",
                        "unitDimensionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                        "transformCoefficientA": 0,
                        "transformCoefficientB": 0
                    }
                ]
            }
        }

        addDimensionUnits(data);
    }

    return (
        <div className="mt--050 grid-row grid-row--smg grid-row--aic">
            <div className="grid-col grid-col--auto">
                <div className="form-checkbox form-checkbox_nolabel">
                    <input
                        type="checkbox"
                        name="checkbox"
                        className="form-checkbox__input"
                    />
                    <span className="form-checkbox__icon"></span>
                </div>
            </div>
            <div className="grid-col">
                <div className={`form-multiselect ${expanded ? 'active' : ''}`}>
                    <input
                        type="text"
                        value={value}
                        readOnly
                        className="form-select form-multiselect__input"
                        onClick={() => toggleDropdown()}
                    />
                    <div className="form-multiselect__dropdown no-checkbox">
                        <div className="add-dimention-unit-btn-wrapper">
                            <label
                                className="form-checkbox__label add-dimention-unit-btn"
                                onClick={() => onAddDimentionUnit()}
                            >
                                <span className="ic-plus">+</span>
                                <span className="title">Add New Unit</span>
                            </label>
                        </div>
                        {dimentionUnits.map((item, index) => (
                            <div
                                key={`dimention-unit-${index}`}
                                className="form-checkbox"
                                onClick={() => onDimentionUnit(item.id)}
                            >
                                <label className="form-checkbox__label">
                                    {item.title}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="grid-col grid-col--auto">
                <button
                    type="button"
                    className="button button--small button--iconic"
                    onClick={() => onEdit()}
                >
                    <ReactSVG
                        src={require('../../../assets/images/svg-icons/ic_edit.svg')}
                    />
                </button>
            </div>

            {visibleEditPopup ? (
                <div
                    className="dimention-unit-div"
                >
                    <Sidepane>
                        <SidepaneHeader
                            title={isAdd ? "Add New Unit" : "Edit Unit"}
                            onClose={() => onClose()}
                        />
                        <SidepaneContent style={{ height: `calc(100% - 188px)` }}>
                            <SidepaneSpoiler title="Details">
                                <UnitDetails />
                            </SidepaneSpoiler>
                            <SidepaneSpoiler title="Transformation Coefficents">
                                <UnitTransform />
                            </SidepaneSpoiler>
                            {isAdd ? null :
                                (<button
                                    className="dimention-unit-btn__delete button"
                                >
                                    <ReactSVG
                                        src={require('../../../assets/images/svg-icons/ic_delete.svg')}
                                        style={{ marginRight: "5px" }}
                                    />
                                    Delete
                                </button>)}
                        </SidepaneContent>

                        <SidepaneFooter>

                            <button
                                type="submit"
                                className="button button--primary"
                                onClick={() => onSave()}
                            >
                                Save & Add
                                </button>
                        </SidepaneFooter>
                    </Sidepane>
                </div>
            ) : null}
        </div>
    );
};

function mapStateToProps(state: IRootState): StateFromProps {
    return {};
}

function mapDispatchToProps(dispatch: Dispatch): DispatchFromProps {
    return {
        addDimensionUnits: payload =>
            dispatch(fromUnitsAction.addDimensionUnits(payload)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(DimentionUnitsSelector));

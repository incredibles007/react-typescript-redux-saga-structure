import React, { FunctionComponent } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ReactSVG } from 'react-svg';

import { SidepaneSpoiler } from '../../../components';
import { graphRunDropdown } from '../../../consts';
import { IRootState } from '../../../models';
import * as fromUiAction from '../../../store/actions/ui.action';

interface DispatchFromProps {
    updateGraphRunInspectorConfig: typeof fromUiAction.updateGraphRunInspectorConfig;
}

interface StateFromProps { }

interface OwnProps { }

type Props = OwnProps &
    StateFromProps &
    DispatchFromProps &
    RouteComponentProps;

const GraphNewRunInspector: FunctionComponent<Props> = props => {
    const { updateGraphRunInspectorConfig } = props;

    const onGotoRunsView = () => {
        updateGraphRunInspectorConfig({
            selectedInspector: graphRunDropdown.children[1].id,
        });
    };

    const onCloseInspector = () => {
        updateGraphRunInspectorConfig({
            visible: false,
        });
    };

    return (
        <>
            <div className="sidepane sidepane--xl" style={{ width: '100vw' }}>
                <div className="sidepane__head">
                    <div className="grid-row grid-row--smg grid-row--aic">
                        <div className="grid-col grid-col--auto">
                            <button
                                type="button"
                                className="sidepane__button"
                                onClick={() => {
                                    onGotoRunsView();
                                }}
                            >
                                <ReactSVG
                                    wrapper="span"
                                    src={require('../../../assets/images/svg-icons/ic_left_arrow.svg')}
                                />
                            </button>
                        </div>
                        <div className="grid-col grid-col--auto">
                            <div className="h1 fw-400">New Run</div>
                        </div>
                        <div className="grid-col"></div>
                        <div className="grid-col grid-col--auto">
                            <button
                                type="button"
                                className="sidepane__button"
                                onClick={() => onCloseInspector()}
                            >
                                <ReactSVG
                                    src={require('../../../assets/images/svg-icons/ic_close.svg')}
                                />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="sidepane__cont">
                    <SidepaneSpoiler
                        title="Run #19849"
                        className="runs__spoiler"
                    >
                        <SidepaneSpoiler title="Run Environment">
                            <select className="form-select" onChange={() => { }}>
                                <option value={'DJJ Laptop'}>DJJ Laptop</option>
                            </select>
                        </SidepaneSpoiler>

                        <SidepaneSpoiler title="Control Parameters">
                            <label className="p tc--light sidepane__label">
                                Option Scenario Definition
                            </label>
                            <input
                                type="text"
                                placeholder="Enter scenario count"
                                className="form-input"
                            />
                            <div className="grid-row">
                                <div className="mt--050 grid-col grid-col--auto">
                                    <div className="form-checkbox">
                                        <input
                                            type="checkbox"
                                            name="checkbox"
                                            className="form-checkbox__input"
                                        />
                                        <label className="form-checkbox__label">
                                            Cache Output
                                        </label>
                                        <span className="form-checkbox__icon"></span>
                                    </div>
                                </div>
                                <div className="mt--050 grid-col grid-col--auto">
                                    <div className="form-checkbox">
                                        <input
                                            type="checkbox"
                                            name="checkbox"
                                            className="form-checkbox__input"
                                        />
                                        <label className="form-checkbox__label">
                                            Log Output
                                        </label>
                                        <span className="form-checkbox__icon"></span>
                                    </div>
                                </div>
                                <div className="mt--050 grid-col"></div>
                                <div className="mt--050 grid-col grid-col--auto">
                                    <button
                                        type="button"
                                        className="sidepane__button"
                                    >
                                        <ReactSVG
                                            src={require('../../../assets/images/svg-icons/ic_plus.svg')}
                                        />
                                    </button>
                                </div>
                            </div>

                            <label className="mt--100 p tc--light sidepane__label">
                                Portfolio Position
                            </label>
                            <input
                                type="text"
                                value={10000000}
                                placeholder="Enter portfolio position"
                                className="form-input"
                                onChange={() => { }}
                            />
                            <div className="grid-row">
                                <div className="mt--050 grid-col grid-col--auto">
                                    <div className="form-checkbox">
                                        <input
                                            type="checkbox"
                                            name="checkbox"
                                            className="form-checkbox__input"
                                        />
                                        <label className="form-checkbox__label">
                                            Cache Output
                                        </label>
                                        <span className="form-checkbox__icon"></span>
                                    </div>
                                </div>
                                <div className="mt--050 grid-col grid-col--auto">
                                    <div className="form-checkbox">
                                        <input
                                            type="checkbox"
                                            name="checkbox"
                                            className="form-checkbox__input"
                                        />
                                        <label className="form-checkbox__label">
                                            Log Output
                                        </label>
                                        <span className="form-checkbox__icon"></span>
                                    </div>
                                </div>
                                <div className="mt--050 grid-col"></div>
                                <div className="mt--050 grid-col grid-col--auto">
                                    <button
                                        type="button"
                                        className="sidepane__button"
                                    >
                                        <ReactSVG
                                            src={require('../../../assets/images/svg-icons/ic_plus.svg')}
                                        />
                                    </button>
                                </div>
                            </div>

                            <label className="mt--100 p tc--light sidepane__label">
                                Stock Option
                            </label>
                            <input
                                type="text"
                                placeholder="Enter stock option count"
                                className="form-input"
                            />
                            <div className="grid-row">
                                <div className="mt--050 grid-col grid-col--auto">
                                    <div className="form-checkbox">
                                        <input
                                            type="checkbox"
                                            name="checkbox"
                                            className="form-checkbox__input"
                                        />
                                        <label className="form-checkbox__label">
                                            Cache Output
                                        </label>
                                        <span className="form-checkbox__icon"></span>
                                    </div>
                                </div>
                                <div className="mt--050 grid-col grid-col--auto">
                                    <div className="form-checkbox">
                                        <input
                                            type="checkbox"
                                            name="checkbox"
                                            className="form-checkbox__input"
                                        />
                                        <label className="form-checkbox__label">
                                            Log Output
                                        </label>
                                        <span className="form-checkbox__icon"></span>
                                    </div>
                                </div>
                                <div className="mt--050 grid-col"></div>
                                <div className="mt--050 grid-col grid-col--auto">
                                    <button
                                        type="button"
                                        className="sidepane__button"
                                    >
                                        <ReactSVG
                                            src={require('../../../assets/images/svg-icons/ic_plus.svg')}
                                        />
                                    </button>
                                </div>
                            </div>
                        </SidepaneSpoiler>

                        <SidepaneSpoiler title="Model Configurations">
                            <></>
                        </SidepaneSpoiler>

                        <SidepaneSpoiler title="Routing">
                            <></>
                        </SidepaneSpoiler>

                        <SidepaneSpoiler title="Partitioning">
                            <></>
                        </SidepaneSpoiler>

                        <div className="grid-row">
                            <div className="mt--050 mb--050 grid-col grid-col--auto">
                                <div className="form-checkbox">
                                    <input
                                        type="checkbox"
                                        name="checkbox"
                                        className="form-checkbox__input"
                                    />
                                    <label className="form-checkbox__label">
                                        Make this the Default Configuration{' '}
                                        <span className="blocked p p--sm tc--xlight">
                                            Checking this will erase the
                                            previous default configuration
                                        </span>
                                    </label>
                                    <span className="form-checkbox__icon"></span>
                                </div>
                            </div>
                        </div>
                    </SidepaneSpoiler>

                    <SidepaneSpoiler
                        title="Run #19850"
                        className="runs__spoiler"
                    >
                        <SidepaneSpoiler title="Run Environment">
                            <select className="form-select">
                                <option value="DJJ Laptop">DJJ Laptop</option>
                            </select>
                        </SidepaneSpoiler>

                        <SidepaneSpoiler title="Control Parameters">
                            <label className="p tc--light sidepane__label">
                                Option Scenario Definition
                            </label>
                            <input
                                type="text"
                                placeholder="Enter scenario count"
                                className="form-input"
                            />
                            <div className="grid-row">
                                <div className="mt--050 grid-col grid-col--auto">
                                    <div className="form-checkbox">
                                        <input
                                            type="checkbox"
                                            name="checkbox"
                                            className="form-checkbox__input"
                                        />
                                        <label className="form-checkbox__label">
                                            Cache Output
                                        </label>
                                        <span className="form-checkbox__icon"></span>
                                    </div>
                                </div>
                                <div className="mt--050 grid-col grid-col--auto">
                                    <div className="form-checkbox">
                                        <input
                                            type="checkbox"
                                            name="checkbox"
                                            className="form-checkbox__input"
                                        />
                                        <label className="form-checkbox__label">
                                            Log Output
                                        </label>
                                        <span className="form-checkbox__icon"></span>
                                    </div>
                                </div>
                                <div className="mt--050 grid-col"></div>
                                <div className="mt--050 grid-col grid-col--auto">
                                    <ReactSVG
                                        src={require('../../../assets/images/svg-icons/ic_plus.svg')}
                                    />
                                </div>
                            </div>

                            <label className="mt--100 p tc--light sidepane__label">
                                Portfolio Position
                            </label>
                            <input
                                type="text"
                                value="10000000"
                                placeholder="Enter portfolio position"
                                className="form-input"
                                onChange={() => { }}
                            />
                            <div className="grid-row">
                                <div className="mt--050 grid-col grid-col--auto">
                                    <div className="form-checkbox">
                                        <input
                                            type="checkbox"
                                            name="checkbox"
                                            className="form-checkbox__input"
                                        />
                                        <label className="form-checkbox__label">
                                            Cache Output
                                        </label>
                                        <span className="form-checkbox__icon"></span>
                                    </div>
                                </div>
                                <div className="mt--050 grid-col grid-col--auto">
                                    <div className="form-checkbox">
                                        <input
                                            type="checkbox"
                                            name="checkbox"
                                            className="form-checkbox__input"
                                        />
                                        <label className="form-checkbox__label">
                                            Log Output
                                        </label>
                                        <span className="form-checkbox__icon"></span>
                                    </div>
                                </div>
                                <div className="mt--050 grid-col"></div>
                                <div className="mt--050 grid-col grid-col--auto">
                                    <button
                                        type="button"
                                        className="sidepane__button"
                                    >
                                        <ReactSVG
                                            src={require('../../../assets/images/svg-icons/ic_plus.svg')}
                                        />
                                    </button>
                                </div>
                            </div>

                            <label className="mt--100 p tc--light sidepane__label">
                                Stock Option
                            </label>
                            <input
                                type="text"
                                placeholder="Enter stock option count"
                                className="form-input"
                            />
                            <div className="grid-row">
                                <div className="mt--050 grid-col grid-col--auto">
                                    <div className="form-checkbox">
                                        <input
                                            type="checkbox"
                                            name="checkbox"
                                            className="form-checkbox__input"
                                        />
                                        <label className="form-checkbox__label">
                                            Cache Output
                                        </label>
                                        <span className="form-checkbox__icon"></span>
                                    </div>
                                </div>
                                <div className="mt--050 grid-col grid-col--auto">
                                    <div className="form-checkbox">
                                        <input
                                            type="checkbox"
                                            name="checkbox"
                                            className="form-checkbox__input"
                                        />
                                        <label className="form-checkbox__label">
                                            Log Output
                                        </label>
                                        <span className="form-checkbox__icon"></span>
                                    </div>
                                </div>
                                <div className="mt--050 grid-col"></div>
                                <div className="mt--050 grid-col grid-col--auto">
                                    <button
                                        type="button"
                                        className="sidepane__button"
                                    >
                                        <ReactSVG
                                            src={require('../../../assets/images/svg-icons/ic_plus.svg')}
                                        />
                                    </button>
                                </div>
                            </div>
                        </SidepaneSpoiler>

                        <SidepaneSpoiler title="Model Configurations">
                            <></>
                        </SidepaneSpoiler>

                        <SidepaneSpoiler title="Routing">
                            <></>
                        </SidepaneSpoiler>

                        <SidepaneSpoiler title="Partitioning">
                            <></>
                        </SidepaneSpoiler>

                        <div className="grid-row">
                            <div className="mt--050 mb--050 grid-col grid-col--auto">
                                <div className="form-checkbox">
                                    <input
                                        type="checkbox"
                                        name="checkbox"
                                        className="form-checkbox__input"
                                    />
                                    <label className="form-checkbox__label">
                                        Make this the Default Configuration{' '}
                                        <span className="blocked p p--sm tc--xlight">
                                            Checking this will erase the
                                            previous default configuration
                                        </span>
                                    </label>
                                    <span className="form-checkbox__icon"></span>
                                </div>
                            </div>
                        </div>
                    </SidepaneSpoiler>
                </div>

                <div className="sidepane__foot">
                    <div className="grid-row">
                        <div className="grid-col grid-col--6">
                            <button type="button" className="button">
                                Save Configurations
                            </button>
                        </div>
                        <div className="grid-col grid-col--6">
                            <button
                                type="button"
                                className="button button--primary"
                            >
                                Run
                            </button>
                        </div>
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
    return {
        updateGraphRunInspectorConfig: (payload: any) =>
            dispatch(fromUiAction.updateGraphRunInspectorConfig(payload)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(GraphNewRunInspector));

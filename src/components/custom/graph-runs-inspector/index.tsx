import React, { FunctionComponent, useState } from 'react';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ReactSVG } from 'react-svg';

import { graphRunDropdown } from '../../../consts';
import { IRootState } from '../../../models';
import * as fromUiAction from '../../../store/actions/ui.action';
import { selectGraphRunInspectorConfig } from '../../../store/selector';

interface DispatchFromProps {
    updateGraphRunInspectorConfig: typeof fromUiAction.updateGraphRunInspectorConfig;
}

interface StateFromProps {
    graphRunInspectorConfig: ReturnType<typeof selectGraphRunInspectorConfig>;
}

interface OwnProps {}

type Props = OwnProps &
    StateFromProps &
    DispatchFromProps &
    RouteComponentProps;

type ObjectWithArray = {
    [key: string]: Array<{ id: string; title: string; value: number }>;
};

const GraphRunsInspector: FunctionComponent<Props> = props => {
    const { graphRunInspectorConfig, updateGraphRunInspectorConfig } = props;

    const tabs = [
        { id: 'queued-runs', title: 'Queued' },
        { id: 'completed-runs', title: 'Completed' },
    ];

    const completedTableHeaders = [
        {
            id: 'checkbox-column',
            type: 'checkbox',
        },
        {
            id: 'id-column',
            title: 'Run ID',
        },
        {
            id: 'version-column',
            title: 'Version',
        },
        {
            id: 'performance-column',
            title: 'Performance',
            colSpan: 2,
        },
        {
            id: 'error-column',
            title: 'Errors',
        },
        {
            id: 'result-column',
            title: 'Results',
        },
        {
            id: 'row-action-column',
            type: 'row-action',
        },
    ];

    const completedTableData = [
        {
            selected: false,
            runId: '#1244619',
            version: '1.0',
            performance: 50,
            time: '33mins, 22 secs',
            error: {
                status: 'Failed',
                source: 'Contract Splitter 8.0',
            },
            cancelled: {
                status: true,
                user: {
                    name: 'Joe',
                    userType: 'owner',
                },
            },
            result: {},
            expanded: false,
            selectedSubTabId: 'control-parameters',
            params: {
                'control-parameters': [
                    {
                        id: 'option-scenario-definition',
                        title: 'Option Scenario Definition',
                        value: 1000000,
                    },
                    {
                        id: 'option-scenario-definition',
                        title: 'Portfolio Position',
                        value: 100000,
                    },
                    {
                        id: 'option-scenario-definition',
                        title: 'Stock Option',
                        value: 100000000,
                    },
                ],
                'model-configurations': [],
                routing: [],
                partitioning: [],
                'run-environment': [],
            },
        },
        {
            selected: false,
            runId: '#1244618',
            version: '5.0',
            performance: 100,
            time: '28mins, 49 secs',
            cancelled: {
                status: false,
                user: {
                    name: 'Joe',
                    userType: 'owner',
                },
            },
            result: {
                source: 'source',
            },
            expanded: false,
            selectedSubTabId: 'control-parameters',
            params: {
                'control-parameters': [
                    {
                        id: 'option-scenario-definition',
                        title: 'Option Scenario Definition',
                        value: 1000000,
                    },
                    {
                        id: 'option-scenario-definition',
                        title: 'Portfolio Position',
                        value: 100000,
                    },
                    {
                        id: 'option-scenario-definition',
                        title: 'Stock Option',
                        value: 100000000,
                    },
                ],
                'model-configurations': [],
                routing: [],
                partitioning: [],
                'run-environment': [],
            },
        },
        {
            selected: false,
            runId: '#1244617',
            version: '5.0',
            performance: 0,
            time: '15mins, 06 secs',
            cancelled: {
                status: true,
                user: {
                    name: 'Joe',
                    userType: 'owner',
                },
            },
            result: {},
            expanded: false,
            selectedSubTabId: 'control-parameters',
            params: {
                'control-parameters': [
                    {
                        id: 'option-scenario-definition',
                        title: 'Option Scenario Definition',
                        value: 1000000,
                    },
                    {
                        id: 'option-scenario-definition',
                        title: 'Portfolio Position',
                        value: 100000,
                    },
                    {
                        id: 'option-scenario-definition',
                        title: 'Stock Option',
                        value: 100000000,
                    },
                ],
                'model-configurations': [],
                routing: [],
                partitioning: [],
                'run-environment': [],
            },
        },
        {
            selected: false,
            runId: '#1244619',
            version: '1.0',
            performance: 50,
            time: '33mins, 22 secs',
            error: {
                status: 'Failed',
                source: 'Contract Splitter 8.0',
            },
            cancelled: {
                status: true,
                user: {
                    name: 'Joe',
                    userType: 'owner',
                },
            },
            result: {},
            expanded: false,
            selectedSubTabId: 'control-parameters',
            params: {
                'control-parameters': [
                    {
                        id: 'option-scenario-definition',
                        title: 'Option Scenario Definition',
                        value: 1000000,
                    },
                    {
                        id: 'option-scenario-definition',
                        title: 'Portfolio Position',
                        value: 100000,
                    },
                    {
                        id: 'option-scenario-definition',
                        title: 'Stock Option',
                        value: 100000000,
                    },
                ],
                'model-configurations': [],
                routing: [],
                partitioning: [],
                'run-environment': [],
            },
        },
        {
            selected: false,
            runId: '#1244618',
            version: '5.0',
            performance: 100,
            time: '28mins, 49 secs',
            cancelled: {
                status: false,
                user: {
                    name: 'Joe',
                    userType: 'owner',
                },
            },
            result: {
                source: 'source',
            },
            expanded: false,
            selectedSubTabId: 'control-parameters',
            params: {
                'control-parameters': [
                    {
                        id: 'option-scenario-definition',
                        title: 'Option Scenario Definition',
                        value: 1000000,
                    },
                    {
                        id: 'option-scenario-definition',
                        title: 'Portfolio Position',
                        value: 100000,
                    },
                    {
                        id: 'option-scenario-definition',
                        title: 'Stock Option',
                        value: 100000000,
                    },
                ],
                'model-configurations': [],
                routing: [],
                partitioning: [],
                'run-environment': [],
            },
        },
        {
            selected: false,
            runId: '#1244617',
            version: '5.0',
            performance: 0,
            time: '15mins, 06 secs',
            cancelled: {
                status: true,
                user: {
                    name: 'Joe',
                    userType: 'owner',
                },
            },
            result: {},
            expanded: false,
            selectedSubTabId: 'control-parameters',
            params: {
                'control-parameters': [
                    {
                        id: 'option-scenario-definition',
                        title: 'Option Scenario Definition',
                        value: 1000000,
                    },
                    {
                        id: 'portfolio-position',
                        title: 'Portfolio Position',
                        value: 100000,
                    },
                    {
                        id: 'stock-option',
                        title: 'Stock Option',
                        value: 100000000,
                    },
                ],
                'model-configurations': [],
                routing: [],
                partitioning: [],
                'run-environment': [],
            },
        },
    ];

    const completedTableRowSubTabs = [
        {
            id: 'control-parameters',
            title: 'Control Parameters',
        },
        {
            id: 'model-configurations',
            title: 'Model Configurations',
        },
        {
            id: 'routing',
            title: 'Routing',
        },
        {
            id: 'partitioning',
            title: 'Partitioning',
        },
        {
            id: 'run-environment',
            title: 'Run Environment',
        },
    ];

    const [completedTableDataState, setCompletedTableDataState] = useState(
        completedTableData
    );

    const onCloseInspector = () => {
        updateGraphRunInspectorConfig({ visible: false });
    };

    const onGotoNewRun = () => {
        updateGraphRunInspectorConfig({
            selectedInspector: graphRunDropdown.children[2].id,
        });
    };

    const onTabChange = (tab: any) => {
        updateGraphRunInspectorConfig({
            selectedInspector: tab.id,
        });
    };

    const onExpandAll = () => {
        setCompletedTableDataState(
            completedTableDataState.filter(item => !item.expanded).length === 0
                ? completedTableDataState.map(item =>
                      Object.assign({}, item, { expanded: false })
                  )
                : completedTableDataState.map(item =>
                      Object.assign({}, item, { expanded: true })
                  )
        );
    };

    const onBatch = () => {
        console.log('onBatch');
    };

    const onToggleExpandingCompletedTableRow = (index: number) => {
        completedTableDataState[index].expanded = !completedTableDataState[
            index
        ].expanded;
        setCompletedTableDataState([...completedTableDataState]);
    };

    const onSubTabChange = (index: number, subTab: any) => {
        completedTableDataState[index].selectedSubTabId = subTab.id;
        setCompletedTableDataState([...completedTableDataState]);
    };

    const onCheckAllCompletedData = (event: any) => {
        setCompletedTableDataState(
            event.target.checked
                ? completedTableDataState.map(item =>
                      Object.assign({}, item, { selected: true })
                  )
                : completedTableDataState.map(item =>
                      Object.assign({}, item, { selected: false })
                  )
        );
    };

    const onCheckCompletedData = (index: number, event: any) => {
        completedTableDataState[index].selected = event.target.checked;
        setCompletedTableDataState(Object.assign([], completedTableDataState));
    };

    return (
        <div className="sidepane sidepane--xl">
            <div className="sidepane__head">
                <div className="grid-row grid-row--smg grid-row--aic">
                    <div className="grid-col grid-col--auto">
                        <div className="h1 fw-400">Runs</div>
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
                <div className="grid-row grid-row--smg">
                    <div className="grid-col">
                        <input
                            type="text"
                            placeholder="Search"
                            className="form-input form-input--dark form-input--search"
                        />
                    </div>

                    <div className="grid-col grid-col--auto">
                        <button
                            type="button"
                            className="button button--small button--primary"
                            onClick={() => onGotoNewRun()}
                        >
                            New Run
                            <ReactSVG
                                wrapper="span"
                                src={require('../../../assets/images/svg-icons/ic_plus_12_16.svg')}
                            />
                        </button>
                    </div>
                </div>

                <div className="mt--075">
                    <div className="grid-row grid-row--smg grid-row--aib">
                        <div className="grid-col">
                            <div className="tabs tabs--bordered">
                                {tabs.map((tab: any) => (
                                    <button
                                        key={`graph-run-inspector-tab-${tab.id}`}
                                        type="button"
                                        className={`tabs__item ${
                                            tab.id ===
                                            graphRunInspectorConfig.selectedInspector
                                                ? 'active'
                                                : ''
                                        }`}
                                        onClick={() => {
                                            onTabChange(tab);
                                        }}
                                    >
                                        {tab.title}
                                        <span className="tabs__counter">
                                            {tab.id === 'completed'
                                                ? completedTableDataState.length
                                                : 0}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="grid-col grid-col--auto">
                            <button
                                type="button"
                                className="button button--small"
                                onClick={() => onExpandAll()}
                            >
                                {completedTableDataState.filter(
                                    item => !item.expanded
                                ).length === 0
                                    ? 'Collapse'
                                    : 'Expand'}{' '}
                                All
                            </button>
                        </div>
                        <div className="grid-col grid-col--auto">
                            <button
                                type="button"
                                className="button button--small"
                                onClick={() => onBatch()}
                            >
                                Batch (
                                {
                                    completedTableDataState.filter(
                                        item => item.selected
                                    ).length
                                }
                                )
                                <ReactSVG
                                    wrapper="span"
                                    src={require('../../../assets/images/svg-icons/ic_arrow_down.svg')}
                                />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt--125">
                    <div className="runs">
                        <table className="runs__table">
                            <thead>
                                <tr>
                                    {completedTableHeaders.map((item: any) => (
                                        <th
                                            key={`run-table-${item.id}`}
                                            colSpan={
                                                item.colSpan ? item.colSpan : 1
                                            }
                                        >
                                            {item.type &&
                                            item.type === 'checkbox' ? (
                                                <div className="form-checkbox form-checkbox_nolabel">
                                                    <input
                                                        type="checkbox"
                                                        name="checkbox"
                                                        className="form-checkbox__input"
                                                        checked={
                                                            completedTableDataState.filter(
                                                                item =>
                                                                    !item.selected
                                                            ).length === 0
                                                        }
                                                        onChange={(
                                                            event: any
                                                        ) =>
                                                            onCheckAllCompletedData(
                                                                event
                                                            )
                                                        }
                                                    />
                                                    <span className="form-checkbox__icon"></span>
                                                </div>
                                            ) : item.type &&
                                              item.type === 'row-action' ? (
                                                ''
                                            ) : (
                                                item.title
                                            )}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {completedTableDataState.map(
                                    (item: any, index: number) => (
                                        <React.Fragment
                                            key={`completed-run-${index}`}
                                        >
                                            <tr>
                                                <td className="data-table__cell data-table__cell--1">
                                                    <div className="form-checkbox form-checkbox_nolabel">
                                                        <input
                                                            type="checkbox"
                                                            name="checkbox"
                                                            className="form-checkbox__input"
                                                            checked={
                                                                item.selected
                                                            }
                                                            onChange={(
                                                                event: any
                                                            ) =>
                                                                onCheckCompletedData(
                                                                    index,
                                                                    event
                                                                )
                                                            }
                                                        />
                                                        <span className="form-checkbox__icon"></span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div
                                                        className={`runs__toggle ${
                                                            item.expanded
                                                                ? 'runs__toggle--opened'
                                                                : ''
                                                        } `}
                                                        onClick={() =>
                                                            onToggleExpandingCompletedTableRow(
                                                                index
                                                            )
                                                        }
                                                    >
                                                        {item.runId}
                                                    </div>
                                                </td>
                                                <td>{item.version}</td>
                                                <td className="data-table__cell data-table__cell--1">
                                                    <div
                                                        className={`${
                                                            item.performance >
                                                            50
                                                                ? 'tc--success'
                                                                : item.performance >
                                                                  0
                                                                ? 'tc--error'
                                                                : 'tc--xlight'
                                                        } runs__bull`}
                                                    ></div>
                                                    {item.performance}%
                                                </td>
                                                <td>{item.time}</td>
                                                <td
                                                    className={`${
                                                        item.error
                                                            ? 'tc--error'
                                                            : item.cancelled
                                                                  .status
                                                            ? 'tc--xlight'
                                                            : 'tc--success'
                                                    } `}
                                                >
                                                    {item.error ? (
                                                        <>
                                                            {item.error.status}{' '}
                                                            at{' '}
                                                            <Link
                                                                to="/"
                                                                className="text-link"
                                                            >
                                                                {
                                                                    item.error
                                                                        .source
                                                                }
                                                            </Link>
                                                        </>
                                                    ) : item.cancelled
                                                          .status ? (
                                                        <>
                                                            Cancelled by{' '}
                                                            {
                                                                item.cancelled
                                                                    .user
                                                                    .userType
                                                            }
                                                            ,{' '}
                                                            {
                                                                item.cancelled
                                                                    .user.name
                                                            }
                                                        </>
                                                    ) : (
                                                        <>None</>
                                                    )}
                                                </td>
                                                <td className="tc--xlight">
                                                    {item.result.source ? (
                                                        <Link
                                                            to="/"
                                                            className="text-link tc--primary"
                                                        >
                                                            View
                                                        </Link>
                                                    ) : (
                                                        <>N/A</>
                                                    )}
                                                </td>
                                                <td className="data-table__cell data-table__cell--1">
                                                    <ReactSVG
                                                        className="runs__more"
                                                        wrapper="span"
                                                        src={require('../../../assets/images/svg-icons/ic_table_action_more.svg')}
                                                    />
                                                </td>
                                            </tr>
                                            <tr
                                                className={
                                                    item.expanded
                                                        ? ''
                                                        : 'removed'
                                                }
                                            >
                                                <td colSpan={8}>
                                                    <div className="tabs">
                                                        {completedTableRowSubTabs.map(
                                                            (subTab: any) => (
                                                                <button
                                                                    key={`run-sub-tab-${subTab.id}`}
                                                                    type="button"
                                                                    data-target="#"
                                                                    className={`tabs__item ${
                                                                        subTab.id ===
                                                                        item.selectedSubTabId
                                                                            ? 'active'
                                                                            : ''
                                                                    }`}
                                                                    onClick={() =>
                                                                        onSubTabChange(
                                                                            index,
                                                                            subTab
                                                                        )
                                                                    }
                                                                >
                                                                    {
                                                                        subTab.title
                                                                    }
                                                                </button>
                                                            )
                                                        )}
                                                    </div>
                                                    <div className="data-table">
                                                        <table className="data-table__table">
                                                            <tbody>
                                                                {Object.entries(
                                                                    item.params as ObjectWithArray
                                                                )
                                                                    .filter(
                                                                        entry =>
                                                                            entry[0] ===
                                                                            item.selectedSubTabId
                                                                    )
                                                                    .map(
                                                                        entry =>
                                                                            entry[1]
                                                                    )[0]
                                                                    .map(
                                                                        (
                                                                            param: any
                                                                        ) => (
                                                                            <tr
                                                                                key={
                                                                                    Math.floor(
                                                                                        Math.random() *
                                                                                            1000000
                                                                                    ) +
                                                                                    1 +
                                                                                    ''
                                                                                }
                                                                            >
                                                                                <td className="tc--light data-table__cell--1">
                                                                                    {
                                                                                        param.title
                                                                                    }
                                                                                </td>
                                                                                <td></td>
                                                                                <td>
                                                                                    {
                                                                                        param.value
                                                                                    }
                                                                                </td>
                                                                            </tr>
                                                                        )
                                                                    )}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </td>
                                            </tr>
                                        </React.Fragment>
                                    )
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

function mapStateToProps(state: IRootState): StateFromProps {
    return {
        graphRunInspectorConfig: selectGraphRunInspectorConfig(state),
    };
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
)(withRouter(GraphRunsInspector));

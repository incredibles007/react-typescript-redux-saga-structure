import React, { FunctionComponent, useEffect, useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

import './index.scss';
import {
    GraphRunsInspector,
    GraphNewRunInspector,
    LibraryAssetsSidebar,
    GraphPanel,
} from '../../../components';
import {
    graphRunDropdown,
    GRAPH_EVENT_TYPES,
    libraryAssetType,
} from '../../../consts';

import { MainLayout } from '../../../layouts';
import { IRootState } from '../../../models';
import {
    selectGraphPanel,
    selectGraphRunInspectorConfig,
    selectLayoutConfig,
    selectSelectedGraph,
} from '../../../store/selector';
import * as fromUiAction from '../../../store/actions/ui.action';
import * as fromProjectAction from '../../../store/actions/project.action';

interface DispatchFromProps {
    updateLayoutConfig: typeof fromUiAction.updateLayoutConfig;
    getSelectedGraph: typeof fromProjectAction.getSelectedGraph;
    setNewNode: typeof fromProjectAction.setNewNode;
    setGraphEvent: typeof fromProjectAction.setGraphEvent;
    setSelectedNode: typeof fromProjectAction.setSelectedNode;
}

interface StateFromProps {
    graphPanel: ReturnType<typeof selectGraphPanel>;
    layoutConfig: ReturnType<typeof selectLayoutConfig>;
    selectedGraph: ReturnType<typeof selectSelectedGraph>;
    graphRunInspectorConfig: ReturnType<typeof selectGraphRunInspectorConfig>;
}

interface OwnProps { }

type Props = OwnProps &
    StateFromProps &
    DispatchFromProps &
    RouteComponentProps;

const GraphBuilderPage: FunctionComponent<Props> = props => {
    const {
        graphPanel,
        selectedGraph,
        graphRunInspectorConfig,
        updateLayoutConfig,
        getSelectedGraph,
        // setNewNode,
        setGraphEvent,
        setSelectedNode,
    } = props;

    const [mousePos, setMousePos] = useState<{ x: Number; y: Number }>({
        x: 0,
        y: 0,
    });

    const onDragEnd = (result: DropResult): void => {
        const { x, y } = mousePos;

        if (result.destination?.droppableId === 'graph-builder') {
            setSelectedNode({ x, y });
            setGraphEvent({ eventType: GRAPH_EVENT_TYPES.ADD_NODE, data: {} });
        }

        return;
    };

    const onMouseUp = () => {
        setMousePos(graphPanel.view.area.mouse);
    };

    useEffect(() => {
        updateLayoutConfig({
            titleBar: {
                title: 'Black-Scholes with Data Partition',
                versionControl: true,
                shareControl: true,
                downloadControl: false,
                saveControl: true,
                runsControl: true,
                editControl: true,
                compileControl: false,
                refreshControl: false,
                clearAllControl: false,
            },
            libraryAssets: {
                visible: true,
                selectedTab: libraryAssetType.variable,
            },
            libraryAssetsInspector: false,
        });

        const selectedGraphId = Number(localStorage.getItem('selectedGraphId'));
        if (selectedGraphId) {
            getSelectedGraph(selectedGraphId);
        }
    }, []); // eslint-disable-line

    return (
        <MainLayout>
            <DragDropContext onDragEnd={onDragEnd}>
                <div className="page-content-wrapper">
                    <div className="main-section" onMouseUp={onMouseUp}>
                        <GraphPanel initialGraph={selectedGraph}></GraphPanel>
                    </div>

                    <div className="library-assets-wrapper">
                        <LibraryAssetsSidebar></LibraryAssetsSidebar>
                    </div>

                    {graphRunInspectorConfig.visible &&
                        (graphRunInspectorConfig.selectedInspector ===
                            graphRunDropdown.children[2].id ? (
                                <div className="graph-runs-wrapper">
                                    <GraphNewRunInspector></GraphNewRunInspector>
                                </div>
                            ) : (
                                <div className="graph-runs-wrapper">
                                    <GraphRunsInspector></GraphRunsInspector>
                                </div>
                            ))}
                </div>
            </DragDropContext>
        </MainLayout>
    );
};

function mapStateToProps(state: IRootState): StateFromProps {
    return {
        graphPanel: selectGraphPanel(state),
        layoutConfig: selectLayoutConfig(state),
        selectedGraph: selectSelectedGraph(state),
        graphRunInspectorConfig: selectGraphRunInspectorConfig(state),
    };
}

function mapDispatchToProps(dispatch: Dispatch): DispatchFromProps {
    return {
        updateLayoutConfig: (payload: any) =>
            dispatch(fromUiAction.updateLayoutConfig(payload)),
        getSelectedGraph: (payload: number) =>
            dispatch(fromProjectAction.getSelectedGraph(payload)),
        setNewNode: (payload: any) =>
            dispatch(fromProjectAction.setNewNode(payload)),
        setGraphEvent: (payload: any) =>
            dispatch(fromProjectAction.setGraphEvent(payload)),
        setSelectedNode: (payload: any) =>
            dispatch(fromProjectAction.setSelectedNode(payload)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(GraphBuilderPage));

import React, { FunctionComponent, useEffect, useState, useRef } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import Rete from 'rete';
import ReactRenderPlugin from 'rete-react-render-plugin';
import ConnectionPlugin from 'rete-connection-plugin';
import AreaPlugin from 'rete-area-plugin';
import {
    Droppable,
    DroppableProvided,
    DroppableStateSnapshot,
} from 'react-beautiful-dnd';

import { GraphNode } from '../graph-node';
import {
    IGraphViewModel,
    INodeConnectionViewModel,
    INodeInstanceViewModel,
    IRootState,
} from '../../../models';
import { getNodeIndexByPId } from '../../../utils';
import * as fromProjectAction from '../../../store/actions/project.action';
import * as fromUiAction from '../../../store/actions/ui.action';
import {
    selectNewNode,
    selectGraphEvent,
    selectGraphPanel,
    selectSelectedNode,
} from '../../../store/selector';
import {
    GRAPH_EVENT_TYPES,
    GRAPH_STATUS,
    nodeInstanceTypes,
} from '../../../consts';

interface DispatchFromProps {
    setNewNode: typeof fromProjectAction.setNewNode;
    setGraphPanel: typeof fromUiAction.setGraphPanel;
}

interface StateFromProps {
    newNode: ReturnType<typeof selectNewNode>;
    graphEvent: ReturnType<typeof selectGraphEvent>;
    graphPanel: ReturnType<typeof selectGraphPanel>;
    selectedNode: ReturnType<typeof selectSelectedNode>;
}

interface OwnProps {
    initialGraph: IGraphViewModel;
}

type Props = OwnProps &
    StateFromProps &
    DispatchFromProps &
    RouteComponentProps;

const GraphPanel: FunctionComponent<Props> = props => {
    const {
        initialGraph,
        // newNode,
        graphEvent,
        graphPanel,
        // setNewNode,
        selectedNode,
        setGraphPanel,
    } = props;
    const graphContainerRef = useRef(null);
    // const [graphPanel, setGraphPanel] = useState<any | undefined>(undefined);
    const [graphEngine, setGraphEngine] = useState<any | undefined>(undefined); // eslint-disable-line
    const [graphComponents, setGraphComponents] = useState<any | undefined>(
        undefined
    );
    const [graphStatus, setGraphStatus] = useState<string>(
        GRAPH_STATUS.NO_INIT
    );

    const initGraphPanel = () => {
        const container = (graphContainerRef.current as unknown) as HTMLDivElement;
        const gComponents = [new GraphNode()];
        const gPanel = new Rete.NodeEditor('demo@0.1.0', container);
        const gEngine = new Rete.Engine('demo@0.1.0');

        gPanel.use(ConnectionPlugin);
        gPanel.use(ReactRenderPlugin);

        setGraphPanel(gPanel);
        setGraphEngine(gEngine);
        setGraphComponents(gComponents);

        gComponents.map(c => {
            gPanel.register(c);
            gEngine.register(c);

            return true;
        });
    };

    const addNode = async (nodeInstance: INodeInstanceViewModel) => {
        const node = await graphComponents[0].createNode(nodeInstance);

        node.position = [nodeInstance.x, nodeInstance.y];

        console.log('node = ', node);

        await graphPanel.addNode(node);
    };

    const drawNodes = async (nodeInstances: Array<INodeInstanceViewModel>) => {
        for (const nodeInstance of nodeInstances) {
            console.log('nodeInstance = ', nodeInstance);
            await addNode(nodeInstance);
        }
    };

    const addConnection = async (
        nodeConnection: INodeConnectionViewModel,
        nodeInstances: Array<INodeInstanceViewModel>
    ) => {
        const { inputPId, outputPId } = nodeConnection;
        const inputNodeIndex = getNodeIndexByPId(nodeInstances, inputPId);
        const outputNodeIndex = getNodeIndexByPId(nodeInstances, outputPId);

        if (
            graphPanel.nodes[inputNodeIndex] &&
            graphPanel.nodes[outputNodeIndex]
        ) {
            const inputSocket = graphPanel.nodes[inputNodeIndex].inputs.get(
                inputPId
            );
            const outputSocket = graphPanel.nodes[outputNodeIndex].outputs.get(
                outputPId
            );

            graphPanel.connect(outputSocket, inputSocket);
        }
    };

    const drawConnections = async (
        nodeInstances: Array<INodeInstanceViewModel>,
        nodeConnections: Array<INodeConnectionViewModel>
    ) => {
        for (const nodeConnection of nodeConnections) {
            addConnection(nodeConnection, nodeInstances);
        }
    };

    const resetGraphPanel = () => {
        graphPanel.view.resize();
        graphPanel.trigger('process');
        AreaPlugin.zoomAt(graphPanel, graphPanel.nodes);
    };

    const drawGraph = async (graph: IGraphViewModel) => {
        await drawNodes(graph.nodeInstances);
        await drawConnections(graph.nodeInstances, graph.nodeConnections);

        resetGraphPanel();
    };

    useEffect(() => {
        switch (graphStatus) {
            case GRAPH_STATUS.NO_INIT: {
                initGraphPanel();
                setGraphStatus(GRAPH_STATUS.EMPTY);

                break;
            }

            case GRAPH_STATUS.EMPTY: {
                drawGraph(initialGraph);
                setGraphStatus(GRAPH_STATUS.READY);

                break;
            }

            case GRAPH_STATUS.READY: {
                switch (graphEvent.eventType) {
                    case GRAPH_EVENT_TYPES.ADD_NODE: {
                        addNode(selectedNode);

                        break;
                    }
                }

                break;
            }
        }
    }, [initialGraph, graphEvent]); // eslint-disable-line

    return (
        <Droppable droppableId={'graph-builder'}>
            {(
                provided: DroppableProvided,
                snapshot: DroppableStateSnapshot
            ) => {
                return (
                    <div
                        ref={provided.innerRef}
                        style={{ width: '100%', height: '100%' }}
                        {...provided.droppableProps}
                    >
                        <div
                            id="graph-container"
                            style={{ width: '100%', height: '100%' }}
                            ref={graphContainerRef}
                        ></div>
                    </div>
                );
            }}
        </Droppable>
    );
};

function mapStateToProps(state: IRootState): StateFromProps {
    return {
        newNode: selectNewNode(state),
        graphEvent: selectGraphEvent(state),
        graphPanel: selectGraphPanel(state),
        selectedNode: selectSelectedNode(state),
    };
}

function mapDispatchToProps(dispatch: Dispatch): DispatchFromProps {
    return {
        setNewNode: (payload: any) =>
            dispatch(fromProjectAction.setNewNode(payload)),
        setGraphPanel: (payload: any) =>
            dispatch(fromUiAction.setGraphPanel(payload)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(GraphPanel));

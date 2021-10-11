import React from 'react';

import './index.scss';
import Control from './Control';
import Socket from './Socket';
import { generateNodeColor } from '../../../utils';
import { nodeInstanceTypes } from '../../../consts';

interface INodeProps {
    node?: any;
    bindSocket?: any;
    bindControl?: any;
}

interface INodeState {
    outputs?: any;
    controls?: any;
    inputs?: any;
    selected?: any;
    invalid?: boolean;
}

export default class Node extends React.Component<INodeProps, INodeState> {
    state: INodeState = {};

    static getDerivedStateFromProps(obj: any) {
        return {
            outputs: Array.from(obj.node.outputs.values()),
            controls: Array.from(obj.node.controls.values()),
            inputs: Array.from(obj.node.inputs.values()),
            selected: obj.editor.selected.contains(obj.node) ? 'selected' : '',
            invalid: true,
        };
    }

    render() {
        const { node, bindSocket, bindControl } = this.props;
        const { outputs, inputs, selected, invalid } = this.state;
        const data = node.data;

        return (
            <div
                className={`tc--${generateNodeColor(
                    data.discriminator
                )} graph-node
                    ${
                        inputs.length && outputs.length
                            ? 'graph-node--large'
                            : ''
                    }
                    ${selected ? 'graph-node--selected' : ''} ${
                    invalid ? 'graph-node--invalid' : ''
                }`}
            >
                <div className="graph-node__head">
                    <button
                        type="button"
                        className="graph-node__action graph-node__action--delete"
                    ></button>
                    <div className="graph-node__action graph-node__action--divider"></div>

                    {data.discriminator ===
                        nodeInstanceTypes.NodeInstanceDataSource && (
                        <>
                            <button
                                type="button"
                                className="graph-node__action graph-node__action--left"
                            ></button>
                            <button
                                type="button"
                                className="graph-node__action graph-node__action--right"
                            ></button>
                        </>
                    )}

                    {data.discriminator ===
                        nodeInstanceTypes.NodeInstanceIterator && (
                        <button
                            type="button"
                            className="graph-node__action graph-node__action--edit"
                        ></button>
                    )}

                    {(data.discriminator ===
                        nodeInstanceTypes.NodeInstanceIterator ||
                        data.discriminator ===
                            nodeInstanceTypes.NodeInstanceSubgraph) && (
                        <button
                            type="button"
                            className="graph-node__action graph-node__action--info"
                        ></button>
                    )}

                    <div className="graph-node__title h2">
                        {data.name} <span>{data.version}</span>
                    </div>
                </div>

                {data.discriminator !==
                    nodeInstanceTypes.NodeInstanceIterator && (
                    <div className="graph-node__cont">
                        <div className="grid-row grid-row--nog">
                            <div className="grid-col grid-col--6">
                                {inputs.map((input: any) => (
                                    <div
                                        className="input graph-node__input"
                                        key={input.key}
                                    >
                                        <Socket
                                            type="input"
                                            socket={input.socket}
                                            io={input}
                                            innerRef={bindSocket}
                                        />

                                        {!input.showControl() && (
                                            <div className="input-title">
                                                {input.name}
                                                <span>1.0</span>
                                            </div>
                                        )}

                                        {input.showControl() && (
                                            <Control
                                                className="input-control"
                                                control={input.control}
                                                innerRef={bindControl}
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="grid-col grid-col--6">
                                {outputs.map((output: any) => (
                                    <div
                                        className="graph-node__output"
                                        key={output.key}
                                    >
                                        <div className="output-title">
                                            {output.name}
                                            <span>1.0</span>
                                        </div>
                                        <Socket
                                            type="output"
                                            socket={output.socket}
                                            io={output}
                                            innerRef={bindSocket}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <hr className="graph-node__hr" />

                        <div className="graph-node__stats tc--error">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Data Points:</td>
                                        <td>1,000,000</td>
                                    </tr>
                                    <tr>
                                        <td>Per Data Point:</td>
                                        <td>N/A</td>
                                    </tr>
                                    <tr>
                                        <td>Per Node:</td>
                                        <td>N/A</td>
                                    </tr>
                                    <tr>
                                        <td>Percentage:</td>
                                        <td className="tc--error">Failed</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {data.discriminator ===
                    nodeInstanceTypes.NodeInstanceIterator && (
                    <div className="graph-node__cont">
                        <div className="graph-node__group">
                            <div className="grid-row grid-row--nog">
                                <div className="grid-col grid-col--6">
                                    {inputs.map((input: any) => (
                                        <div
                                            className="input graph-node__input"
                                            key={input.key}
                                        >
                                            <Socket
                                                type="input"
                                                socket={input.socket}
                                                io={input}
                                                innerRef={bindSocket}
                                            />

                                            {!input.showControl() && (
                                                <div className="input-title">
                                                    {input.name}
                                                    <span>1.0</span>
                                                </div>
                                            )}

                                            {input.showControl() && (
                                                <Control
                                                    className="input-control"
                                                    control={input.control}
                                                    innerRef={bindControl}
                                                />
                                            )}
                                        </div>
                                    ))}
                                </div>
                                <div className="grid-col grid-col--6">
                                    {outputs.map((output: any) => (
                                        <div
                                            className="graph-node__output"
                                            key={output.key}
                                        >
                                            <div className="output-title">
                                                {output.name}
                                                <span>1.0</span>
                                            </div>
                                            <Socket
                                                type="output"
                                                socket={output.socket}
                                                io={output}
                                                innerRef={bindSocket}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="graph-node__group graph-node__group--input tc--purple">
                            <div className="grid-row grid-row--nog">
                                <div className="grid-col grid-col--6">
                                    <div className="graph-node__input">
                                        <div className="input-title">
                                            Tolerance <span>2.0</span>
                                        </div>
                                    </div>
                                    <div className="graph-node__input">
                                        <div className="input-title">
                                            Max Iterations <span>2.0</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid-col grid-col--6"></div>
                            </div>
                        </div>

                        <div className="graph-node__group graph-node__group--top">
                            <div className="graph-node__input">
                                <div className="input-title">
                                    Control IV <span>2.0</span>
                                </div>
                            </div>
                            <div className="graph-node__input">
                                <div className="input-title">
                                    Exit Reason Interim Out <span>2.0</span>
                                </div>
                            </div>
                        </div>

                        <div className="graph-node__link"></div>

                        <div className="graph-node__group graph-node__group--bottom">
                            <div className="graph-node__output">
                                <div className="input-title">
                                    Objective Value <span>2.0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

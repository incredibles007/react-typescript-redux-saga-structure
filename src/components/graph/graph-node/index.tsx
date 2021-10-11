import Rete from 'rete';
import Node from './Node';
const numSocket = new Rete.Socket('Number value');

export class GraphNode extends Rete.Component {
    constructor() {
        super('Node');
        this.data = { component: Node };
    }

    builder(node: any) {
        const { inputs, outputs } = node.data;

        if (inputs && inputs.length) {
            inputs.forEach(
                (e: { pid: string; label: string; isDeleted: boolean }) => {
                    if (e.isDeleted) return;
                    const input = new Rete.Input(e.pid, e.label, numSocket);
                    node.addInput(input);
                }
            );
        }

        if (outputs && outputs.length) {
            outputs.forEach(
                (e: { pid: string; label: string; isDeleted: boolean }) => {
                    if (e.isDeleted) return;
                    const output = new Rete.Output(e.pid, e.label, numSocket);
                    node.addOutput(output);
                }
            );
        }

        return node;
    }

    worker(node: any, inputs: any, outputs: any) {}
}

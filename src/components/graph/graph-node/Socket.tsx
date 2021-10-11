import React from 'react';

interface ISocketProps {
    innerRef?: any;
    type?: any;
    socket?: any;
    io?: any;
}

export default class Socket extends React.Component<ISocketProps> {
    createRef = (el: any) => {
        const { innerRef, type, io } = this.props;
        el && innerRef(el, type, io);
    };

    render() {
        const { socket, type } = this.props;

        return (
            <div
                className={`socket graph-node__socket ${type}`}
                title={socket.name}
                ref={el => this.createRef(el)}
            />
        );
    }
}

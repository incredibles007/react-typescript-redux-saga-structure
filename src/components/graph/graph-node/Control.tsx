import React from 'react';

interface IControlProps {
    innerRef?: any;
    control?: any;
    className?: string;
}

export default class Control extends React.Component<IControlProps> {
    createRef = (el: any) => {
        const { innerRef, control } = this.props;

        el && innerRef(el, control);
    };

    render() {
        const { className, control } = this.props;

        return (
            <div
                className={className}
                title={control.key}
                ref={this.createRef}
            />
        );
    }
}

import React from 'react';

import './index.scss';

class AuthLayout extends React.Component {
    render() {
        return <div className="auth-layout">{this.props.children}</div>;
    }
}

export default AuthLayout;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import './index.scss';
import AuthPages from './auth-pages';
import UnAuthPages from './unauth-pages';
import { IRootState } from '../models';
import { selectIsLoggedIn } from '../store/selector';

interface DispatchFromProps {}

interface StateFromProps {
    isLoggedIn: ReturnType<typeof selectIsLoggedIn>;
}

interface OwnProps {}

type Props = OwnProps & StateFromProps & DispatchFromProps;

class Pages extends Component<Props> {
    render() {
        const { isLoggedIn } = this.props;

        return isLoggedIn ? <AuthPages /> : <UnAuthPages />;
    }
}

function mapStateToProps(state: IRootState): StateFromProps {
    return {
        isLoggedIn: selectIsLoggedIn(state),
    };
}

function mapDispatchToProps(dispatch: Dispatch): DispatchFromProps {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Pages);

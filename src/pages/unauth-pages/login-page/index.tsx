import React from 'react';
import { Dispatch } from 'redux';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './index.scss';
import { Logo } from '../../../components';
import { AuthLayout } from '../../../layouts';
import { IRootState, IUser, ILoginUser, ILoginError } from '../../../models';
import {
    selectUser,
    selectIsLoggedIn,
    selectErrorText,
} from '../../../store/selector';
import * as fromUserAction from '../../../store/actions/user.action';

const validEmailRegex = RegExp(
    // eslint-disable-next-line
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

interface DispatchFromProps {
    login: typeof fromUserAction.login;
    loginFailed: typeof fromUserAction.loginFailed;
}

interface StateFromProps {
    user?: IUser;
    isLoggedIn?: boolean;
    errorText?: string;
}

interface OwnProps {}

type Props = OwnProps &
    StateFromProps &
    DispatchFromProps &
    RouteComponentProps;

interface State {
    email: string;
    password: string;
    errors?: {
        email: string;
        password: string;
    };
}

class LoginPage extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        };
    }

    componentDidUpdate(prevProps: Props, prevState: State) {
        if (!prevProps.user && this.props.user) {
            this.props.history.push('/graph-builder');
        }
    }

    render() {
        const { errorText } = this.props;
        const { email, password, errors } = this.state;

        return (
            <AuthLayout>
                <div className="login">
                    <Logo />

                    <form
                        className="login__form"
                        onSubmit={e => this.handleLogin(e)}
                    >
                        {!!errors?.email ? (
                            <div className="alert alert--error login__alert">
                                <svg width="12" height="12">
                                    <path
                                        fillRule="evenodd"
                                        d="M6 0a6 6 0 100 12A6 6 0 006 0zm0 9.83c-.469 0-.79-.362-.79-.83 0-.482.334-.83.79-.83.482 0 .79.348.79.83 0 .469-.308.83-.79.83zm.311-3.17c-.12.408-.496.415-.621 0-.145-.477-.659-2.292-.659-3.47 0-1.556 1.946-1.563 1.946 0 0 1.185-.541 3.046-.666 3.47z"
                                    ></path>
                                </svg>
                                {errors?.email}
                            </div>
                        ) : !!errors?.password ? (
                            <div className="alert alert--error login__alert">
                                <svg width="12" height="12">
                                    <path
                                        fillRule="evenodd"
                                        d="M6 0a6 6 0 100 12A6 6 0 006 0zm0 9.83c-.469 0-.79-.362-.79-.83 0-.482.334-.83.79-.83.482 0 .79.348.79.83 0 .469-.308.83-.79.83zm.311-3.17c-.12.408-.496.415-.621 0-.145-.477-.659-2.292-.659-3.47 0-1.556 1.946-1.563 1.946 0 0 1.185-.541 3.046-.666 3.47z"
                                    ></path>
                                </svg>
                                {errors?.password}
                            </div>
                        ) : (
                            !!errorText && (
                                <div className="alert alert--error login__alert">
                                    <svg width="12" height="12">
                                        <path
                                            fillRule="evenodd"
                                            d="M6 0a6 6 0 100 12A6 6 0 006 0zm0 9.83c-.469 0-.79-.362-.79-.83 0-.482.334-.83.79-.83.482 0 .79.348.79.83 0 .469-.308.83-.79.83zm.311-3.17c-.12.408-.496.415-.621 0-.145-.477-.659-2.292-.659-3.47 0-1.556 1.946-1.563 1.946 0 0 1.185-.541 3.046-.666 3.47z"
                                        ></path>
                                    </svg>
                                    {errorText}
                                </div>
                            )
                        )}

                        <label className="form-label login__label">
                            Email Address
                        </label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Enter your email address"
                            className={`form-input form-input--large login__input ${
                                errors?.email ? 'form-input--invalid' : ''
                            }`}
                            value={email}
                            onChange={e => this.handleChange(e)}
                            onBlur={e => this.handleBlur(e)}
                            onFocus={e => this.handleFocus(e)}
                        />

                        <label className="form-label login__label">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            className={`form-input form-input--large login__input ${
                                errors?.password ? 'form-input--invalid' : ''
                            }`}
                            value={password}
                            onChange={e => this.handleChange(e)}
                            onBlur={e => this.handleBlur(e)}
                            onFocus={e => this.handleFocus(e)}
                        />

                        <div className="grid-row grid-row--jcb">
                            <div className="grid-col grid-col--auto">
                                <div className="form-checkbox">
                                    <input
                                        type="checkbox"
                                        name="checkbox"
                                        className="form-checkbox__input"
                                    />
                                    <label className="form-checkbox__label">
                                        Remember Me
                                    </label>
                                    <span className="form-checkbox__icon"></span>
                                </div>
                            </div>

                            <div className="grid-col grid-col--auto">
                                <Link
                                    to="/auth/reset-password"
                                    className="text-link tc--light"
                                >
                                    Forgot Password
                                </Link>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="mt--250 button button--large button--primary"
                            disabled={
                                !!(errors?.email || errors?.password) ||
                                !(email && password)
                            }
                        >
                            Log In
                        </button>
                    </form>
                </div>
            </AuthLayout>
        );
    }

    handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const { email, password } = this.state;
        const { login } = this.props;

        login({ email, password });
    };

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();

        const { name, value } = event.target;

        this.setState({ ...this.state, [name]: value });
    };

    handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();

        const { name, value } = event.target;
        let errors = this.state.errors
            ? this.state.errors
            : { email: '', password: '' };

        switch (name) {
            case 'email': {
                errors.email = validEmailRegex.test(value)
                    ? ''
                    : 'Email is not valid!';
                break;
            }

            case 'password': {
                errors.password =
                    value.length < 6
                        ? 'Password must be at least 6 characters long!'
                        : '';

                break;
            }

            default:
                break;
        }

        this.setState({ ...this.state, [name]: value, errors });
    };

    handleFocus = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();

        const { loginFailed } = this.props;
        const { errors } = this.state;
        const { name } = event.target;

        loginFailed({});
        this.setState({
            errors: !!errors ? { ...errors, [name]: '' } : undefined,
        });
    };
}

function mapStateToProps(state: IRootState): StateFromProps {
    return {
        user: selectUser(state),
        isLoggedIn: selectIsLoggedIn(state),
        errorText: selectErrorText(state),
    };
}

function mapDispatchToProps(dispatch: Dispatch): DispatchFromProps {
    return {
        login: (payload: ILoginUser) => dispatch(fromUserAction.login(payload)),
        loginFailed: (payload: ILoginError) =>
            dispatch(fromUserAction.loginFailed(payload)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(LoginPage));

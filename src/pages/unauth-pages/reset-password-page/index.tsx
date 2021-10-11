import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';
import { Logo } from '../../../components';
import { AuthLayout } from '../../../layouts';

class ResetPasswordPage extends React.Component {
    render() {
        return (
            <AuthLayout>
                <div className="login">
                    <Logo />

                    <div style={{ display: 'none' }}>
                        <img
                            src={require('../../../assets/images/login/check@2x.png')}
                            width="39"
                            height="39"
                            alt=""
                        />
                        <h1 className="mt--050">Email Sent</h1>
                        <p className="mt--050 login__subtitle">
                            Please follow the instructions in the email we sent
                            to you to reset your password. If you don’t see the
                            email in your inbox, make sure to check the Spam
                            folder.
                        </p>
                    </div>

                    <h1>Reset Password</h1>
                    <p className="mt--050 login__subtitle">
                        Please enter the email address you use to log in to your
                        account. We will send you an email with instructions on
                        how to reset your password.
                    </p>

                    <form action="#" className="login__form">
                        <label className="form-label login__label">
                            Email Address
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your email address"
                            className="form-input form-input--large login__input"
                        />

                        <div className="mt--150 grid-row">
                            <div className="grid-col">
                                <Link
                                    to="/auth/login"
                                    className="mt--100 button button--large"
                                >
                                    Back to Log In
                                </Link>
                            </div>

                            <div className="grid-col">
                                <button
                                    type="submit"
                                    className="mt--100 button button--large button--primary"
                                    onClick={e => {
                                        e.preventDefault();
                                        this.onSendEmail();
                                    }}
                                >
                                    Send Email
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </AuthLayout>
        );
    }

    onSendEmail = () => {};
}

export default ResetPasswordPage;

import React, { FunctionComponent } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import CreateNewPasswordPage from './create-new-password-page';
import LoginPage from './login-page';
import ResetPasswordPage from './reset-password-page';

const UnAuthPages: FunctionComponent = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route
                    exact
                    path="/auth/create-new-password"
                    component={CreateNewPasswordPage}
                />
                <Route exact path="/auth/login" component={LoginPage} />
                <Route
                    exact
                    path="/auth/reset-password"
                    component={ResetPasswordPage}
                />
                <Redirect to="/auth/login"></Redirect>
            </Switch>
        </React.Fragment>
    );
};

export default UnAuthPages;

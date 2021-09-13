import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { connect } from 'react-redux';
import BaseRouter from './route';
import 'antd/dist/antd.css';
import * as actions from './store/actions/auth';
import BlankLayout from './layout/blanklayout';
import MainLayout from './layout/mainlayout';


class App extends Component {

    componentDidMount() {
        this.props.onTryAutoSignup();
    }

    render() {
        return (
            <Router>
                <Switch>
                    
                    <Route exact path="/signin" render={() => (
                        <BlankLayout {...this.props}>
                            <BaseRouter />
                        </BlankLayout>
                    )} />
                    <Route exact path="/signup" render={() => (
                        <BlankLayout {...this.props}>
                            <BaseRouter />
                        </BlankLayout>
                    )} />
                    <Route path="*" render={() => (
                        <MainLayout {...this.props}>
                            <BaseRouter />
                        </MainLayout>
                    )} />
                </Switch>
            </Router>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.token,
        isAuthenticated: state.token !== null,
        loading: state.loading,
        error: state.error,
        change: state.change,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignup: () => dispatch(actions.authCheckState()),
        logout: () => dispatch(actions.logout()),
        updateChange: () => dispatch(actions.updateChange()),
        onAuth: (username, password) => dispatch(actions.authLogin(username, password)),
        authSignup: (fullname, username, email, password, gender, classs, goodAt=[], badAt=[]) => dispatch(actions.authSignup(fullname, username, email, password, gender, classs, goodAt=[], badAt=[])),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
import React from "react";
import { Route, Switch } from "react-router-dom";
import SignIn from "./containers/signin";
import SignUp from "./containers/signup";
import DashBoard from "./containers/dashboard";
import Profile from "./containers/profile";
import Chat from "./containers/chat";

const BaseRouter = () => (
    <Switch>
        <Route exact path="/" component={DashBoard} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/chat" component={Chat} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
    </Switch>
);

export default BaseRouter;
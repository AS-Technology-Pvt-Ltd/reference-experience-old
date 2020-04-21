/**
 * Name : Parshant Nagpal
 * FileName: routes.web.js
 * Description : contains all routes that we are used inside react router
 * Date : 12 December 2018
 */
import React, {Component} from "react";
import {Router, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import history from "../helpers/history";
import {frontLayout, dashboardLayout} from "./Layouts";

import AppRoute from "./AppRoute";
import SignIn from "./Login";
import NotFound from "../container/Errors/NotFound";
import Dashboard from "../container/dashboard/Screens";

import Login from "../container/auth/Login";

class Routes extends Component {
  componentDidMount() {
    let {isLoggedIn} = this.props,
      {pathname} = history.location;
    if (isLoggedIn) {
      // // Setting the current side menu selected in reducer
      // this.props.appAction.setCurrentSideMenuRoute(
      //   pathname.substring(1, pathname.length)
      // );
    }
    console.log("isLoggedInisLoggedIn", isLoggedIn);
  }
  render() {
    let {isLoggedIn, ForceChangePassword} = this.props;

    return (
      <Router history={history}>
        <Switch>
          <AppRoute
            exact
            path="/"
            component={SignIn}
            layout={frontLayout}
            isLogin={isLoggedIn}
            ForceChangePassword={ForceChangePassword}
          />
          <AppRoute
            exact
            path="/Login"
            component={Login}
            layout={frontLayout}
            isLogin={isLoggedIn}
            ForceChangePassword={ForceChangePassword}
          />

          <AppRoute
            exact
            path="/Dashboard"
            component={Dashboard}
            layout={frontLayout}
            isLogin={isLoggedIn}
            ForceChangePassword={ForceChangePassword}
          />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}
const mapStateToProps = state => ({
  isLoggedIn: state.user.isLoggedIn,
  ForceChangePassword: state.user.ForceChangePassword,
});
const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Routes);

/*
 * @file: AppRoute.js
 * @description: Defined a component of routes
 * @date: 9 Jan 2019
 * @author: Parshant Nagpal
 */

/************ React Pages according to layouts  *****************/

import React from "react";
import {Route, Redirect} from "react-router-dom";

const AppRoute = ({
  component: Component,
  layout: Layout,
  isLogin: isLogin,
  ForceChangePassword: ForceChangePassword,
  ...rest
}) => {
  console.log(
    "isLoginisLoginisLoginisLogin",
    isLogin,
    ForceChangePassword,
    Component,
  );
  return (
    <Route
      {...rest}
      render={props => {
        if (!isLogin && props.location.pathname == "/Dashboard") {
          return (
            <Redirect
              to={{
                pathname: "/Login",
                state: {from: props.location},
              }}
            />
          );
        } else if (
          isLogin &&
          (props.location.pathname === "/" ||
            props.location.pathname === "/Login")
        ) {
          console.log("isLoginisLoginisLoginisLogin", isLogin);
          return (
            <Redirect
              to={{
                pathname: "/Dashboard",
                state: {from: props.location},
              }}
            />
          );
        }
        return (
          <Layout>
            <Component {...props} isLogin={isLogin} />
          </Layout>
        );
      }}
    />
  );
};

export default AppRoute;

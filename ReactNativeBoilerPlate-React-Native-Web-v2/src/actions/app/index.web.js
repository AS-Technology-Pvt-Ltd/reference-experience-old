/*
FileName: index.js
Author :Parshant Nagpal
Description: Conatins all navigation actions for App
Date : 13 december 2018
*/

import history from "../../helpers/history";
import * as Types from "../../actionTypes";
// eslint-disable-next-line
export const pushToParticularScreen = screen => {
  return () => {
    history.push(`/${screen}`);
  };
};

export const goBack = () => {
  return () => {
    history.goBack();
  };
};

export const pop = () => {
  return () => {
    history.goBack();
  };
};
export const goAuth = () => {
  return () => {
    history.replace("/");
  };
};
//eslint-disable-next-line
export const loginUser = (username, password, componentId) => {
  return dispatch => {
    dispatch({type: Types.LOGIN});
  };
};
//eslint-disable-next-line
export const logOut = (username, password, componentId) => {
  return dispatch => {
    dispatch({type: Types.LOGOUT});
  };
};
/**
 * Selecting the Current Sidemenu Current Route
 */
export const setCurrentSideMenuRoute = screen => {
  return dispatch => {
    dispatch({
      type: Types.CURRENT_SIDEMENU_ROUTE,
      payload: {screen},
    });
  };
};
/* eslint-disable  */
export const setScrenStack = (componentId = null, screen, visible) => {
  return dispatch => {
    dispatch({type: Types.SET_SCREEN, payload: screen});
    history.push(`/${screen}`);
  };
};

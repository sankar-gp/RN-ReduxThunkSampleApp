'use strict';

import * as Actions from "../actions/ActionTypes";

let initialState = { 
  showUserLoading: true,
  loginData: undefined,
};

export const loginState = (state = initialState, action) => {
  const { type,loginData} = action;
  switch (type) {
    case Actions.LOADING_FULL:
      return { ...state, showUserLoading: true};
      case Actions.LOADING_COMPLETED:
      return { ...state, showUserLoading: false};
    case Actions.LOGIN_RESPONSE:
      return { ...state, loginData};
    default:
      return state;
  }
};
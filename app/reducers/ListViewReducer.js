'use strict';

import * as Actions from "../actions/ActionTypes";

let initialState = { 
  showUserLoading: true,
  data: undefined,
};

export const listViewState = (state = initialState, action) => {
  const { type,data} = action;
  switch (type) {
    case Actions.LOADING_FULL:
      return { ...state, showUserLoading: true};
      case Actions.LOADING_COMPLETED:
      return { ...state, showUserLoading: false};
    case Actions.LIST_RESPONSE:
      return { ...state, data};
    default:
      return state;
  }
};
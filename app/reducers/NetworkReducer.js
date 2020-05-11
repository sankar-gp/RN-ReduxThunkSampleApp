"use strict";
import * as Actions from "../actions/ActionTypes.js";

let initialState = {
  isNetworkAvailable: undefined,
};

export const networkState = (state = initialState, action) => {
  const { type, isNetworkAvailable } = action;
  switch (type) {
    case Actions.NETWORK_STATUS_CHANGED:
      return { ...state, isNetworkAvailable };
    default:
      return state;
  }
};

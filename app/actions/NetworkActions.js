"use strict";
import NetInfo from "@react-native-community/netinfo";

import * as Actions from "./ActionTypes.js";

export const checkNetworkConnection1 = () => {
  return (dispatch) => {
    NetInfo.fetch().then((state) => {
      console.log("Connection type", state.type);
      console.log("Is connected?", state.isConnected);

      dispatch({
        type: Actions.NETWORK_STATUS_CHANGED,
        isNetworkAvailable: state.isConnected,
      });
    });
  };
};

export const checkNetworkConnection = () => {
  return (dispatch) => {
    const unsubscribe = NetInfo.addEventListener(state => {
      console.log("Connection type", state.type);
      console.log("Is connected?", state.isConnected);

      dispatch({
        type: Actions.NETWORK_STATUS_CHANGED,
        isNetworkAvailable: state.isConnected,
      });
    });
  };
};

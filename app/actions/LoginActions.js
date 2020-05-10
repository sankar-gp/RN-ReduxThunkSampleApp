"use strict";
import { Alert } from "react-native";
import { invokeGetWebService } from "../util/HttpClient";
const _ = require("lodash");
import { ACTIONS,STRINGS } from "../util/Constants";

export const invokeUserDataWebservice = () => {
  return (dispatch) => {
    dispatch({
      type: ACTIONS.RESET_ALL_LOADING,
    });

    invokeGetWebService("/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING")
      .then((val) => {
        console.log("WS", val);
        if (_.has(val, "statusCode")) {
          if (val.statusCode == "0" && _.has(val, "data")) {
            dispatch({
              type: ACTIONS.UPDATE_USER_DATA,
              userInfo: val.data,
            });
            dispatch({
              type: ACTIONS.USER_DATA_LOADED,
            });
            dispatch(invokeTaskDataWebservice());
          } else {
            Alert.alert("Failed", STRINGS.REQ_FAILED), [{ text: "Ok" }];
          }
        } else {
          Alert.alert("Failed", STRINGS.REQ_FAILED), [{ text: "Ok" }];
        }
      })
      .catch((error) => {
        Alert.alert("Failed", error.message), [{ text: "Ok" }];
      });
  };
};

/**
 * Invoke task webservice to get task information
 */
export const invokeTaskDataWebservice = () => {
  return (dispatch) => {
    dispatch({
      type: ACTIONS.RESET_REFRESH_LOADING,
    });

    invokeGetWebService("5b97533d30000070000bd533")
      .then((val) => {
        if (_.has(val, "message")) {
          if (val.message === "Success" && _.has(val, "data")) {
            dispatch({
              type: ACTIONS.UPDATE_TASK_DATA,
              taskArray: val.data,
            });
            dispatch({
              type: ACTIONS.TASK_DATA_LOADED,
            });
            dispatch(invokePostDataWebservice());
          } else {
            Alert.alert("Failed", STRINGS.REQ_FAILED), [{ text: "Ok" }];
          }
        } else {
          Alert.alert("Failed", STRINGS.REQ_FAILED), [{ text: "Ok" }];
        }
      })
      .catch((error) => {
        Alert.alert("Failed", error.message), [{ text: "Ok" }];
      });
  };
};

/**
 * Invoke post webservice to get post information
 */
const invokePostDataWebservice = () => {
  return (dispatch) => {
    invokeGetWebService("5b9755c43000006a000bd53f")
      .then((val) => {
        if (_.has(val, "message")) {
          if (val.message === "Success" && _.has(val, "data")) {
            dispatch({
              type: ACTIONS.UPDATE_POST_DATA,
              postArray: val.data,
            });
            dispatch({
              type: ACTIONS.POST_DATA_LOADED,
            });
          } else {
            Alert.alert("Failed", STRINGS.REQ_FAILED), [{ text: "Ok" }];
          }
        } else {
          Alert.alert("Failed", STRINGS.REQ_FAILED), [{ text: "Ok" }];
        }
      })
      .catch((error) => {
        Alert.alert("Failed", error.message), [{ text: "Ok" }];
      });
  };
};

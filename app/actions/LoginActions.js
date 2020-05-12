"use strict";
import { Alert } from "react-native";
import { invokeGetWebService } from "../util/HttpClient";
const _ = require("lodash");
import { STRINGS } from "../util/Constants";
import * as Actions from "./ActionTypes.js";
import * as URLs from "../util/URLs";


export const callLoginWebService = () => {
  return (dispatch) => {
    dispatch({
      type: Actions.LOADING_FULL,
    });

    invokeGetWebService('/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING')
      .then((val) => {
        console.log("WS", val);
        if (_.has(val, "statusCode")) {
          if (val.statusCode == "0" && _.has(val, "data")) {
            dispatch({
              type: Actions.LOGIN_RESPONSE,
              loginData: val.data.cards.toString(),
            });
            dispatch({
              type: Actions.LOADING_COMPLETED,
            });
          } else {
            Alert.alert("FAILED 3", STRINGS.REQ_FAILED), [{ text: "Ok" }];
          }
        } else {
          Alert.alert("FAILED 2", STRINGS.REQ_FAILED), [{ text: "Ok" }];
        }
      })
      .catch((error) => {
        dispatch({
          type: Actions.LOGIN_RESPONSE,
          loginData: "at result",
        });
        dispatch({
          type: Actions.LOADING_COMPLETED,
        });
      });
  };
};

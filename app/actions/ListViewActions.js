import { STRINGS } from "../util/Constants";
import * as Actions from "./ActionTypes.js";
import * as URLs from "../util/URLs";
import { invokeGetWebService } from "../util/HttpClient";
import { Alert } from "react-native";
const _ = require("lodash");

export const callListService = () => {
    return (dispatch) => {
      dispatch({
        type: Actions.LIST_RESPONSE,
        data : 'from list view'
      });
    };
  };
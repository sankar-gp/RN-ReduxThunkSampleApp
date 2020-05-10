"use strict";

import store from "../store/Store.js";
import axios from "axios";

import { STRINGS } from "../util/Constants";

export const invokeGetWebService = (url) => {
  return new Promise(function (success, failed) {
    if (!store.getState().networkState.isNetworkAvailable) {
      failed({ status: 503, message: STRINGS.NO_INTERNET });
    }

    let headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    const config = {
      method: "GET",
      url,
      headers,
    };

  
    axios
      .create({
        baseURL: "https://www.swiggy.com",
        timeout: 45000,
      })(config)
      .then((response) => {
        console.log("WS", response);
        const { status, data } = response;
        if (status === 200) {
          try {
            return data;
          } catch (e) {
            throw { status, message: STRINGS.REQ_FAILED };
          }
        } else {
          throw { status, message: STRINGS.REQ_FAILED };
        }
      })
      .then((response) => {
        success(response);
      })
      .catch((err) => {
        failed(err);
      });
  });
};

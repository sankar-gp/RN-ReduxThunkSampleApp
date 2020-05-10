import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./app/store/Store.js";
import LoginScreen from "./app/components/LoginScreen.js";
import Navigator from "./app/Navigation";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}

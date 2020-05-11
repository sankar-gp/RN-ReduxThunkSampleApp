import React, { Component } from "react";
import { Provider } from "react-redux";
import Navigator from "./app/Navigation"; //Importing Navigation Component
import store from "./app/store/Store.js"; //Importing Store

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}

/* Getting Started with Redux */

/* REDUX          
Redux is a predictable state container for JavaScript apps.

Installation

# NPM
npm install redux
    OR
# Yarn
yarn add redux


In a typical Redux app, there is just a single store with a single root reducing function. As your app grows, you split the root reducer 
into smaller reducers independently operating on the different parts of the state tree. This is exactly like how there is just one root 
component in a React app, but it is composed out of many small components.
*/
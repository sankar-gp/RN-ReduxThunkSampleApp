"use strict";
import React, { Component } from "react";
import { View, Text, Alert } from "react-native";
import { Router, Scene, ActionConst } from "react-native-router-flux";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import LoginScreen from "./containers/LoginScreen";
import ListViewScreen from "./containers/ListViewScreen";

class RouteNavigator extends Component {
  static propTypes = {
    isNetworkAvailable: PropTypes.bool,
  };

  _renderNetWorkAlert() {
    if (
      this.props.isNetworkAvailable !== undefined &&
      !this.props.isNetworkAvailable
    ) {
      return Alert.alert("No Internet Connection");
    } else {
      return null;
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Router style={{ flex: 1 }}>
          <Scene
            key="root"
            backTitle={"Back"}
            navBarButtonColor={"white"}
            backButtonTextStyle={{ color: "white" }}
            navigationBarStyle={{ backgroundColor: "#713FFF" }}
            titleStyle={{ color: "white" }}
          >
            <Scene
              key={"login"}
              title={"LOGIN"}
              component={LoginScreen}
              type={ActionConst.RESET}
              initial
            />

            <Scene
              key={"list"}
              title={"LIST VIEW"}
              component={ListViewScreen}
          
            />
          </Scene>
        </Router>

        <View style={{ position: "absolute", top: 0, left: 0, right: 0 }}>
          {this._renderNetWorkAlert()}
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const {
    networkState: { isNetworkAvailable },
  } = state;

  return {
    isNetworkAvailable,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteNavigator);

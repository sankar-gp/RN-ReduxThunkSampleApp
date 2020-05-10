"use strict";
import React, { Component } from "react";
import { View, Text } from "react-native";
import { Router, Scene, ActionConst } from "react-native-router-flux";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import LoginScreen from "./containers/LoginScreen";


/**
 * Registeres all the components used in the application for navigation
 */
class RouteNavigator extends Component {
  static propTypes = {
    isNetworkAvailable: PropTypes.bool,
  };

  _renderNetWorkAlert() {
    if (
      this.props.isNetworkAvailable !== undefined &&
      !this.props.isNetworkAvailable
    ) {
      return (
        <View
          style={{
            backgroundColor: "red",
            alignItems: "center",
            justifyContent: "center",
            padding: 7,
          }}
        >
          <Text style={{ color: "white", fontSize: 12 }}>
            No Internet Connection
          </Text>
        </View>
      );
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
              key={"dashBoard"}
              title={"LOGINSCREEN"}
              component={LoginScreen}
              type={ActionConst.RESET}
              initial
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

'use strict'
import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import PropTypes from 'prop-types';

export default class LoginScreen extends Component {

  static propTypes = {
    checkNetworkConnection: PropTypes.func,
  };

  componentDidMount() {
    this.props.checkNetworkConnection();
  }

  _renderNetWorkAlert() {
    if (this.props.isNetworkAvailable !== undefined && !this.props.isNetworkAvailable) {
      return (
        <View style={{backgroundColor: 'red', alignItems: 'center', justifyContent: 'center', padding: 7}}>
          <Text style={{color: 'white', fontSize: 12}}>
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
      <View>
        <Text>Hello..This is a login screen</Text>
        <View style={{position: 'absolute', top: 0, left: 0, right: 0}}>
          {this._renderNetWorkAlert()}
        </View>
      </View>
    );
  }
}




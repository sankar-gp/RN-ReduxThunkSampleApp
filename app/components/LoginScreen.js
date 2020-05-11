"use strict";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from "react-native";
import PropTypes from "prop-types";
import { Actions } from 'react-native-router-flux';
export default class LoginScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email   : '',
      password: '',
    }
  }

  static propTypes = {
    checkNetworkConnection: PropTypes.func,
    callLoginWebService: PropTypes.func,

    showUserLoading: PropTypes.bool,
    loginData: PropTypes.string,
  };

  componentDidMount() {
    
  }

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


  _loading() {
    if (
      this.props.showUserLoading !== undefined && !this.props.isNetworkAvailable
    ) {
      return (
        console.log("WS", "Loading Completed")
      );
    } else {
      return (
        console.log("WS", "Loading Started")
      );
    }
  }

  _loginAlert() {
    if (
      this.props.loginData !== undefined
    ) {
      return (
        Alert.alert(
          "LOGIN",
          this.props.loginData,
          [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            },
            { text: "CONTINUE", onPress: () => {Actions.list()} }
          ],
          { cancelable: false }
        )
      
      );
    } else {
      return (
        <View></View>
       );
    }
  }

  onClickListener = (viewId) => {
    switch (viewId) {
      case "login":
        this.props.callLoginWebService();
        break
        case "restore_password":
          Actions.list()
          break
        case "register":
          Alert.alert("Alert", "Button pressed 1"+viewId);
          break    
    }
    
  }

  render() {
    return (
        <View style={styles.container}>
        <View>
       { this._loading()}
        {this._renderNetWorkAlert()}
        {this._loginAlert()}
        </View>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/android/24/000000/user.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/metro/26/000000/password.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('login')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('restore_password')}>
            <Text>Forgot your password?</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('register')}>
            <Text>Register</Text>
        </TouchableHighlight>
      </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
});
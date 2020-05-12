"use strict";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import LoginScreen from "../components/LoginScreen.js";
import { callLoginWebService } from "../actions/LoginActions";

const mapStateToProps = (state, ownProps) => {
  const {
    loginState: { showUserLoading, loginData},
  } = state;

  return {
    showUserLoading,
    loginData,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      callLoginWebService,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

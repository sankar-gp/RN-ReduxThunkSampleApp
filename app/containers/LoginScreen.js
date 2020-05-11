"use strict";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import LoginScreen from "../components/LoginScreen.js";
// import { checkNetworkConnection } from "../actions/NetworkActions";
import { callLoginWebService } from "../actions/LoginActions";

const mapStateToProps = (state, ownProps) => {
  const {
    networkState: {
      isNetworkAvailable,
    },
    loginState: { showUserLoading, loginData},
  } = state;

  return {
    isNetworkAvailable,
    showUserLoading,
    loginData,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      // checkNetworkConnection,
      callLoginWebService,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

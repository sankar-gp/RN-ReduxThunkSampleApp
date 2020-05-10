"use strict";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import LoginScreen from "../components/LoginScreen.js";
import { checkNetworkConnection } from "../actions/NetworkActions";
import { invokeTaskDataWebservice } from "../actions/LoginActions";

const mapStateToProps = (state, ownProps) => {
  const {
    networkState: {
      isNetworkAvailable,
    },
    dashBoardState: { showUserLoading, showTaskLoading, showPostLoading },
  } = state;

  return {
    isNetworkAvailable,
    showUserLoading,
    showTaskLoading,
    showPostLoading,
  
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      checkNetworkConnection,
      invokeTaskDataWebservice,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

"use strict";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import ListViewScreen from "../components/ListViewScreen.js";
import { callListService } from "../actions/ListViewActions";

const mapStateToProps = (state, ownProps) => {
  const {
    networkState: {
      isNetworkAvailable,
    },
    listViewState :{
      showUserLoading,
      data,
    }
  } = state;

  return {
    isNetworkAvailable,
    showUserLoading,
    data,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      callListService,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ListViewScreen);

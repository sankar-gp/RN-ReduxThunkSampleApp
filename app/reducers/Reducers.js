'use strict'

import {combineReducers} from 'redux'
import {networkState} from './NetworkReducer.js'
import {dashBoardState} from './DashBoardReducer.js'

const rootReducer = combineReducers({
networkState,
dashBoardState,
});

export default rootReducer;
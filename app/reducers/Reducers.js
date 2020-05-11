'use strict'

import {combineReducers} from 'redux'
import {networkState} from './NetworkReducer.js'
import {loginState} from './LoginReducer.js'

const rootReducer = combineReducers({
networkState,
loginState,
});

export default rootReducer;
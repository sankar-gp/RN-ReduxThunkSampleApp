'use strict'

import {combineReducers} from 'redux'
import {networkState} from './NetworkReducer.js'
import {loginState} from './LoginReducer.js'
import {listViewState} from './ListViewReducer.js'

const rootReducer = combineReducers({
networkState,
loginState,
listViewState
});

export default rootReducer;


/* REDUCERS */

/* 
To specify how the state tree is transformed by actions, you write pure reducers.

Reducers are just pure functions that take the previous state and an action, and return the next state.
Remember to return new state objects, instead of mutating the previous state. 

The reducer is a pure function that takes the previous state and an action, and returns the next state.
(previousState, action) => nextState


*/
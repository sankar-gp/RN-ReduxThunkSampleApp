'use strict'
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import reducers from '../reducers/Reducers.js'

export default createStore(reducers,applyMiddleware(thunk));

/* STORE */

/* 
The global state of your application is stored in an object tree within a single store.

> STATE is stored in a single tree.
> STATE is read-only
(The only way to change the state is to emit an action, an object describing what happened.)

The Store is the object that brings them together. The store has the following responsibilities:

> Holds application state;
> Allows access to state via getState();
> Allows state to be updated via dispatch(action);
> Registers listeners via subscribe(listener);
> Handles unregistering of listeners via the function returned by subscribe(listener).


# applyMiddleware(... middleware) Middleware is the suggested way to extend Redux with custom functionality.
 Middleware lets you wrap the store's dispatch method for fun and profit.
*/
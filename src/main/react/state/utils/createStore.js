import { applyMiddleware, compose, combineReducers } from 'redux';
import { createStore } from 'redux-dynamic-reducer';
import makeRootReducer from '../rootReducer';
import thunk from 'redux-thunk';

export default (initialState = {}, namespace) => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = [thunk];

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = [];
  //TODO do not do this in production
  const devToolsExtension = window.devToolsExtension;
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================

  const store = createStore(
    makeRootReducer(),
    initialState,
    compose(
      applyMiddleware(...middleware),
      ...enhancers
    )
  );
  store.asyncReducers = {};

  return store;
};

export const addReducer = ({ store, portletReducer, namespace }) => {
  store.attachReducers({ [namespace]: portletReducer });
  return store;
};

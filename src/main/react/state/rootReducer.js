import { combineReducers } from 'redux';

import mainReducer from './mainReducer';

export const reducers = asyncReducers =>
  combineReducers({
    main: mainReducer,
    ...asyncReducers
  });

export default reducers;

import React from 'react';
import { Provider } from 'react-redux';
import MainView from './views/main/MainViewContainer';

import createStore from './state/utils/createStore';
const store = createStore();

export default () => {
  return (
    <Provider store={store}>
      <MainView />
    </Provider>
  );
};

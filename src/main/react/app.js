import React from 'react';
import { Provider } from 'react-redux';
import MainView from './views/main/MainViewContainer';
import GeneralStyles from './theme/GeneralStyles';

import createStore from './state/utils/createStore';
const store = createStore();

export default () => {
  return (
    <GeneralStyles>
      <Provider store={store}>
        <MainView />
      </Provider>
    </GeneralStyles>
  );
};

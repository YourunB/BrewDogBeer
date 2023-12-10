import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { store } from './redux/store'

import MainPage from './components/MobileCompany';

ReactDOM.render(
  <Provider store={store}>
      <MainPage/>
  </Provider>, document.getElementById('container')
  );


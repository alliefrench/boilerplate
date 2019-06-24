import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import Provider from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <div>It's gonna be a great day for a new app!</div>
  </Provider>,
  document.getElementById('app')
);

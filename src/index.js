import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Layout from './layouts/AntdLeftLayout';
import { HashRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import Store from './store';

const StoreInstance = Store();

ReactDOM.render(
  <Provider store={StoreInstance}>
    <Router>
      <Layout />
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

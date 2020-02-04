import React from 'react';
import { ConnectedNavigation as Navigation } from './containers/Navigation';
import { ConnectedDashboard as Dashboard } from './containers/Dashboard';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import { store } from './store';
import { history } from './store/history';
function Layout() {

  return (
    <Router history={history}>
      <Provider store={store}>
        <Navigation />
        <Route exact path='/' component={Dashboard} />
      </Provider>
    </Router>

  );
}

export default Layout;

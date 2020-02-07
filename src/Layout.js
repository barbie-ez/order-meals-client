import React from 'react';
import { ConnectedNavigation as Navigation } from './containers/Navigation';
import { ConnectedDashboard as Dashboard } from './containers/Dashboard';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import { store } from './store';
import { history } from './store/history';
import { Redirect } from 'react-router';
import Login from './components/Login';
const RouteGuard = Component => ({ match }) => {
  console.log("Route guard", match);
  console.log("Store", store.getState());

  if (!store.getState().session.authenticated) {
    return <Redirect to="/" />;
  } {
    return <Component match={match} />;
  }

};
function Layout() {

  return (
    <Router history={history}>
      <Provider store={store}>
        <Navigation />
        <Route exact path='/' component={Login} />
        <Route exact path='/dashboard' component={RouteGuard(Dashboard)} />
      </Provider>
    </Router>

  );
}

export default Layout;

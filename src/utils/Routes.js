import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import { MyLoadingComponent } from '../components/MyLoadingComponent';
import { User } from '../pages/User';
class Routes extends Component {
  render() {
    const AsyncApp = Loadable({
      loader: () => import('../App'),
      loading: MyLoadingComponent
    });
    const AsyncHome = Loadable({
      loader: () => import('../pages/Home'),
      loading: MyLoadingComponent
    });
    const AsyncUser = Loadable({
      loader: () => import('../pages/User'),
      loading: MyLoadingComponent
    });
    const AsyncRedux = Loadable({
      loader: () => import('../pages/ReduxExample'),
      loading: MyLoadingComponent
    });
    const AsyncRedux2 = Loadable({
      loader: () => import('../pages/ReduxExample2'),
      loading: MyLoadingComponent
    });

    return (
      <Switch>
        <Route path="/" exact component={AsyncApp} />
        <Route path="/home" component={AsyncHome} />
        <Route path="/user" component={User} />
        <Route path="/redux" component={AsyncRedux} />
        <Route path="/redux2" component={AsyncRedux2} />
      </Switch>
    );
  }
}
export default Routes;

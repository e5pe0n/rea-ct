/* eslint-disable */
import { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router';

import Home from 'components/pages/Home';
import User from 'components/pages/User';

const AppRedirect: FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Redirect from="/user/profile/:userId" to="/user/:userId" />
    <Route path="/user/:userId" component={User} />
    <Redirect push to="/" />
  </Switch>
);

export default AppRedirect;

import { FC } from 'react';
import { Route, Switch } from 'react-router';

import Home from 'components/pages/Home';
import User from 'components/pages/User';
import NotFound from 'components/pages/NotFound';

const AppSwitch: FC = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/user/:userId">
      <User />
    </Route>
    <Route>
      <NotFound />
    </Route>
  </Switch>
);

export default AppSwitch;

/* eslint-disable */
import { FC, useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';

import Home from 'components/pages/Home';
import User from 'components/pages/User';
import NotFound from 'components/pages/NotFound';

const AppLocation: FC = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/user/:userId" component={User} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default AppLocation;

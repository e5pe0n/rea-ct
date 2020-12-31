/* eslint-disable */
import { FC } from 'react';
import { Route } from 'react-router';

import Home from 'components/pages/Home';
import About from 'components/pages/About';
import Contact from 'components/pages/Contact';

const AppRoute: FC = () => (
  <>
    <p>Welcome to our home page!</p>
    <Route exact path="/" component={Home} />
    <Route path="/about">
      <About />
    </Route>
    <Route path="/contact">
      <Contact destAddress="contact@our-company.com" />
    </Route>
  </>
);

export default AppRoute;

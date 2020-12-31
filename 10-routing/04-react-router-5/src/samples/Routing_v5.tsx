import { FC } from 'react';
import { Switch, Route, RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';

const AppRoutingV5: FC = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/users" component="Users" />
  </Switch>
);

const UsersRoutingV5: FC<RouteComponentProps> = ({ match }) => (
  <div>
    <nav>
      <Link to={`${match.url}/me`}>My Profile</Link>
    </nav>
    <Switch>
      <Route path={`${match.path}/me`}>
        <SelfProfile />
      </Route>
      <Route path={`${match.path}/:id`}>
        <UserProfile />
      </Route>
    </Switch>
  </div>
);

import { FC } from 'react';
import { Link } from 'react-router-dom';
import capitalize from 'lodash/capitalize';
import { List } from 'semantic-ui-react';

import './Home.css';

const Home: FC<{ orgCodes: string[] }> = ({ orgCodes = [] }) => (
  <>
    <header className="app-header">
      <h1>Companies</h1>
    </header>
    <List called relaxed>
      {orgCodes.map((orgCode) => (
        <List.Item className="list-item" key={orgCode}>
          <List.Icon name="users" size="large" verticalAlign="middle" />
          <List.Content>
            <Link to={`/${orgCode}/members`}>
              Members of {capitalize(orgCode)}
            </Link>
          </List.Content>
        </List.Item>
      ))}
    </List>
  </>
);

export default Home;

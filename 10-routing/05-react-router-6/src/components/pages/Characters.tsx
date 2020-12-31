import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Divider } from 'semantic-ui-react';

import HomeButton from 'containers/molecules/HomeButton';

const Characters: FC = () => (
  <>
    <header>
      <h1>SLAM DUNK Characters</h1>
    </header>
    <Outlet />
    <Divider hidden />
    <HomeButton />
  </>
);

export default Characters;

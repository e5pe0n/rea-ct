import { FC } from 'react';
import { Link } from 'react-router-dom';

const AppLink: FC = () => (
  <ul>
    <li>
      <Link to="/">Top page</Link>
    </li>
    <li>
      <Link
        to="{{
        pathname: '/contact',
        search: '?from=here',
        hash: '#subject',
        state: { secretCode: 'xxx' },
      }}"
      >
        Inquiry
      </Link>
    </li>
    <li>
      <Link to="anywhere" replace>
        Where is not here now
      </Link>
    </li>
  </ul>
);

export default AppLink;

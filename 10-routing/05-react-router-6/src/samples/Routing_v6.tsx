import { FC } from 'react';

import { Routes, Route } from 'react-router';
import { Link } from 'react-router-dom';

const AppRoutingV6: FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="users/*" element={<Users />} />
  </Routes>
);

const UsersRoutingV6: FC = () => (
  <div>
    <nav>
      <Link to="me">My Profile</Link>
    </nav>
    <Routes>
      <Route path=":id" element={<UserProfile />} />
      <Route path="me" element={<SelfProfile />} />
    </Routes>
  </div>
);

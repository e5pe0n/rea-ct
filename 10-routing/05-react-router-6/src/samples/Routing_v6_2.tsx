import { FC } from 'react';

import { Routes, Route, Outlet } from 'react-router';
import { Link } from 'react-router-dom';

const AppRoutingV6_2: FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="users" element={<Users />}>
      <Route path="me" element={<SelfProfile />} />
      <Route path=":id" element={<UserProfile />} />
    </Route>
  </Routes>
);

const UsersRoutingV6_2: FC = () => (
  <div>
    <nav>
      <Link to="me">My Profile</Link>
    </nav>
    <Outlet />
  </div>
);

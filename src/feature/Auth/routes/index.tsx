import React from 'react';
import { Signin } from '../component/SignIn';
import { SignUp } from '../component/SignUp';
import { RequireNotAuthenticated } from '../hoc/requireNotAuthenticated';

export const AuthRoutes = [
  // These are the same as the props you provide to <Route>
  {
    path: '/signin',
    element: (
      <RequireNotAuthenticated to="/">
        <Signin />
      </RequireNotAuthenticated>
    ),
  },
  {
    path: '/signup',
    element: (
      <RequireNotAuthenticated to="/">
        <SignUp />
      </RequireNotAuthenticated>
    ),
  },
];

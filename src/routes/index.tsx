import { useRoutes } from 'react-router';
import React from 'react';
import { Home } from '../feature/Home/Home';
import { RequireAuth } from '../hoc/requireAuth';
import { AuthRoutes } from '../feature/Auth';

export const ApplicationRoutes = () => {
  return useRoutes([
    // These are the same as the props you provide to <Route>
    {
      path: '/',
      element: (
        <RequireAuth>
          <Home />
        </RequireAuth>
      ),
    },
    ...AuthRoutes,
  ]);
};

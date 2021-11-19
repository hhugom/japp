import React from 'react';
import { Home } from '../component/Home';
import { RequireAuth } from 'Src/hoc/requireAuth';

export const HomeRoutes = [
  // These are the same as the props you provide to <Route>
  {
    path: '/',
    element: (
      <RequireAuth>
        <Home />
      </RequireAuth>
    ),
  },
];

import React from 'react';
import { UserParameter } from '../component/UserParameter';
import { RequireAuth } from 'Src/hoc/requireAuth';

export const ParameterRoute = [
  // These are the same as the props you provide to <Route>
  {
    path: '/settings',
    element: (
      <RequireAuth>
        <UserParameter />
      </RequireAuth>
    ),
  },
];

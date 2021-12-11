import React from 'react';
import { BunproLayout } from '../component/BunproLayout';
import { RequireAuth } from 'Src/hoc/requireAuth';

export const BunproRoutes = [
  // These are the same as the props you provide to <Route>
  {
    path: '/bunpro',
    element: (
      <RequireAuth>{(user) => <BunproLayout user={user} />}</RequireAuth>
    ),
  },
];

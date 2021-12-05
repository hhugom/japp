import React from 'react';
import { WanikaniLayout } from '../component/WanikaniLayout';
import { RequireAuth } from 'Src/hoc/requireAuth';

export const WanikaniRoutes = [
  // These are the same as the props you provide to <Route>
  {
    path: '/wanikani',
    element: (
      <RequireAuth>{(user) => <WanikaniLayout user={user} />}</RequireAuth>
    ),
  },
];

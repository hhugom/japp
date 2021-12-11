import React from 'react';
import { SettingsLayout } from '../component/SettingsLayout';
import { RequireAuth } from 'Src/hoc/requireAuth';

export const ParameterRoute = [
  // These are the same as the props you provide to <Route>
  {
    path: '/settings',
    element: (
      <RequireAuth>{(user) => <SettingsLayout user={user} />}</RequireAuth>
    ),
  },
];

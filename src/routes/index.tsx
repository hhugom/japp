import { useRoutes } from 'react-router';
import { AuthRoutes } from 'Src/feature/Auth';
import { HomeRoutes } from 'Src/feature/Home';
import { ParameterRoute } from 'Src/feature/Settings';

export const ApplicationRoutes = () => {
  return useRoutes([
    // These are the same as the props you provide to <Route>
    ...HomeRoutes,
    ...AuthRoutes,
    ...ParameterRoute,
  ]);
};

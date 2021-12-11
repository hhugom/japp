import { useRoutes } from 'react-router';
import { AuthRoutes } from 'Src/feature/Auth';
import { HomeRoutes } from 'Src/feature/Home';
import { ParameterRoute } from 'Src/feature/Settings';
import { WanikaniRoutes } from 'Src/feature/Wanikani';
import { BunproRoutes } from 'Src/feature/Bunpro';

export const ApplicationRoutes = () => {
  return useRoutes([
    // These are the same as the props you provide to <Route>
    ...HomeRoutes,
    ...AuthRoutes,
    ...ParameterRoute,
    ...WanikaniRoutes,
    ...BunproRoutes,
  ]);
};

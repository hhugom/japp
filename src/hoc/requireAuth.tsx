import React from 'react';
import { Navigate, useLocation } from 'react-router';
import { JappUser, useGetUser } from 'Src/api/getUser';

export const RequireAuth = ({
  children,
}: {
  children: (user: JappUser) => JSX.Element;
}) => {
  const location = useLocation();
  const { data: user } = useGetUser();

  if (!user) {
    return <Navigate to="/signin" state={{ from: location }} />;
  }

  return children(user);
};

import React from 'react';
import { Navigate } from 'react-router';
import { useAuth } from 'Src/hook/useAuth';

export const RequireNotAuthenticated = ({
  children,
  to,
}: {
  children: JSX.Element;
  to: string;
}) => {
  const user = useAuth();

  if (user) {
    return <Navigate to={to} />;
  }

  return children;
};

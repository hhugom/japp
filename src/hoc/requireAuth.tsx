import React from 'react';
import { Navigate, useLocation } from 'react-router';
import { useAuth } from '../hook/useAuth';

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  const user = useAuth();

  if (!user) {
    return <Navigate to="/signin" state={{ from: location }} />;
  }

  return children;
};

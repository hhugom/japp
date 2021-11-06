import { Auth, signOut as signOutApi } from '@firebase/auth';
import { useMutation } from 'react-query';

export const useSignOut = () => {
  const { mutate: signOut, ...rest } = useMutation((auth: Auth) =>
    signOutApi(auth)
  );
  return { signOut, ...rest };
};

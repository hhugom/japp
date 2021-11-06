import {
  signInWithEmailAndPassword as signInWithEmailAndPasswordApi,
  getAuth,
} from 'firebase/auth';
import { useMutation } from 'react-query';
import { firebaseApp } from '../../../lib/firebase';

export const useSigninWithEmailAndPassword = ({
  onSuccess,
  onError,
}: MutationHookParameters = {}) => {
  const { mutate: signInWithEmailAndPassword, ...rest } = useMutation(
    ({ email, password }: { email: string; password: string }) => {
      const auth = getAuth(firebaseApp);
      return signInWithEmailAndPasswordApi(auth, email, password);
    },
    { onSuccess, onError }
  );

  return { ...rest, signInWithEmailAndPassword };
};

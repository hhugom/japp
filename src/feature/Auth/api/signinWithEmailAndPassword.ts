import { signInWithEmailAndPassword as signInWithEmailAndPasswordApi } from 'firebase/auth';
import { useMutation } from 'react-query';
import { auth } from 'Src/lib/firebase';

export const useSigninWithEmailAndPassword = ({
  onSuccess,
  onError,
}: MutationHookParameters = {}) => {
  const { mutate: signInWithEmailAndPassword, ...rest } = useMutation(
    ({ email, password }: { email: string; password: string }) => {
      return signInWithEmailAndPasswordApi(auth, email, password);
    },
    { onSuccess, onError }
  );

  return { ...rest, signInWithEmailAndPassword };
};

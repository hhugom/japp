import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useMutation } from 'react-query';
import { auth } from 'Src/lib/firebase';

export const useSignupWithEmailAndPassword = ({
  onSuccess,
  onError,
}: MutationHookParameters = {}) => {
  const { mutate: signupWithEmailAndPassword, ...rest } = useMutation(
    ({ email, password }: { email: string; password: string }) => {
      return createUserWithEmailAndPassword(auth, email, password);
    },
    { onSuccess, onError }
  );

  return { ...rest, signupWithEmailAndPassword };
};

import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useMutation } from 'react-query';
import { firebaseApp } from '../../../lib/firebase';

export const useSignupWithEmailAndPassword = () => {
  const { mutate: signupWithEmailAndPassword, ...rest } = useMutation(
    ({ email, password }: { email: string; password: string }) => {
      const auth = getAuth(firebaseApp);
      return createUserWithEmailAndPassword(auth, email, password);
    }
  );

  return { ...rest, signupWithEmailAndPassword };
};

import { useMutation } from 'react-query';
import * as WebBrowser from 'expo-web-browser';
import { GoogleAuthProvider, signInWithCredential } from '@firebase/auth';
import { AuthRequestPromptOptions, AuthSessionResult } from 'expo-auth-session';
import { auth } from 'Src/lib/firebase';

// Only for authentication on web browser
WebBrowser.maybeCompleteAuthSession();

type signinWithGoogleParameters = {
  googleAuth?: (
    option?: AuthRequestPromptOptions | undefined
  ) => Promise<AuthSessionResult>;
} & MutationHookParameters;

export const useSigninWithGoogle = ({
  googleAuth,
  onSuccess,
  onError,
}: signinWithGoogleParameters = {}) => {
  const { mutate: signinWithGoogle, ...rest } = useMutation(
    async () => {
      const response = await googleAuth?.();
      if (response?.type === 'success') {
        const { id_token } = response.params;
        const credential = GoogleAuthProvider.credential(id_token);
        return signInWithCredential(auth, credential);
      }
    },
    { onSuccess, onError }
  );

  return { ...rest, signinWithGoogle };
};

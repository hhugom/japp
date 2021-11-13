import { useIdTokenAuthRequest } from 'expo-auth-session/providers/google';
import React, { FC } from 'react';
import { DefaultButton } from '../../../component/DefaultButton';
import { useSigninWithGoogle } from '../api/signinWithGoogle';
export const GoogleSignin: FC = () => {
  const [, , googleAuth] = useIdTokenAuthRequest({
    clientId:
      '857205036087-05kp90rufhrpt25m4sn8m2tlvn6snh9e.apps.googleusercontent.com',
  });
  const { signinWithGoogle } = useSigninWithGoogle({ googleAuth });

  return (
    <DefaultButton
      mb={6}
      maxWidth="100%"
      width="250px"
      onPress={() => signinWithGoogle()}
      text="Google"
    />
  );
};

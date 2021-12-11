import React, { FC, useCallback } from 'react';
import { Box, Text } from 'native-base';
import { getAuth } from '@firebase/auth';
import { DefaultButton } from 'Src/component/DefaultButton';
import { useSignOut } from 'Src/api/signOut';
import { firebaseApp } from 'Src/lib/firebase';
import { JappUser } from 'Src/api/getUser';

type HomeProps = {
  user: JappUser;
};
export const Home: FC<HomeProps> = () => {
  const { signOut } = useSignOut();
  const auth = getAuth(firebaseApp);
  const onPress = useCallback(() => {
    signOut(auth);
  }, [auth, signOut]);

  return (
    <Box
      bg="secondary.regular"
      pt={4}
      alignSelf="center"
      width="100%"
      flexGrow={2}
      maxWidth="100%"
      testID="login-container"
      alignItems="center"
      p={4}
    >
      <Text>Welcome</Text>
      <DefaultButton text="Disconnect" width="280px" onPress={onPress} />
    </Box>
  );
};

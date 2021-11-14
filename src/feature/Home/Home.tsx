import React, { FC, useCallback } from 'react';
import { Box, Text } from 'native-base';
import { getAuth } from '@firebase/auth';
import { DefaultButton } from '../../component/DefaultButton';
import { useSignOut } from '../../api/signOut';
import { firebaseApp } from '../../lib/firebase/firebase-app';

export const Home: FC = () => {
  const { signOut } = useSignOut();
  const auth = getAuth(firebaseApp);
  const onPress = useCallback(() => {
    signOut(auth);
  }, [auth, signOut]);
  return (
    <Box
      bg="primary.600"
      py={4}
      px={3}
      rounded="md"
      alignSelf="center"
      width={375}
      maxWidth="100%"
      testID="login-container"
    >
      <Text>Welcome</Text>
      <DefaultButton text="Disconnect" onPress={onPress} />
    </Box>
  );
};

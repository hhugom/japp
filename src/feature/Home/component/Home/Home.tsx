import React, { FC, useCallback } from 'react';
import { Box, Text } from 'native-base';
import { getAuth } from '@firebase/auth';
import { useGetUser } from 'Src/api/getUser';
import { DefaultButton } from 'Src/component/DefaultButton';
import { useSignOut } from 'Src/api/signOut';
import { firebaseApp } from 'Src/lib/firebase';

export const Home: FC = () => {
  const { signOut } = useSignOut();
  const auth = getAuth(firebaseApp);
  const onPress = useCallback(() => {
    signOut(auth);
  }, [auth, signOut]);
  const { data, isLoading } = useGetUser();
  console.log({ data, isLoading });
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

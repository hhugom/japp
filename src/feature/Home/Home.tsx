import React, { FC, useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Box, Text } from 'native-base';
import Auth from '../Auth/Auth';

const Home: FC = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<firebase.User | null>();

  // Handle user state changes
  function onAuthStateChanged(newUser: firebase.User | null) {
    setUser(newUser);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  });

  if (initializing) {
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
      <Text>Init</Text>
    </Box>;
  }

  if (!user) {
    return <Auth />;
  }

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
      <Text>Welcome {user.email}</Text>
    </Box>
  );
};

export default Home;

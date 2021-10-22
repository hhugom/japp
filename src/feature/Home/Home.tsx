import React, { FC, useState, useEffect } from 'react';
import { Text } from 'react-native';
import { Button, Input } from 'native-base';
import styled from 'styled-components/native';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Box } from 'native-base';
import theme from '../../style/theme';

const FormContainer = styled.View`
  max-width: 780px;
`;

const StyledButton = styled(Button)`
  color: ${theme.colors.blue[100]};
  width: 100%;
`;

const StyledInput = styled(Input)`
  margin: 15px 0;
  width: 100%;
`;

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
        <FormContainer>
          <StyledInput />
          <StyledInput />
          <StyledButton>Login</StyledButton>
        </FormContainer>
      </Box>
    );
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

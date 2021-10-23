import { Box, Button, Input } from 'native-base';
import React from 'react';
import styled from 'styled-components/native';

const FormContainer = styled(Box)`
  width: 400px;
`;

const StyledButton = styled(Button)`
  color: ${(props) => props.theme.colors.primary[200]};
  width: 100%;
`;

const StyledInput = styled(Input)`
  margin: 15px 0;
  width: 100%;
`;

const Auth = () => {
  return (
    <Box
      bg="primary.600"
      py={4}
      px={3}
      rounded="md"
      alignSelf="center"
      width="100%"
      height="100%"
      maxWidth="100%"
      testID="login-container"
      justifyContent="center"
      alignItems="center"
    >
      <FormContainer>
        <StyledInput />
        <StyledInput />
        <StyledButton>Login</StyledButton>
      </FormContainer>
    </Box>
  );
};

export default Auth;

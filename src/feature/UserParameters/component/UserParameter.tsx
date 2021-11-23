import { Box } from 'native-base';
import React from 'react';

export const UserParameter = () => {
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
    />
  );
};

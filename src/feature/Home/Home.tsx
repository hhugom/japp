import React from 'react';
import { Box, Text } from 'native-base';

export const Home = () => {
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
    </Box>
  );
};

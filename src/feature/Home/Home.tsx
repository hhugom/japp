import React, { FC } from 'react';
import 'firebase/auth';
import { Box, Text } from 'native-base';

const Home: FC = () => {
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

export default Home;

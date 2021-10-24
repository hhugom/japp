import { Box, Heading } from 'native-base';
import React, { FC } from 'react';

type AuthLayoutProps = {
  text: string;
  children: JSX.Element | JSX.Element[];
};

export const AuthLayout: FC<AuthLayoutProps> = ({ children, text }) => {
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
      <Heading
        fontSize="7xl"
        pb={10}
        justifySelf="flex-end"
        color="primary.light"
      >
        JAPP
      </Heading>
      <Heading textAlign="left" color="headings.regular" fontSize="xl" mb={6}>
        ▪ ▪ {text} ▪ ▪
      </Heading>
      {children}
    </Box>
  );
};

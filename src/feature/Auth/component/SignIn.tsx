import { Box, Button, Text } from 'native-base';
import React, { FC } from 'react';
import { useNavigate } from 'react-router';
import { AuthLayout } from './AuthLayout';
import { ClassicSignin } from './ClassicSignin';
import { GoogleSignin } from './GoogleSignin';

export const Signin: FC = () => {
  const navigate = useNavigate();
  return (
    <AuthLayout text="Connexion">
      <Box maxWidth="100%" width="350px" alignItems="center">
        <ClassicSignin />
        <GoogleSignin />
        <Button
          rounded={0}
          py={3}
          px={0}
          maxWidth="100%"
          mb={6}
          variant="ghost"
          onPress={() => navigate('/signup')}
        >
          <Text fontSize="lg" fontWeight="bold" color="primary.regular">
            Créer un compte
          </Text>
        </Button>
      </Box>
    </AuthLayout>
  );
};

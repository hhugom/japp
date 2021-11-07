import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Box, Button, Text } from 'native-base';
import React, { FC } from 'react';
import { AuthLayout } from '../component/AuthLayout';
import { ClassicSignin } from '../component/ClassicSignin';
import { GoogleSignin } from '../component/GoogleSignin';

type SigninProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

export const Signin: FC<SigninProps> = ({ navigation }) => {
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
          onPress={() => navigation.navigate('SignUp')}
          variant="ghost"
        >
          <Text fontSize="lg" fontWeight="bold" color="primary.regular">
            Créer un compte
          </Text>
        </Button>
      </Box>
    </AuthLayout>
  );
};

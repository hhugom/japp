import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Box, Button, Text } from 'native-base';
import React, { FC } from 'react';
import { ClassicAuthSteps } from '../component/ClassicAuthSteps/ClassicAuthSteps';
import { RootStackParamList } from '../../../types/navigation';
import { AuthLayout } from '../component/AuthLayout';

type SigninProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

export const Signin: FC<SigninProps> = ({ navigation }) => {
  return (
    <AuthLayout text="Connexion">
      <Box maxWidth="100%" width="350px" alignItems="center">
        <ClassicAuthSteps />
        <Button
          rounded={0}
          px={6}
          py={3}
          maxWidth="100%"
          width="250px"
          my={6}
          onPress={() => navigation.navigate('SignUp')}
        >
          Google
        </Button>
        <Button
          rounded={0}
          px={6}
          py={3}
          maxWidth="100%"
          width="250px"
          mb={6}
          onPress={() => navigation.navigate('SignUp')}
        >
          Apple
        </Button>
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

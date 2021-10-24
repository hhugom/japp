import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Box, Button, Heading } from 'native-base';
import React, { FC } from 'react';
import { ClassicAuthSteps } from '../component/ClassicAuthSteps/ClassicAuthSteps';
import { RootStackParamList } from '../../../types/navigation';

type SigninProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

export const Signin: FC<SigninProps> = ({ navigation }) => {
  return (
    <Box
      bg="secondary.regular"
      pt={4}
      px={3}
      alignSelf="center"
      width="100%"
      height="100%"
      maxWidth="100%"
      testID="login-container"
      alignItems="center"
    >
      <Box maxWidth="100%" width="450px" alignItems="center" p={4}>
        <Heading fontSize="7xl" pb={10} color="primary.light">
          JAPP
        </Heading>
        <Heading
          width="100%"
          textAlign="left"
          color="headings.regular"
          fontSize="xl"
          mb={6}
        >
          Connexion
        </Heading>
        <ClassicAuthSteps />
      </Box>
      <Button mb={6} onPress={() => navigation.navigate('SignUp')}>
        Google
      </Button>
      <Button mb={6} onPress={() => navigation.navigate('SignUp')}>
        Apple
      </Button>
      <Button mb={6} onPress={() => navigation.navigate('SignUp')}>
        Créer un compte
      </Button>
    </Box>
  );
};

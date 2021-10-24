import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Box, Button, Text } from 'native-base';
import React, { useState, FC } from 'react';
import { RootStackParamList } from '../../../types/navigation';
import { AuthInput } from '../component/AuthInput';
import { AuthLayout } from '../component/AuthLayout';

type SignUProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

export const SignUp: FC<SignUProps> = ({ navigation }) => {
  const [, setEmail] = useState<string>();
  const [, setPassword] = useState<string>();
  const [, setConfirmPassword] = useState<string>();

  return (
    <AuthLayout text="Création de compte">
      <Box
        bg="secondary.regular"
        alignSelf="center"
        width="100%"
        height="100%"
        maxWidth="100%"
        testID="login-container"
        alignItems="center"
      >
        <AuthInput onChangeText={setEmail} placeholder="Email" mb={6} />
        <AuthInput onChangeText={setPassword} placeholder="Password" mb={6} />
        <AuthInput
          onChangeText={setConfirmPassword}
          placeholder="Confirm pasword"
          mb={6}
        />
        <Button rounded={0} px={6} py={3} maxWidth="100%" width="250px" my={6}>
          Créer mon compte
        </Button>
        <Button
          rounded={0}
          py={3}
          px={0}
          maxWidth="100%"
          mb={6}
          onPress={() => navigation.navigate('SignIn')}
          variant="ghost"
        >
          <Text fontSize="lg" fontWeight="bold" color="primary.regular">
            J'ai déjà un compte
          </Text>
        </Button>
      </Box>
    </AuthLayout>
  );
};

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Box, Button, Text } from 'native-base';
import React, { FC, useCallback } from 'react';
import { AuthLayout } from '../component/AuthLayout';
import { DefaultButton } from '../../../component/DefaultButton';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { useSigninWithEmailAndPassword } from '../api/signinWithEmailAndPassword';
import Joi from 'joi';
import { ControledInput } from '../../../component/ControledInput';
import { InputContainer } from '../../../component/InputContainer';

type FormData = {
  email: string;
  password: string;
};

const schema = Joi.object<FormData>({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().required(),
});

type SigninProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

export const Signin: FC<SigninProps> = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: joiResolver(schema) });
  const { signInWithEmailAndPassword } = useSigninWithEmailAndPassword();

  const onSubmit = useCallback(
    (data: FormData) => {
      signInWithEmailAndPassword({
        email: data.email,
        password: data.password,
      });
    },
    [signInWithEmailAndPassword]
  );

  return (
    <AuthLayout text="Connexion">
      <Box maxWidth="100%" width="350px" alignItems="center">
        <InputContainer hasError={!!errors.email} errorText="Invalid email">
          <ControledInput
            control={control}
            width="250px"
            key="email"
            placeholder="Email"
            name="email"
          />
        </InputContainer>
        <InputContainer
          hasError={!!errors.password}
          errorText="Invalid password"
        >
          <ControledInput
            control={control}
            width="250px"
            key="password"
            placeholder="Password"
            name="password"
          />
        </InputContainer>
        <DefaultButton
          mb={6}
          maxWidth="100%"
          width="250px"
          text="Connexion"
          onPress={handleSubmit(onSubmit)}
        />
        <DefaultButton
          mb={6}
          maxWidth="100%"
          width="250px"
          onPress={() => navigation.navigate('SignUp')}
          text="Google"
        />
        <DefaultButton
          maxWidth="100%"
          width="250px"
          onPress={() => navigation.navigate('SignUp')}
          text="Apple"
        />
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

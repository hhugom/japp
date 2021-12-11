import { useForm } from 'react-hook-form';
import { Box, HStack } from 'native-base';
import React, { FC } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useNavigate } from 'react-router';
import { useSignupWithEmailAndPassword } from '../api/signupWithEmailAndPassword';
import { AUTH_INPUT_WIDTH } from '../constant/input';
import { AuthLayout } from './AuthLayout';
import { ControledInput } from 'Src/component/ControledInput';
import { InputContainer } from 'Src/component/InputContainer';
import { DefaultButton } from 'Src/component/DefaultButton';

type FormData = {
  email: string;
  password: string;
  confirmPassword: string;
};

const schema = Yup.object({
  email: Yup.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Yup.string().min(8).max(32).required(),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null])
    .required(),
});

export const SignUp: FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });
  const navigate = useNavigate();
  const { signupWithEmailAndPassword, isLoading } =
    useSignupWithEmailAndPassword();
  const onSubmit = (data: FormData) => {
    signupWithEmailAndPassword({ email: data.email, password: data.password });
  };

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
        <InputContainer
          hasError={!!errors.email}
          errorText="You must use a valid email"
        >
          <ControledInput
            autoCompleteType="off"
            importantForAutofill="no"
            isDisabled={isLoading}
            control={control}
            name="email"
            placeholder="Email"
            width={AUTH_INPUT_WIDTH}
          />
        </InputContainer>
        <InputContainer
          hasError={!!errors.password}
          errorText="Your password must be at least 8 characters"
        >
          <HStack alignItems="center">
            <ControledInput
              autoCompleteType="off"
              importantForAutofill="no"
              isDisabled={isLoading}
              control={control}
              type="password"
              name="password"
              placeholder="Password"
              width={AUTH_INPUT_WIDTH}
            />
          </HStack>
        </InputContainer>

        <InputContainer
          hasError={!!errors.confirmPassword}
          errorText="It does not match your password"
        >
          <ControledInput
            autoCompleteType="off"
            importantForAutofill="no"
            isDisabled={isLoading}
            type="password"
            control={control}
            name="confirmPassword"
            placeholder="Confirm password"
            width={AUTH_INPUT_WIDTH}
          />
        </InputContainer>
        <DefaultButton
          text="Créer mon compte"
          maxWidth="100%"
          width="280px"
          mb={6}
          onPress={handleSubmit(onSubmit)}
          isLoading={isLoading}
        />
        <DefaultButton
          variant="ghost"
          text="J'ai déjà un compte"
          onPress={() => navigate('/signin')}
        />
      </Box>
    </AuthLayout>
  );
};

import { useForm } from 'react-hook-form';
import { Box } from 'native-base';
import React, { FC } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useNavigate } from 'react-router';
import { useSignupWithEmailAndPassword } from '../api/signupWithEmailAndPassword';
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
  password: Yup.string().matches(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,32}$/
  ),
  confirmPassword: Yup.ref('password'),
});

export const SignUp: FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });
  const navigate = useNavigate();
  const { signupWithEmailAndPassword } = useSignupWithEmailAndPassword();

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
          <ControledInput control={control} name="email" placeholder="Email" />
        </InputContainer>
        <InputContainer
          hasError={!!errors.password}
          errorText="You should use a valid password"
        >
          <ControledInput
            control={control}
            name="password"
            placeholder="Password"
          />
        </InputContainer>

        <InputContainer
          hasError={!!errors.confirmPassword}
          errorText="It does not match your password"
        >
          <ControledInput
            control={control}
            name="confirmPassword"
            placeholder="Confirm password"
          />
        </InputContainer>
        <DefaultButton
          text="Créer mon compte"
          maxWidth="100%"
          width="250px"
          mb={6}
          onPress={handleSubmit(onSubmit)}
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

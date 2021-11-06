import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useForm } from 'react-hook-form';
import { Box } from 'native-base';
import React, { FC } from 'react';
import { AuthLayout } from '../component/AuthLayout';
import { ControledInput } from '../../../component/ControledInput';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import { InputContainer } from '../../../component/InputContainer';
import { useSignupWithEmailAndPassword } from '../api/signupWithEmailAndPassword';
import { DefaultButton } from '../../../component/DefaultButton';

type SignUProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

type FormData = {
  email: string;
  password: string;
  confirmPassword: string;
};

const schema = Joi.object<FormData>({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().regex(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,32}$/
  ),
  confirmPassword: Joi.ref('password'),
});

export const SignUp: FC<SignUProps> = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: joiResolver(schema) });

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
          onPress={() => navigation.navigate('SignIn')}
          variant="ghost"
          text="J'ai déjà un compte"
        />
      </Box>
    </AuthLayout>
  );
};

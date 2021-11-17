import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import React, { FC, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useSigninWithEmailAndPassword } from '../api/signinWithEmailAndPassword';
import { ControledInput } from 'Src/component/ControledInput';
import { DefaultButton } from 'Src/component/DefaultButton';
import { InputContainer } from 'Src/component/InputContainer';

type FormData = {
  email: string;
  password: string;
};

const schema = Yup.object({
  email: Yup.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Yup.string().required(),
});

export const ClassicSignin: FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });
  const { signInWithEmailAndPassword, isLoading } =
    useSigninWithEmailAndPassword();
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
    <>
      <InputContainer hasError={!!errors.email} errorText="Invalid email">
        <ControledInput
          isDisabled={isLoading}
          control={control}
          width="280px"
          key="email"
          placeholder="Email"
          name="email"
        />
      </InputContainer>
      <InputContainer hasError={!!errors.password} errorText="Invalid password">
        <ControledInput
          isDisabled={isLoading}
          control={control}
          width="280px"
          key="password"
          type="password"
          placeholder="Password"
          name="password"
        />
      </InputContainer>
      <DefaultButton
        mb={6}
        maxWidth="100%"
        width="280px"
        text="Connexion"
        isLoading={isLoading}
        onPress={handleSubmit(onSubmit)}
      />
    </>
  );
};

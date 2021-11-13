import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import React, { FC, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { ControledInput } from '../../../component/ControledInput';
import { DefaultButton } from '../../../component/DefaultButton';
import { InputContainer } from '../../../component/InputContainer';
import { useSigninWithEmailAndPassword } from '../api/signinWithEmailAndPassword';

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
    <>
      <InputContainer hasError={!!errors.email} errorText="Invalid email">
        <ControledInput
          control={control}
          width="250px"
          key="email"
          placeholder="Email"
          name="email"
        />
      </InputContainer>
      <InputContainer hasError={!!errors.password} errorText="Invalid password">
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
    </>
  );
};

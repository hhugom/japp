import { useForm } from 'react-hook-form';
import { Box, Button, HStack, QuestionIcon, Tooltip } from 'native-base';
import React, { FC, useState } from 'react';
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
  password: Yup.string()
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,32}$/
    )
    .required(),
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
  const [isTooltipOpen, setisTooltipOpen] = useState(false);
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
          />
        </InputContainer>
        <InputContainer
          hasError={!!errors.password}
          errorText="You should use a valid password"
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
            />
            <Tooltip
              placement="left"
              label={
                'Your password must:\n- be at least 8 caracters long \n- have a lowercase and uppercase letter\n- a number\n- a special character'
              }
              isOpen={isTooltipOpen}
            >
              <Button
                position="absolute"
                right="-42px"
                p="0"
                variant="unstyled"
                onHoverOut={() => setisTooltipOpen(false)}
                onHoverIn={() => setisTooltipOpen(true)}
                onPress={() => setisTooltipOpen(!isTooltipOpen)}
              >
                <QuestionIcon
                  color={isTooltipOpen ? 'primary.dark' : 'primary.regular'}
                />
              </Button>
            </Tooltip>
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

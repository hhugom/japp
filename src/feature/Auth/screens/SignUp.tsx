import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useForm, Controller } from 'react-hook-form';
import { Box, Button, Text } from 'native-base';
import React, { FC } from 'react';
import { RootStackParamList } from '../../../types/navigation';
import { AuthInput } from '../component/AuthInput';
import { AuthLayout } from '../component/AuthLayout';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';

type SignUProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

type FormData = {
  email: string;
  password: string;
  confirmPassword: string;
};

export const SignUp: FC<SignUProps> = ({ navigation }) => {
  const schema = Joi.object<FormData>({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),
    password: Joi.string().regex(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,32}$/
    ),
    confirmPassword: Joi.ref('password'),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: joiResolver(schema) });

  const onSubmit = (data: FormData) => console.log(data);

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
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Box mb="6">
              <AuthInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Email"
              />
              {errors.email && (
                <Text color="error.regular">{errors.email?.message}</Text>
              )}
            </Box>
          )}
          name="email"
          defaultValue=""
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Box mb="6">
              <AuthInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Password"
              />
              {errors.password && (
                <Text color="error.regular">{errors.password.message}</Text>
              )}
            </Box>
          )}
          name="password"
          defaultValue=""
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Box mb="6">
              <AuthInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Confirm password"
              />
              {errors.confirmPassword && (
                <Text color="error.regular">
                  {errors.confirmPassword.message}
                </Text>
              )}
            </Box>
          )}
          name="confirmPassword"
          defaultValue=""
        />

        <Button
          rounded={0}
          px={6}
          py={3}
          maxWidth="100%"
          width="250px"
          mb={6}
          onPress={handleSubmit(onSubmit)}
        >
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

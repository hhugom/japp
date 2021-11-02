import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useForm, Controller } from 'react-hook-form';
import { Box, Button, Text } from 'native-base';
import React, { FC } from 'react';
import { RootStackParamList } from '../../../types/navigation';
import { AuthInput } from '../component/AuthInput';
import { AuthLayout } from '../component/AuthLayout';

type SignUProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;
type FormData = {
  email: string;
  password: string;
  comfirmPassword: string;
};

export const SignUp: FC<SignUProps> = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
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
            <AuthInput onBlur={onBlur} onChangeText={onChange} value={value} />
          )}
          name="email"
          defaultValue=""
        />
        {errors.email && <Text>This is required.</Text>}
        <Button onPress={handleSubmit(onSubmit)}>Créer mon compte</Button>
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

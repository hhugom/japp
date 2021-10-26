import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Box, Button, Text, FormControl } from 'native-base';
import React, { useCallback, FC } from 'react';
import { InputTypes } from '../../../constants/inputs';
import { validatePassword } from '../../../lib/passwordValidator';
import { RootStackParamList } from '../../../types/navigation';
import { validateEmail } from '../../../utils/validateEmail';
import { AuthInput } from '../component/AuthInput';
import { AuthLayout } from '../component/AuthLayout';

type SignUProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

export const SignUp: FC<SignUProps> = ({ navigation }) => {
  const [formData, setData] = React.useState(new Map<InputTypes, string>());
  const [errors, setErrors] = React.useState(new Map<InputTypes, boolean>());
  const onChange = useCallback(
    (type: InputTypes, value: string) => setData(formData.set(type, value)),
    [formData]
  );

  const validate = useCallback(() => {
    const changeableErrors = Object.assign(errors, {});
    formData.forEach((value, key) => {
      if (key === InputTypes.EMAIL) {
        validateEmail(value)
          ? changeableErrors.delete(InputTypes.EMAIL)
          : changeableErrors.set(InputTypes.EMAIL, true);
      }

      if (key === InputTypes.PASSWORD) {
        validatePassword(value)
          ? changeableErrors.delete(InputTypes.PASSWORD)
          : changeableErrors.set(InputTypes.PASSWORD, true);
      }

      if (key === InputTypes.CONFIRM_PASSWORD) {
        formData.get(InputTypes.PASSWORD) === value
          ? changeableErrors.delete(InputTypes.CONFIRM_PASSWORD)
          : changeableErrors.set(InputTypes.CONFIRM_PASSWORD, true);
      }
    });
    setErrors(changeableErrors);
  }, [errors, formData]);

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
        <FormControl
          width="250px"
          isInvalid={errors.has(InputTypes.EMAIL)}
          mb={6}
        >
          <AuthInput
            type={InputTypes.EMAIL}
            onChangeCustom={onChange}
            placeholder="Email"
          />
          <FormControl.ErrorMessage position="absolute" bottom={-20} left="0">
            <Text fontSize="xs" color="error.regular">
              Please use a valid email
            </Text>
          </FormControl.ErrorMessage>
        </FormControl>

        <FormControl
          width="250px"
          isInvalid={errors.has(InputTypes.PASSWORD)}
          mb={6}
        >
          <AuthInput
            type={InputTypes.PASSWORD}
            onChangeCustom={onChange}
            placeholder="Password"
          />
          <FormControl.ErrorMessage position="absolute" bottom={-20} left="0">
            <Text fontSize="xs" color="error.regular">
              Please use a password with at least 8 characters
            </Text>
          </FormControl.ErrorMessage>
        </FormControl>

        <FormControl
          width="250px"
          isInvalid={errors.has(InputTypes.CONFIRM_PASSWORD)}
          mb={6}
        >
          <AuthInput
            type={InputTypes.CONFIRM_PASSWORD}
            onChangeCustom={onChange}
            placeholder="Password confirmation"
          />
          <FormControl.ErrorMessage position="absolute" bottom={-20} left="0">
            <Text fontSize="xs" color="error.regular">
              Password and its confirmation should be identical
            </Text>
          </FormControl.ErrorMessage>
        </FormControl>
        <AuthInput
          type={InputTypes.CONFIRM_PASSWORD}
          onChangeCustom={onChange}
          placeholder="Confirm pasword"
          mb={6}
        />
        <Button
          onPress={validate}
          rounded={0}
          px={6}
          py={3}
          maxWidth="100%"
          width="250px"
          my={6}
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

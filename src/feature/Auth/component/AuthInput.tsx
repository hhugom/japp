import { Input } from 'native-base';
import React, { FC } from 'react';
import { ClassicAuthStepsEnum } from './ClassicAuthSteps/constant';

type AuthInputProps = {
  placeholder: string;
  onChange: (value: string) => void;
  step: ClassicAuthStepsEnum;
};
export const AuthInput: FC<AuthInputProps> = ({ placeholder, onChange }) => {
  return (
    <Input
      size="2xl"
      bgColor="secondary.light"
      color="primary.regular"
      variant="filled"
      placeholder={placeholder}
      onChangeText={onChange}
      rounded="0"
      flexGrow={2}
    />
  );
};

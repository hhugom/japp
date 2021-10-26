import { IInputProps, Input } from 'native-base';
import React, { FC, useCallback } from 'react';
import { InputTypes } from '../../../constants/inputs';

type AuthInputProps = {
  placeholder: string;
  type: InputTypes;
  onChangeCustom: (type: InputTypes, value: string) => void;
};

export const AuthInput: FC<AuthInputProps & IInputProps> = ({
  placeholder,
  type,
  onChangeCustom,
  ...props
}) => {
  const onChangeText = useCallback(
    (value: string) => {
      onChangeCustom(type, value);
    },
    [onChangeCustom, type]
  );

  return (
    <Input
      onChangeText={onChangeText}
      size="2xl"
      bgColor="secondary.light"
      color="primary.regular"
      variant="filled"
      placeholder={placeholder}
      rounded="0"
      width="250px"
      maxWidth="100%"
      {...props}
    />
  );
};

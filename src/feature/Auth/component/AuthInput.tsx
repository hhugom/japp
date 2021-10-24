import { IInputProps, Input } from 'native-base';
import React, { FC } from 'react';

type AuthInputProps = {
  placeholder: string;
};

export const AuthInput: FC<AuthInputProps & IInputProps> = ({
  placeholder,
  ...props
}) => {
  return (
    <Input
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

import { IInputProps, Input } from 'native-base';
import React, { FC } from 'react';

export const AuthInput: FC<IInputProps> = ({ ...props }) => {
  return (
    <Input
      size="2xl"
      bgColor="secondary.light"
      color="primary.regular"
      variant="filled"
      rounded="0"
      width="250px"
      maxWidth="100%"
      {...props}
    />
  );
};

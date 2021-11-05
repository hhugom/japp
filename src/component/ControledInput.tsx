import { IInputProps, Input } from 'native-base';
import React, { FC } from 'react';
import { Control, Controller } from 'react-hook-form';

type ControlledInputProps = {
  control: Control<any, any>;
  name: string;
};

export const ControledInput: FC<ControlledInputProps & IInputProps> = ({
  control,
  name,
  ...rest
}) => {
  return (
    <Controller
      control={control}
      rules={{
        required: true,
      }}
      render={({ field: { onChange, onBlur, value } }) => (
        <Input
          size="2xl"
          bgColor="secondary.light"
          color="primary.regular"
          variant="filled"
          rounded="0"
          width="250px"
          maxWidth="100%"
          defaultValue={value}
          onChangeText={onChange}
          onBlur={onBlur}
          {...rest}
        />
      )}
      name={name}
      defaultValue=""
    />
  );
};

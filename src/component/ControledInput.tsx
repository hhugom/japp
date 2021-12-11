import { IInputProps, Input } from 'native-base';
import React, { FC, forwardRef } from 'react';
import { Control, Controller } from 'react-hook-form';

type ControlledInputProps = {
  control: Control<any, any>;
  name: string;
};

export const ControledInput: FC<
  ControlledInputProps & IInputProps & React.RefAttributes<unknown>
> = forwardRef(({ control, name, ...rest }, ref) => {
  return (
    <Controller
      control={control}
      rules={{
        required: true,
      }}
      render={({
        field: { onChange, onBlur, value },
        formState: { errors },
      }) => (
        <Input
          size="2xl"
          bgColor="secondary.light"
          color="primary.regular"
          variant="filled"
          rounded="0"
          maxWidth="100%"
          borderWidth={2}
          borderColor={errors[name] ? 'error.regular' : 'transparent'}
          defaultValue={value}
          onChangeText={onChange}
          onBlur={onBlur}
          ref={ref}
          {...rest}
        />
      )}
      name={name}
      defaultValue=""
    />
  );
});

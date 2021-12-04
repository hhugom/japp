import { Button, IButtonProps, Spinner } from 'native-base';
import React, { FC } from 'react';

type DefaultButtonProps = {
  text: string;
  isLoading?: boolean;
} & IButtonProps;

export const DefaultButton: FC<DefaultButtonProps> = ({
  isLoading,
  text,
  ...rest
}) => {
  return (
    <Button
      rounded={0}
      py={3}
      px={0}
      maxWidth="100%"
      height="12"
      mb={6}
      fontSize="lg"
      fontWeight="bold"
      color="primary.light"
      display="flex"
      alignItems="center"
      {...rest}
    >
      {isLoading ? <Spinner color="primary.light" size="lg" py={1} /> : text}
    </Button>
  );
};

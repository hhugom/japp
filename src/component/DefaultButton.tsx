import { Button, IButtonProps, Text, Spinner } from 'native-base';
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
      {...rest}
    >
      <Text
        fontSize="lg"
        fontWeight="bold"
        color="primary.light"
        display="flex"
        alignItems="center"
      >
        {isLoading ? <Spinner color="primary.light" size="sm" /> : text}
      </Text>
    </Button>
  );
};

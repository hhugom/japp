import { Button, IButtonProps, Text } from 'native-base';
import React, { FC } from 'react';

type DefaultButtonProps = {
  text: string;
} & IButtonProps;

export const DefaultButton: FC<DefaultButtonProps> = ({ text, ...rest }) => {
  return (
    <Button rounded={0} py={3} px={0} maxWidth="100%" mb={6} {...rest}>
      <Text fontSize="lg" fontWeight="bold" color="primary.light">
        {text}
      </Text>
    </Button>
  );
};

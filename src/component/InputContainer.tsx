import { Box, Text } from 'native-base';
import React, { FC } from 'react';

type InputContainerProps = {
  hasError: boolean;
  errorText: string;
  children: JSX.Element;
};
export const InputContainer: FC<InputContainerProps> = ({
  hasError,
  errorText,
  children,
}) => {
  return (
    <Box mb="8" position="relative">
      {children}
      {hasError && (
        <Text
          position="absolute"
          textBreakStrategy="highQuality"
          left="0"
          top="12"
          color="error.regular"
        >
          {errorText}
        </Text>
      )}
    </Box>
  );
};

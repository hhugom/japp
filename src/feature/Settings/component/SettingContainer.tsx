import { Box, Heading } from 'native-base';
import React, { FC } from 'react';

type SettingContainerProps = {
  title: string;
  children: JSX.Element | JSX.Element[];
};

export const SettingContainer: FC<SettingContainerProps> = ({
  title,
  children,
}) => {
  return (
    <Box
      width="100%"
      borderColor="primary.dark"
      borderWidth="1"
      borderRadius="xs"
      p="2"
    >
      <Heading fontSize="l" color="headings.regular">
        {title}
      </Heading>
      {children}
    </Box>
  );
};

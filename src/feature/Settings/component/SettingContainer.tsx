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
      backgroundColor="secondary.light"
      borderRadius="xs"
      p="2"
      shadow="4"
    >
      <Heading
        fontFamily="heading"
        fontWeight={500}
        fontSize="lg"
        color="headings.light"
        pb="1"
      >
        {title}
      </Heading>
      {children}
    </Box>
  );
};

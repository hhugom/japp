import { Divider, Heading, Text, VStack } from 'native-base';
import React, { FC } from 'react';

export type SettingItemProps = {
  title: string;
  value?: string;
};

export const SettingItem: FC<SettingItemProps> = ({ title, value }) => {
  return (
    <VStack>
      <Divider my="3" opacity="25" width="90%" />
      <Heading
        fontFamily="heading"
        fontWeight={500}
        fontSize="sm"
        color="headings.light"
        pb="1"
      >
        {title}
      </Heading>
      {value ? (
        <Text fontFamily="body" color="primary.regular" fontSize="xs">
          {value}
        </Text>
      ) : (
        <Text
          fontFamily="body"
          color="primary.regular"
          fontSize="xs"
          opacity="70"
        >
          Has not been set yet
        </Text>
      )}
    </VStack>
  );
};

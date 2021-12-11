import { Heading, HStack, Text, Pressable, IPressableProps } from 'native-base';
import React, { FC } from 'react';

export type SettingItemProps = {
  title: string;
  value?: string;
} & IPressableProps;

export const SettingItem: FC<SettingItemProps> = ({
  title,
  value,
  ...props
}) => {
  return (
    <Pressable width="100%" {...props} cursor="pointer">
      <HStack
        alignItems="center"
        backgroundColor="secondary.light"
        borderRadius="2"
        py="2"
        px="2"
        mt="1"
        shadow="3"
      >
        <Heading
          fontFamily="heading"
          fontWeight={500}
          fontSize="sm"
          color="headings.light"
        >
          {title}
        </Heading>
        {value ? (
          <Text
            fontFamily="body"
            color="primary.regular"
            fontSize="sm"
            ml="auto"
          >
            {value}
          </Text>
        ) : (
          <Text
            fontFamily="body"
            color="primary.regular"
            fontSize="sm"
            opacity="70"
            ml="auto"
          >
            Undefined
          </Text>
        )}
      </HStack>
    </Pressable>
  );
};

import React, { FC } from 'react';
import { Heading, HStack, IconButton } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

type SettingModalHeaderProps = {
  title: string;
  onClose: () => unknown;
};

export const SettingModalHeader: FC<SettingModalHeaderProps> = ({
  title,
  onClose,
}) => {
  return (
    <HStack alignItems="center" backgroundColor="secondary.light">
      <Heading
        color="primary.regular"
        fontWeight={500}
        fontFamily="heading"
        fontSize="xs"
        position="relative"
        height="6"
        pl="3"
        alignItems="center"
        display="flex"
      >
        {title}
      </Heading>
      <IconButton
        _icon={{
          as: MaterialIcons,
          name: 'close',
          color: 'primary.light',
          size: 'sm',
          opacity: '50',
        }}
        onPress={onClose}
        ml="auto"
      />
    </HStack>
  );
};

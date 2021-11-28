import { Text, VStack } from 'native-base';
import React, { FC } from 'react';
import { SettingContainer } from './SettingContainer';
import { SettingItem } from './SettingItem';
import { JappUser } from 'Src/api/getUser';

type SettingsLayoutProps = {
  user: JappUser;
};

export const SettingsLayout: FC<SettingsLayoutProps> = ({ user }) => {
  console.log(user);

  return (
    <VStack
      bg="secondary.regular"
      pt={4}
      alignSelf="center"
      width="100%"
      flexGrow={2}
      maxWidth="100%"
      testID="login-container"
      alignItems="center"
      p={4}
      space={4}
    >
      <SettingContainer title={'Information'}>
        <Text
          fontFamily="body"
          fontSize="xs"
          fontWeight={500}
          color="primary.regular"
        >
          Manage your personal data like your email, your name or your profile
          picture
        </Text>
        <SettingItem title="Email address" value={user.email} />
      </SettingContainer>
      <SettingContainer title={'Wanikani'}>
        <Text
          fontFamily="body"
          fontSize="xs"
          fontWeight={500}
          color="primary.regular"
        >
          Manage your Wanikani integration parameters
        </Text>
        <SettingItem title="Api key" value={user.wanikani_api_key} />
      </SettingContainer>
      <SettingContainer title={'Bunpro'}>
        <Text
          fontFamily="body"
          fontSize="xs"
          fontWeight={500}
          color="primary.regular"
        >
          Manage your Bunpro integration parameters
        </Text>
        <SettingItem title="Api key" value={user.bunpro_api_key} />
      </SettingContainer>
    </VStack>
  );
};

import { VStack } from 'native-base';
import React, { FC } from 'react';
import { SettingContainer } from './SettingContainer';
import { SettingItem } from './SettingItem';
import { BunProSettings } from './BunproSettings';
import { WanikaniSettings } from './WanikaniSettings';
import { JappUser } from 'Src/api/getUser';

type SettingsLayoutProps = {
  user: JappUser;
};

export const SettingsLayout: FC<SettingsLayoutProps> = ({ user }) => {
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
      space={3}
    >
      <SettingContainer title={'Information'}>
        <SettingItem title="Email" value={user.email} />
        <SettingItem title="Password" value="*********" />
      </SettingContainer>
      <WanikaniSettings wanikaniKey={user.wanikani_api_key} />
      <BunProSettings bunproKey={user.bunpro_api_key} />
    </VStack>
  );
};

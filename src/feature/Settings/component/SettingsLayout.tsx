import { Text, VStack } from 'native-base';
import React, { FC } from 'react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SettingContainer } from './SettingContainer';
import { SettingItem } from './SettingItem';
import { BunProSettings } from './BunproSettings';
import { JappUser } from 'Src/api/getUser';

type FormData = {
  wanikani_api_key: string;
  bunpro_api_key: string;
};

const schema = Yup.object({
  wanikani_api_key: Yup.string(),
  bunpro_api_key: Yup.string(),
});

type SettingsLayoutProps = {
  user: JappUser;
};

export const SettingsLayout: FC<SettingsLayoutProps> = ({ user }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });

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
      <SettingContainer title={'Wanikani'}>
        <SettingItem title="Key" value={user.wanikani_api_key} />
      </SettingContainer>
      <BunProSettings bunproKey={user.bunpro_api_key} />
    </VStack>
  );
};

import { VStack } from 'native-base';
import React, { FC } from 'react';
import { JappUser } from 'Src/api/getUser';

type SettingsLayoutProps = {
  user: JappUser;
};

export const WanikaniLayout: FC<SettingsLayoutProps> = () => {
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
    />
  );
};

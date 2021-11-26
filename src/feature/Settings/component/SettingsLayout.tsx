import { Box, Text, VStack } from 'native-base';
import React from 'react';
import { SettingContainer } from './SettingContainer';

export const SettingsLayout = () => {
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
        <Text>Parameters</Text>
      </SettingContainer>
      <SettingContainer title={'Wanikani'}>
        <Text>Parameters</Text>
      </SettingContainer>
      <SettingContainer title={'Bunpro'}>
        <Text>Parameters</Text>
      </SettingContainer>
    </VStack>
  );
};

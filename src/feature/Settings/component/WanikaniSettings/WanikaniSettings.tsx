import { VStack } from 'native-base';
import React, { FC, useState } from 'react';
import { SettingContainer } from '../SettingContainer';
import { SettingItem } from '../SettingItem';
import { WanikaniKeyModal } from './WanikaniKeyModal';

type BunproSettingsProps = {
  wanikaniKey: string;
};

export const WanikaniSettings: FC<BunproSettingsProps> = ({ wanikaniKey }) => {
  const [isWanikaniKeyModalOpen, setIsWanikaniKeyModalOpen] = useState(false);
  return (
    <SettingContainer title={'Wanikani'}>
      <VStack>
        <SettingItem
          title="Key"
          value={wanikaniKey}
          onPress={() => setIsWanikaniKeyModalOpen(true)}
        />

        <WanikaniKeyModal
          wanikaniKey={wanikaniKey}
          isOpen={isWanikaniKeyModalOpen}
          onClose={() => setIsWanikaniKeyModalOpen(false)}
        />
      </VStack>
    </SettingContainer>
  );
};

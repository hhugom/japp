import { VStack } from 'native-base';
import React, { FC, useState } from 'react';
import { SettingContainer } from '../SettingContainer';
import { SettingItem } from '../SettingItem';
import { BunproKeyModal } from './BunproKeyModal';

type BunproSettingsProps = {
  bunproKey: string;
};

export const BunProSettings: FC<BunproSettingsProps> = ({ bunproKey }) => {
  const [isBunproKeyModalOpen, setIsBunproKeyModalOpen] = useState(false);
  return (
    <SettingContainer title={'Bunpro'}>
      <VStack>
        <SettingItem
          title="Key"
          value={bunproKey}
          onPress={() => setIsBunproKeyModalOpen(true)}
        />

        <BunproKeyModal
          bunproKey={bunproKey}
          isOpen={isBunproKeyModalOpen}
          onClose={() => setIsBunproKeyModalOpen(false)}
        />
      </VStack>
    </SettingContainer>
  );
};

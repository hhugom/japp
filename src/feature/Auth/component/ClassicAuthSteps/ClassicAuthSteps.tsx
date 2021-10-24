import { Box, Button } from 'native-base';
import React, { FC, useState } from 'react';
import { StringMap } from '../../../../types/global';
import { AuthInput } from '../AuthInput';
import { ClassicAuthStepsEnum } from './constant';
import { AntDesign } from '@expo/vector-icons';
import { theme } from '../../../../style';

export const ClassicAuthSteps: FC = () => {
  const [currentStep, setCurrentStep] = useState<ClassicAuthStepsEnum>(
    ClassicAuthStepsEnum.EMAIL
  );
  const [, setStepValues] = useState<StringMap<string>>({});

  const onChange = (value: string) => {
    setStepValues({ [currentStep]: value });
  };

  const onNextStepClick = () => {
    setCurrentStep(ClassicAuthStepsEnum.PASSWORD);
  };

  const inputs = {
    [ClassicAuthStepsEnum.EMAIL]: (
      <AuthInput
        width="250px"
        key={ClassicAuthStepsEnum.EMAIL}
        placeholder="Email"
        onChangeText={onChange}
      />
    ),
    [ClassicAuthStepsEnum.PASSWORD]: (
      <AuthInput
        width="250px"
        key={ClassicAuthStepsEnum.PASSWORD}
        placeholder="Password"
        onChangeText={onChange}
      />
    ),
  };

  return (
    <Box flexDir="row" width="100%" position="relative" justifyContent="center">
      {inputs[currentStep]}
      <Button
        ml={2}
        variant="subtle"
        rounded={0}
        height="100%"
        onPress={onNextStepClick}
        position="absolute"
        right={-4}
      >
        <AntDesign
          name="arrowright"
          size={24}
          color={theme.colors.secondary.light}
        />
      </Button>
    </Box>
  );
};

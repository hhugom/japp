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
        key={ClassicAuthStepsEnum.EMAIL}
        placeholder="Email"
        onChange={onChange}
        step={ClassicAuthStepsEnum.EMAIL}
      />
    ),
    [ClassicAuthStepsEnum.PASSWORD]: (
      <AuthInput
        key={ClassicAuthStepsEnum.PASSWORD}
        placeholder="Password"
        onChange={onChange}
        step={ClassicAuthStepsEnum.PASSWORD}
      />
    ),
  };

  return (
    <Box flexDir="row" width="100%">
      {inputs[currentStep]}
      <Button
        ml={2}
        variant="subtle"
        rounded={0}
        height="100%"
        onPress={onNextStepClick}
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

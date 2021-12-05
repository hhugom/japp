import { yupResolver } from '@hookform/resolvers/yup';
import { Modal, Box } from 'native-base';
import { IModalProps } from 'native-base/lib/typescript/components/composites/Modal';
import React, { FC, useCallback, useRef } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { useUpdateUser } from '../../api/updateUser';
import { SettingModalHeader } from '../SettingModalHeader';
import { ControledInput } from 'Src/component/ControledInput';
import { DefaultButton } from 'Src/component/DefaultButton';

type FormData = {
  wanikani_api_key: string;
};

const schema = Yup.object({
  wanikani_api_key: Yup.string().required(),
});

export type BunproKeyModalProps = {
  wanikaniKey?: string;
} & IModalProps;

export const WanikaniKeyModal: FC<BunproKeyModalProps> = ({
  wanikaniKey,
  ...props
}) => {
  const { updateUser } = useUpdateUser();

  const { control, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = useCallback(
    (data: FormData) => {
      updateUser({ update: data });
      props.onClose?.();
    },
    [props, updateUser]
  );

  const inputRef = useRef(null);

  return (
    <Modal {...props} initialFocusRef={inputRef} avoidKeyboard>
      <Modal.Content
        backgroundColor="secondary.regular"
        maxWidth="300px"
        marginBottom="2"
        borderRadius="2"
      >
        <SettingModalHeader
          title="Change your API key"
          onClose={props.onClose}
        />
        <Modal.Body minHeight="32" py="5" justifyContent="center">
          <ControledInput
            control={control}
            width="100%"
            key="wanikani_api_key"
            placeholder="Your api key"
            name="wanikani_api_key"
            defaultValue={wanikaniKey}
            size="lg"
            variant="outline"
            ref={inputRef}
          />
        </Modal.Body>
        <Box alignItems="center" justifyContent="center" pb="0" px="3">
          <DefaultButton
            text="Save"
            borderRadius="2"
            size="lg"
            backgroundColor="primary.darker"
            width="100%"
            fontFamily="body"
            onPress={handleSubmit(onSubmit)}
            mb={3}
          />
        </Box>
      </Modal.Content>
    </Modal>
  );
};

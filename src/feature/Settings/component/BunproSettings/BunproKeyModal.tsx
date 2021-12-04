import { yupResolver } from '@hookform/resolvers/yup';
import { Modal, Box, Heading, HStack, IconButton } from 'native-base';
import { IModalProps } from 'native-base/lib/typescript/components/composites/Modal';
import React, { FC, useCallback, useRef } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { MaterialIcons } from '@expo/vector-icons';
import { useUpdateUser } from '../../api/updateUser';
import { ControledInput } from 'Src/component/ControledInput';
import { DefaultButton } from 'Src/component/DefaultButton';

type FormData = {
  bunpro_api_key: string;
};

const schema = Yup.object({
  bunpro_api_key: Yup.string().required(),
});

export type BunproKeyModalProps = {
  bunproKey?: string;
} & IModalProps;

export const BunproKeyModal: FC<BunproKeyModalProps> = ({
  bunproKey,
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
  console.log(inputRef);

  return (
    <Modal {...props} initialFocusRef={inputRef} avoidKeyboard>
      <Modal.Content
        backgroundColor="secondary.regular"
        maxWidth="400px"
        marginBottom="2"
        borderRadius="2"
      >
        <HStack alignItems="center" backgroundColor="secondary.light">
          <Heading
            color="primary.regular"
            fontWeight={500}
            fontFamily="heading"
            fontSize="xs"
            position="relative"
            height="6"
            pl="3"
            alignItems="center"
            display="flex"
          >
            Change your API key
          </Heading>
          <IconButton
            _icon={{
              as: MaterialIcons,
              name: 'close',
              color: 'primary.light',
              size: 'sm',
              opacity: '50',
            }}
            onPress={props.onClose}
            ml="auto"
          />
        </HStack>
        <Modal.Body minHeight="24" py="5" justifyContent="center">
          <ControledInput
            control={control}
            width="100%"
            key="bunpro_api_key"
            placeholder="Your api key"
            name="bunpro_api_key"
            defaultValue={bunproKey}
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
            height="10"
            fontFamily="body"
            onPress={handleSubmit(onSubmit)}
            mb={3}
          />
        </Box>
      </Modal.Content>
    </Modal>
  );
};

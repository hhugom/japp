import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Center, HStack, Icon, Pressable, Text } from 'native-base';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

export const BottomNavigation = () => {
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();
  return (
    <HStack bg="indigo.600" alignItems="center" safeAreaBottom shadow={6}>
      <Pressable
        cursor="pointer"
        opacity={selected === 0 ? 1 : 0.5}
        py="3"
        flex={1}
        onPress={() => {
          setSelected(0);
          navigate('/');
        }}
      >
        <Center>
          <Icon
            mb="1"
            as={
              <MaterialCommunityIcons
                name={selected === 0 ? 'home' : 'home-outline'}
              />
            }
            color="white"
            size="sm"
          />
          <Text color="white" fontSize="12">
            Home
          </Text>
        </Center>
      </Pressable>
      <Pressable
        cursor="pointer"
        opacity={selected === 1 ? 1 : 0.5}
        py="2"
        flex={1}
        onPress={() => {
          setSelected(1);
          navigate('/settings');
        }}
      >
        <Center>
          <Icon
            mb="1"
            as={
              <MaterialCommunityIcons
                name={
                  selected === 0
                    ? 'account-settings-outline'
                    : 'account-settings'
                }
              />
            }
            color="white"
            size="sm"
          />
          <Text color="white" fontSize="12">
            Settings
          </Text>
        </Center>
      </Pressable>
    </HStack>
  );
};

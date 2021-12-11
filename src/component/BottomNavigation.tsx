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
        py="3"
        flex={1}
        onPress={() => {
          setSelected(1);
          navigate('/bunpro');
        }}
      >
        <Center>
          <Icon
            mb="1"
            as={
              <MaterialCommunityIcons
                name={
                  selected === 1 ? 'alpha-b-circle' : 'alpha-b-circle-outline'
                }
              />
            }
            color="white"
            size="sm"
          />
          <Text color="white" fontSize="12">
            Bunpro
          </Text>
        </Center>
      </Pressable>
      <Pressable
        cursor="pointer"
        opacity={selected === 2 ? 1 : 0.5}
        py="3"
        flex={1}
        onPress={() => {
          setSelected(2);
          navigate('/wanikani');
        }}
      >
        <Center>
          <Icon
            mb="1"
            as={
              <MaterialCommunityIcons
                name={
                  selected === 2 ? 'alpha-w-circle' : 'alpha-w-circle-outline'
                }
              />
            }
            color="white"
            size="sm"
          />
          <Text color="white" fontSize="12">
            Wanikani
          </Text>
        </Center>
      </Pressable>
      <Pressable
        cursor="pointer"
        opacity={selected === 4 ? 1 : 0.5}
        py="2"
        flex={1}
        onPress={() => {
          setSelected(4);
          navigate('/settings');
        }}
      >
        <Center>
          <Icon
            mb="1"
            as={
              <MaterialCommunityIcons
                name={
                  selected === 4
                    ? 'account-settings'
                    : 'account-settings-outline'
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

import React, { FC } from 'react';
import { registerRootComponent } from 'expo';
import firebase from 'firebase/app';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider } from 'styled-components/native';
import Home from './screens/Home/Home';
import { NativeBaseProvider } from 'native-base';
import 'firebase/auth';
import theme from './style/theme';

const firebaseConfig = {
  apiKey: 'AIzaSyAYTs3VKXzrkiKb28t94o4DfBkrDEI57A8',
  authDomain: 'japp-f0f6c.firebaseapp.com',
  projectId: 'japp-f0f6c',
  storageBucket: 'japp-f0f6c.appspot.com',
  messagingSenderId: '857205036087',
  appId: '1:857205036087:web:6537188a9c48ce17af9bb2',
  measurementId: 'G-XW15W0R33J',
};

firebase.initializeApp(firebaseConfig);

const App: FC = () => {
  const Stack = createNativeStackNavigator();

  return (
    <ThemeProvider theme={theme}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </ThemeProvider>
  );
};

export default registerRootComponent(App);

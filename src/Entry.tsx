import React, { FC, useEffect, useState } from 'react';
import { registerRootComponent } from 'expo';
import './lib/firebase';
import { NavigationContainer } from '@react-navigation/native';
import { Stack } from './lib/react-navigation';
import { ThemeProvider } from 'styled-components/native';
import Home from './feature/Home/Home';
import { SignUp, Signin } from './feature/Auth';
import { extendTheme, NativeBaseProvider } from 'native-base';
import { theme } from './style';
import firebase from './lib/firebase';
import { SplashScreen } from './component/SplashScreen/SplashScreen';

const nativeTheme = extendTheme(theme);

const App: FC = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<firebase.User | null>();

  // Handle user state changes
  function onAuthStateChanged(newUser: firebase.User | null) {
    setUser(newUser);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  });

  if (initializing) {
    return <SplashScreen />;
  }

  return (
    <ThemeProvider theme={theme}>
      <NativeBaseProvider theme={nativeTheme}>
        <NavigationContainer>
          <Stack.Navigator>
            {user ? (
              <Stack.Screen name="Home" component={Home} />
            ) : (
              <>
                <Stack.Screen
                  name="SignIn"
                  component={Signin}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="SignUp"
                  component={SignUp}
                  options={{ headerShown: false }}
                />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </ThemeProvider>
  );
};

export default registerRootComponent(App);

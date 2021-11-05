import './lib/firebase';
import React, { FC, useEffect, useState } from 'react';
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { Stack } from './lib/react-navigation';
import { ThemeProvider } from 'styled-components/native';
import { Home } from './feature/Home/Home';
import { SignUp, Signin } from './feature/Auth';
import { extendTheme, NativeBaseProvider } from 'native-base';
import { theme } from './style';
import { getAuth } from '@firebase/auth';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SplashScreen } from './component/SplashScreen/SplashScreen';
import { User } from '@firebase/auth';
import { firebaseApp } from './lib/firebase';

// Create a client
const queryClient = new QueryClient();
const nativeTheme = extendTheme(theme);

const App: FC = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<User | null>();

  // Handle user state changes
  function onAuthStateChanged(newUser: User | null) {
    setUser(newUser);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber =
      getAuth(firebaseApp).onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  });

  if (initializing) {
    return <SplashScreen />;
  }

  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
};

export default registerRootComponent(App);

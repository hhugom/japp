import './lib/firebase/firebase-app';
import React, { FC, useEffect, useState } from 'react';
import { registerRootComponent } from 'expo';
import { NativeRouter } from 'react-router-native';
import { ThemeProvider } from 'styled-components/native';
import { NativeBaseProvider, extendTheme } from 'native-base';
import { QueryClient, QueryClientProvider } from 'react-query';
import { User } from '@firebase/auth';
import { useFonts } from '@expo-google-fonts/inter';
import { theme } from './style';
import { auth } from './lib/firebase';
import { ApplicationRoutes } from './routes';
import { SplashScreen } from './component/SplashScreen';
import { BottomNavigation } from './component/BottomNavigation';

// Create a client
const queryClient = new QueryClient();
const nativeTheme = extendTheme(theme);

const App: FC = () => {
  const [fontsLoaded] = useFonts({
    Catamaran: require('./assets/Catamaran-Light.ttf'),
    Poppins: require('./assets/Poppins-Bold.ttf'),
  });

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  // Handle user state changes
  function onAuthStateChanged(newUser: User | null) {
    if (initializing && fontsLoaded) {
      setInitializing(false);
    }
    setUser(newUser);
  }

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <NativeBaseProvider theme={nativeTheme}>
          {initializing ? (
            <SplashScreen />
          ) : (
            <NativeRouter>
              <ApplicationRoutes />
              {user && <BottomNavigation />}
            </NativeRouter>
          )}
        </NativeBaseProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default registerRootComponent(App);

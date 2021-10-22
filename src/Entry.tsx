import React, { FC } from 'react';
import { registerRootComponent } from 'expo';
import './lib/firebase';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider } from 'styled-components/native';
import Home from './feature/Home/Home';
import { extendTheme, NativeBaseProvider } from 'native-base';
import theme from './style/theme';
import { colors } from './style/colors';
import { typography } from './style/typography';
import { sizes } from './style/sizes';

const nativeTheme = extendTheme({ colors, sizes, typography });

const App: FC = () => {
  const Stack = createNativeStackNavigator();

  return (
    <ThemeProvider theme={theme}>
      <NativeBaseProvider theme={nativeTheme}>
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

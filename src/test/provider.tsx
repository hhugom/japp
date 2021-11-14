import { NativeBaseProvider, extendTheme } from 'native-base';
import React, { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { theme } from '../style';

const queryClient = new QueryClient();
const nativeTheme = extendTheme(theme);

type TestProviderProps = {
  children: JSX.Element | JSX.Element[];
};

const inset = {
  frame: { x: 0, y: 0, width: 0, height: 0 },
  insets: { top: 0, left: 0, right: 0, bottom: 0 },
};

export const TestProvider: FC<TestProviderProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider theme={nativeTheme} initialWindowMetrics={inset}>
        {children}
      </NativeBaseProvider>
    </QueryClientProvider>
  );
};

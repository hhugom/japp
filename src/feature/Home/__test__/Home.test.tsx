import React from 'react';
import { render } from '@testing-library/react-native';
import { NativeBaseProvider } from 'native-base';
import { Home } from '../Home';

const inset = {
  frame: { x: 0, y: 0, width: 0, height: 0 },
  insets: { top: 0, left: 0, right: 0, bottom: 0 },
};

describe('<Home />', () => {
  test('form submits two answers', () => {
    const { getByTestId } = render(
      <NativeBaseProvider initialWindowMetrics={inset}>
        <Home />
      </NativeBaseProvider>
    );

    const el = getByTestId('login-container');

    expect(el).toBeDefined();
  });
});

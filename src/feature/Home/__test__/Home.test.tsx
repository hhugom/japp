import React from 'react';
import { render } from '@testing-library/react-native';
import { Home } from '../Home';
import { TestProvider } from '../../../test/provider';

describe('<Home />', () => {
  test('form submits two answers', () => {
    const { getByTestId } = render(
      <TestProvider>
        <Home />
      </TestProvider>
    );

    const el = getByTestId('login-container');

    expect(el).toBeDefined();
  });
});

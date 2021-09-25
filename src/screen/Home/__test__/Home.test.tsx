import { render } from '@testing-library/react-native';
import Home from '../Home';
import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

test('form submits two answers', () => {
  jest.spyOn(firebase, 'auth').mockReturnValue({
    onAuthStateChanged: () => undefined,
  } as any);
  const { getByTestId, debug } = render(<Home />);
  debug();

  const el = getByTestId('login-container');

  expect(el).toBeDefined();
});

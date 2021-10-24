import { DefaultTheme } from 'styled-components/native';
import { colors } from './colors';
import { typography } from './typography';
import { sizes } from './sizes';

export const theme: DefaultTheme = {
  colors,
  fontSizes: typography.fontSizes,
  fontWeights: typography.fontWeights,
  sizes,
};

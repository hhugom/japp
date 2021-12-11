import { DefaultTheme } from 'styled-components/native';
import { colors } from './colors';
import { typography } from './typography';
import { sizes } from './sizes';
import { fontConfig, fonts } from './fonts';

export const theme: DefaultTheme = {
  colors,
  fontSizes: typography.fontSizes,
  fontWeights: typography.fontWeights,
  sizes,
  fontConfig,
  fonts,
};

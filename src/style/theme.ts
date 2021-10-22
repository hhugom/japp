import { DefaultTheme } from 'styled-components/native';
import { colors } from './colors';
import { typography } from './typography';
import { sizes } from './sizes';
// Define what props.theme will look like
const theme: DefaultTheme = {
  colors,
  typography,
  sizes,
};

export default theme;

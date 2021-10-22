// import original module declarations
import 'styled-components';
import { ColorStructure } from './colors';
import { TypographyStructure } from './typography';
import { SizesStructure } from './sizes';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      blue: ColorStructure;
      violet: ColorStructure;
      teal: ColorStructure;
    };
    typography: TypographyStructure;
    sizes: SizesStructure;
  }
}

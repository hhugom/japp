// import original module declarations
import 'styled-components';
import { ColorStructure } from './colors';
import { FontSizeStructure, FontWeightStructure } from './typography';
import { SizesStructure } from './sizes';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: ColorStructure;
      secondary: ColorStructure;
      success: ColorStructure;
      error: ColorStructure;
      headings: ColorStructure;
    };
    fontSizes: FontSizeStructure;
    fontWeights: FontWeightStructure;
    sizes: SizesStructure;
  }
}

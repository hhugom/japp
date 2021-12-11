export type ColorStructure = {
  regular: string;
  light: string;
  dark: string;
  darker?: string;
};

export const colors = {
  primary: {
    light: '#EBF8FF',
    regular: '#ADE1FF',
    dark: '#70CBFF',
    darker: '#0AA5FF',
  },
  secondary: {
    light: '#3E4565',
    regular: '#24283B',
    dark: '#101119',
  },
  headings: {
    light: '#F2ECFD',
    regular: '#CCB4F8',
    dark: '#A67CF3',
  },
  success: {
    light: '#D3F3CE',
    regular: '#9EE493',
    dark: '#7BDA6C',
  },
  error: {
    light: '#E79C9C',
    regular: '#DB6B6B',
    dark: '#CF3A3A',
  },
};

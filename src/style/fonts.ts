export const fontConfig: FontConfigStructure = {
  Poppins: {
    500: {
      normal: 'Poppins',
    },
  },
  Catamaran: {
    500: {
      normal: 'Catamaran',
    },
  },
};

export const fonts: FontsStructure = {
  heading: 'Poppins',
  body: 'Catamaran',
};

export type FontsStructure = {
  heading?: string;
  body?: string;
  mono?: string;
};

type FontWeights = {
  normal?: string;
  italic?: string;
};

type Font = {
  500: FontWeights;
};

export type FontConfigStructure = {
  Poppins: Font;
  Catamaran: Font;
};

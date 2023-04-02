import 'styled-components';

// and extend it
declare module 'styled-components' {
  export interface DefaultTheme {
    font: {
      size: {
        xs: string;
        sm: string;
        md: string;
        ig: string;
        xl: string;
        xl2: string;
        xl3: string;
        xl4: string;
        xl5: string;
        xl6: string;
      };
      weight: {
        thin: string;
        extraLight: string;
        light: string;
        regular: string;
      };
      family: {
        primary: string;
        secondary: string;
        tertiary: string;
      };
    };
    color: {
      primary: string;
      secondary: string;
      tertiary: string;
      elements: string;
      additional: string;
      background: string;
      primaryText: string;
      secondaryText: string;
    };
    screenSize: {
      mobile: string;
      small: string;
      default: string;
      big: string;
    };
  }
}

export const theme = {
  font: {
    weight: {
      thin: '100',
      extraLight: '200',
      light: '300',
      regular: '400',
    },
    size: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      ig: '1.125rem',
      xl: '1.25rem',
      xl2: '1.5rem',
      xl3: '2rem',
      xl4: '2.25rem',
      xl5: '3rem',
      xl6: '3.7rem',
    },
    family: {
      primary: `'Montserrat', sans-serif`,
      secondary: ``,
      tertiary: ` `,
    },
  },
  color: {
    primary: '#1F232E',
    secondary: '#bbc0d1',
    tertiary: '#222733',
    elements: '#7D8DBA',
    additional: '#d2d0d8',
    background: '#222733',
    primaryText: '#ffffff',
    secondaryText: '#16161d',
  },
  screenSize: {
    mobile: '600px',
    small: '767px',
    default: '1025px',
    big: '1441px',
  },
};

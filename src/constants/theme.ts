import { Theme_I } from '@/interfaces/ThemeInterface';

export const lightTheme: Theme_I = {
  mode: 'light',
  palette: {
    border: {
      b1: '#E7E7E7',
      b2: '#E7E7E7',
      b3: '',
    },
    borderRadius: {
      b1: '4px',
      b2: '8px',
      b3: '12px',
      b4: '16px',
      b5: '20px',
    },
    button: {
      primary: {
        main: '#416AFF',
        hover: '#263BFC',
      },
      grey: {
        main: '#F4F4F4',
        hover: '#EBEBEB',
      },
      lightGrey: {
        main: '#F9F9F9',
        hover: '#EBEBEB',
      },
      radius: '8px',
    },
    divider: {
      d1: '#00000014',
    },
    background: {
      bg1: '#ffffff',
      bg2: '#f9f9fa',
      bg3: '#f2f2f2',
      bg4: '#ffffff',
      bg5: '#f2f2f2',
    },
    text: {
      t1: '#000000',
      t2: '#757575',
      t3: '#A8A8A8',
      primary: '#416AFF',
      disabled: '#b3b3b3',
    },
    primary: {
      light: '#E2E8FE',
      main: '#4885FF',
      dark: '#263BFC',
    },
    secondary: {
      light: '',
      main: '#F4F4F4',
      dark: '#EBEBEB',
    },
    gray: {
      light: '',
      main: '#494949',
      dark: '#181818',
    },
    black: {
      light: '#212121',
      main: '#000',
      dark: undefined,
    },
    white: {
      light: undefined,
      main: '#fff',
      dark: undefined,
    },
    error: {
      light: '#FAA',
      main: '#FF5757',
      dark: '#CF3333',
    },
    warning: {
      light: 'rgba(255, 214, 0, 0.20)',
      main: '#FF8D07',
      dark: '',
    },
    info: {
      light: 'rgba(72, 133, 255, 0.20)',
      main: '#4885FF',
      dark: '',
    },
    success: {
      light: 'rgba(51, 194, 0, 0.20)',
      main: '#1CC54C',
      dark: '',
    },
  },
  shadows: {
    s1: '0px 0px 48px rgba(0, 0, 0, 0.04)',
    s2: '0px 4px 48px rgba(0, 0, 0, 0.08)',
    s3: '0px 0px 48px rgba(0, 0, 0, 0.16)',
    s4: '0px 3px 15px rgba(0, 0, 0, 0.05)',
  },
};

export const darkTheme: Theme_I = {
  mode: 'dark',
  palette: {
    border: {
      b1: '#212121',
      b2: '#353535',
      b3: '',
    },
    borderRadius: {
      b1: '4px',
      b2: '8px',
      b3: '12px',
      b4: '16px',
      b5: '20px',
    },
    divider: {
      d1: '#ffffff1a',
    },
    button: {
      primary: {
        main: '#4885FF',
        hover: '#477BFF',
      },
      grey: {
        main: '#353535',
        hover: '#535353',
      },
      lightGrey: {
        main: '#4B4B4B',
        hover: '#575757',
      },
      radius: '8px',
    },
    background: {
      bg1: '#171717',
      bg2: '#0C0C0C',
      bg3: '#212121',
      bg4: '#353535',
      bg5: '#4B4B4B',
    },
    text: {
      t1: '#FFFFFF',
      t2: '#BFBFBF',
      t3: '#8F8F8F',
      primary: '#359dff',
      disabled: '#5d5d5d',
    },
    primary: {
      light: '#1D2B5C',
      main: '#416AFF',
      dark: '#477BFF',
    },
    secondary: {
      light: '',
      main: '',
      dark: '',
    },
    gray: {
      light: '',
      main: '',
      dark: '#181818',
    },
    black: {
      light: undefined,
      main: '',
      dark: undefined,
    },
    white: {
      light: undefined,
      main: '#fff',
      dark: undefined,
    },
    error: {
      light: '',
      main: '#FF5757',
      dark: '#CF3333',
    },
    warning: {
      light: 'rgba(255, 214, 0, 0.20)',
      main: '#FFAB00',
      dark: '',
    },
    info: {
      light: 'rgba(72, 133, 255, 0.20)',
      main: '#4885FF',
      dark: '',
    },
    success: {
      light: 'rgba(51, 194, 0, 0.20)',
      main: '#1CC54C',
      dark: '',
    },
  },
  shadows: {
    s1: 'none',
    s2: 'none',
    s3: 'none',
    s4: 'none',
  },
};

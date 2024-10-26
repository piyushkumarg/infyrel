export type ThemeType_T = 'light' | 'dark';

export interface ThemeState_I {
  theme: ThemeType_T;
}

export interface Theme_I {
  mode: string;
  palette: {
    border: {
      b1: string;
      b2: string;
      b3: string;
    };
    borderRadius: {
      b1: string;
      b2: string;
      b3: string;
      b4: string;
      b5: string;
    };
    divider: {
      d1: string;
    };
    button: {
      primary: {
        main: string;
        hover: string;
      };
      grey: {
        main: string;
        hover: string;
      };
      lightGrey: {
        main: string;
        hover: string;
      };
      radius: string;
    };
    background: {
      bg1: string;
      bg2: string;
      bg3: string;
      bg4: string;
      bg5: string;
      bg6?: string;
    };
    text: {
      t1: string;
      t2: string;
      t3: string;
      primary: string;
      disabled: string;
    };
    primary: {
      light: string;
      main: string;
      dark: string;
    };
    secondary: {
      light: string;
      main: string;
      dark: string;
    };
    gray: {
      light: string;
      main: string;
      dark: string;
    };
    black: {
      light?: string;
      main: string;
      dark?: string;
    };
    white: {
      light?: string;
      main: string;
      dark?: string;
    };
    error: {
      light: string;
      main: string;
      dark: string;
    };
    warning: {
      light: string;
      main: string;
      dark: string;
    };
    info: {
      light: string;
      main: string;
      dark: string;
    };
    success: {
      light: string;
      main: string;
      dark: string;
    };
  };
  shadows: {
    s1: string;
    s2: string;
    s3: string;
    s4: string;
  };
}

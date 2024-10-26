'use client';
import { Theme_I } from '@/interfaces/ThemeInterface';
import { store, useAppSelector } from '@/redux/store';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '@/constants/theme';

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    // All providers if we want to use any extra like  redux , context or more
    <Provider store={store}>
      <AppThemeWrapper>{children}</AppThemeWrapper>
    </Provider>
  );
}

function AppThemeWrapper({ children }: { children: React.ReactNode }) {
  const { theme: themeMode } = useAppSelector((state) => state.theme);
  const theme: Theme_I = themeMode === 'light' ? lightTheme : darkTheme;

  console.log('theme', theme);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

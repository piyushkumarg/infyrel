import { ThemeState_I } from '@/interfaces/ThemeInterface';
import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

// Define the initial state using that type
const initialState: ThemeState_I = {
  theme: 'dark',
};

export const themeSlice = createSlice({
  name: 'Theme',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
      cookies.set('theme', action.payload, { maxAge: 1000000 });
    },
    toggleTheme: (state) => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
      cookies.set('theme', state.theme, { maxAge: 1000000 });
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleTheme, setTheme } = themeSlice.actions;

export default themeSlice.reducer;

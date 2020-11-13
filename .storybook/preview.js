import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../src/components/ui/Theme/theme';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={defaultTheme}>
      <Story />
    </ThemeProvider>
  )
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
};

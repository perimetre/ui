import { addDecorator } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import '../src/styles/globals.css';

addDecorator(jsxDecorator);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
};

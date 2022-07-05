// Ref: https://tailwindcss.com/docs/configuration

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,css}', './.storybook/**/*.{js,ts,jsx,tsx,css}'],
  presets: [require('./src/presets/default-preset')],
  safelist: ['cursor-col-resize']
};

// Ref: https://tailwindcss.com/docs/configuration
module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx,css}', './.storybook/**/*.{js,ts,jsx,tsx,css}'],
  darkMode: false, // or 'media' or 'class'
  presets: [require('./src/presets/default-preset')]
};

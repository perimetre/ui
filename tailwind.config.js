// Ref: https://tailwindcss.com/docs/configuration
module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  presets: [require('./src/presets/default-preset')]
};

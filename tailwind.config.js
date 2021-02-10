// Ref: https://tailwindcss.com/docs/configuration
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  presets: [require('./src/presets/default-preset')]
};

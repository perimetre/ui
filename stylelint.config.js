module.exports = {
  extends: ['stylelint-config-recommended', 'stylelint-config-styled-components'],
  rules: {
    // Fixes tailwind specific at
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen']
      }
    ],
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null
  }
};

module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'plugin:jsdoc/recommended',
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:react/recommended',
    'prettier/react',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended' // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  plugins: ['import'],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    }
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto' // Fixes mismatching windows/unix file end of lines
      }
    ],
    'jsdoc/require-jsdoc': [
      2,
      {
        require: {
          ArrowFunctionExpression: true,
          ClassDeclaration: true,
          ClassExpression: true,
          FunctionDeclaration: true,
          FunctionExpression: true,
          MethodDefinition: true
        }
      }
    ],
    'jsdoc/require-description': [2],
    'jsdoc/require-returns-type': 'off',
    'jsdoc/require-param-type': 'off',
    'import/no-default-export': ['error'] // DO NOT REMOVE - Storybook docgen requires all components to be named. Or else its properties won't show up. It's also a good practice
  },
  settings: {
    react: {
      version: 'detect' // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    jsdoc: {
      mode: 'typescript'
    }
  }
};

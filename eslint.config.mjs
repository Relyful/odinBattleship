import globals from "globals";
import jest from 'eslint-plugin-jest';

export default [
  {
    files: ["src/**/*"],
    languageOptions: { 
      globals: globals.browser 
    },
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
      "prefer-const": "error"
    },
  },
  {
    files: ["tests/**"],
    ...jest.configs['flat/recommended'],
    rules: {
      ...jest.configs['flat/recommended'].rules,
      'jest/prefer-expect-assertions': 'off',
    }
  }
];
module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'airbnb-typescript',
    'prettier',
  ],
  plugins: ['react-hooks'],
  rules: {
    "import/no-extraneous-dependencies": 'off',
    "import/extensions": 'off',
    'flowtype/no-types-missing-file-annotation': 0,
    'import/no-unresolved': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/require-default-props': 'off',
    '@typescript-eslint/object-curly-spacing': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        endOfLine: 'auto',
      },
    ],
  },
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
};

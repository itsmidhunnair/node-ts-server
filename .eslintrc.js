module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  env: {
    browser: true,
    es2021: true,
    node: true,
    commonjs: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  overrides: [
    {
      // files: ['.eslintrc.{js,cjs}'],
      files: ['*.ts', '*.tsx'], // Add TypeScript files
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    '@typescript-eslint/no-unused-vars': ['off'],
    '@typescript-eslint/no-explicit-any': 'warn',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'quote-props': ['warn', 'as-needed'],
    'linebreak-style': ['error', 'unix'],
    'no-multiple-empty-lines': 'error',
    'prefer-const': 'warn',
    'no-var': 'error',
    'no-console': 'warn',
    'prettier/prettier': 'warn',
  },
}

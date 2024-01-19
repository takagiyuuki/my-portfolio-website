/** @type {import('eslint').ESLint.ConfigData} */

const config = {
  root: true,
  extends: [
    'eslint:recomended',
    'next/core-web-vitals',
    'prettier',
    'plugin:tailwindcss/recommended',
    'plugin:@typescript-eslint/recommended', // (A)
    'plugin:@typescript-eslint/recommended-requiring-type-checking', // (B)
  ],
  plugins: [
    'tailwindcss',
    'unused-imports',
    'import',
    '@typescript-eslint',
    'html',
    'markdown',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { project: './tsconfig.json' },
  rules: {
    'unused-imports/no-unused-imports': 'error',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling'],
          'object',
          'type',
          'index',
        ],
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        pathGroups: [
          {
            pattern: '@/utils/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/libs/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/hooks/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/components/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/const/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/types/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/test/**',
            group: 'internal',
            position: 'before',
          },
        ],
      },
    ],
  },
};

module.exports = config;

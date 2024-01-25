/** @type {import('prettier').Config} */

const config = {
  plugins: ['prettier-plugin-tailwindcss'],
  printWidth: 80,
  tabWidth: 2,
  trailingComma: 'es5',
  semi: true,
  singleQuote: true,
  bracketSameLine: false,
  bracketSpacing: true,
  quoteProps: 'as-needed',
};

module.exports = config;

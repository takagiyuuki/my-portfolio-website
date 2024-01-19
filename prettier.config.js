/** @type {import('prettier').Config} */

const config = {
  plugins: ['prettier-plugin-tailwindcss'],
  printWidth: 90,
  tabWidth: 2,
  trailingComma: 'es5',
  semi: true,
  singleQuote: true,
  jsxSingleQuote: true,
  jsxBracketSameLine: false,
  bracketSpacing: true,
  quoteProps: 'as-needed',
};

module.exports = config;

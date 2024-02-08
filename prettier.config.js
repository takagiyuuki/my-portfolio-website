/** @type {import('prettier').Config} */

const config = {
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindcss: {
    tailwindFunctions: ["clsx"],
  },
  printWidth: 80,
  tabWidth: 2,
  trailingComma: 'es5',
  semi: true,
  singleQuote: true,
  jsxSingleQuote: true,
  bracketSameLine: false,
  bracketSpacing: true,
  quoteProps: 'as-needed',
  singleAttributePerLine: true,
};

module.exports = config;

/** @type {import("prettier").Config} */
module.exports = {
    plugins: [require.resolve('prettier-plugin-tailwindcss')],
    printWidth: 100,
    tabWidth: 4,
    useTabs: false,
    semi: true,
    singleQuote: true,
    quoteProps: 'as-needed',
    jsxSingleQuote: false,
    trailingComma: 'all',
    bracketSpacing: true,
    arrowParens: 'always',
};

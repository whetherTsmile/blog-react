// prettier.config.js
module.exports = {
  printWidth: 80,
  // "tabWidth": 2,
  semi: false,
  // "singleQuote": true,
  // "trailingComma": "none",
  bracketSpacing: true,
  bracketSameLine: true,
  // "arrowParens": "always"
  plugins: [require("prettier-plugin-tailwindcss")],
}

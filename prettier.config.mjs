// @ts-check

/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
const config = {
  printWidth: 80,
  tabWidth: 2,
  singleQuote: false,
  semi: true,
  bracketSpacing: true,
  quoteProps: "consistent",
  trailingComma: "es5",
  arrowParens: "always",
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-packagejson",
  ],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderTypeScriptVersion: "5.4.5",
  importOrder: [
    "<BUILTIN_MODULES>", // Node.js built-in modules
    "",
    "^react$",
    "",
    "<THIRD_PARTY_MODULES>", // Imports not matched by other special words or groups.
    "",
    "^(@|@api|@assets|@components|@styles|@helpers)(/.*)$",
    "",
    "^[.]", // relative imports
    "^(?!.*[.]css$)[./].*$",
    ".css$",
  ],
};

export default config;
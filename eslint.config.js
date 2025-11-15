const { defineConfig } = require("eslint/config");
const globals = require("globals");
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const eslintPluginPrettyierRecommended = require('eslint-plugin-prettier/recommended');

module.exports = defineConfig([
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPluginPrettyierRecommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json",
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    files: ["**/*.ts"],
    rules: {},
  },
]);
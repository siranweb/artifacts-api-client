const { defineConfig } = require("eslint/config");
const globals = require("globals");
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");

module.exports = defineConfig([
  eslint.configs.recommended, // Basic ESLint recommended rules
  ...tseslint.configs.recommended, // TypeScript ESLint recommended rules
  {
    languageOptions: {
      globals: {
        ...globals.browser, // Or other environments like node
      },
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json", // Path to your tsconfig.json
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"], // Files to lint
    rules: {
      // Your custom rules here
    },
  },
]);
import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginPrettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

/** @type {import('eslint').Linter.config[]} */
export default [
  {
    files: ["client/**", "server/**"],
    ignores: ["node_modules/**", "dist/**", "build/**"],
  },
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
  },

  // Recommended rules for JavaScript
  pluginJs.configs.recommended,

  // Recommended rules for TypeScript
  ...tseslint.configs.recommended,

  // Recommended rules for React
  pluginReact.configs.flat.recommended,

  // Custom rules and ignores
  {
    rules: {
      "no-unused-vars": "warn",
      eqeqeq: "error",
      "react/react-in-jsx-scope": "off",
    },
  },
  {
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      ...prettierConfig.rules, // Disable ESLint rules conflicting with Prettier
      "prettier/prettier": "error", // Enforce Prettier formatting
    },
  },
];

import js from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import globals from "globals";

const eslintConfig = [
  {
    ignores: ["coverage", "node_modules"],
  },
  js.configs.recommended,
  prettierConfig,
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        ...globals.node,
        ...globals.es2021,
      },
    },
    rules: {
      eqeqeq: "error",
      "no-var": "error",
      "no-console": "off",
      "require-await": "warn",
      "no-unused-vars": "warn",
      "no-inline-comments": "off",
      "no-duplicate-imports": "warn",
      "array-callback-return": "off",
    },
  },
];

export default eslintConfig;

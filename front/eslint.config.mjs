import js from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import eslintPluginImport from "eslint-plugin-import";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import eslintPluginTestingLibrary from "eslint-plugin-testing-library";
import eslintPluginJest from "eslint-plugin-jest";
import eslintPluginQuery from "@tanstack/eslint-plugin-query";
import globals from "globals";
import tseslint from "typescript-eslint";

const eslintConfig = [
  {
    ignores: ["dist", "build", "coverage", "node_modules"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettierConfig,
  {
    files: ["src/**/*.{js,ts,jsx,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
    plugins: {
      import: eslintPluginImport,
      react: eslintPluginReact,
      "react-hooks": eslintPluginReactHooks,
      "testing-library": eslintPluginTestingLibrary,
      "@tanstack/query": eslintPluginQuery,
    },
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
        typescript: {
          project: "./tsconfig.json",
        },
      },
    },
    rules: {
      ...eslintPluginReact.configs.recommended.rules,
      ...eslintPluginReact.configs["jsx-runtime"].rules,
      ...eslintPluginReactHooks.configs.recommended.rules,
      eqeqeq: "error",
      "no-var": "error",
      "no-console": "off",
      "require-await": "warn",
      "no-unused-vars": "off",
      "no-inline-comments": "off",
      "import/no-unresolved": "warn",
      "no-duplicate-imports": "warn",
      "array-callback-return": "off",
      "react-hooks/exhaustive-deps": "off",
      "@tanstack/query/exhaustive-deps": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
  {
    files: ["**/*.test.{js,ts,jsx,tsx}", "**/__tests__/**/*.{js,ts,jsx,tsx}"],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    plugins: {
      "testing-library": eslintPluginTestingLibrary,
      jest: eslintPluginJest,
    },
    rules: {
      "testing-library/no-unnecessary-act": ["off", { isStrict: true }],
      "jest/expect-expect": "warn",
      "jest/no-disabled-tests": "warn",
      "jest/no-identical-title": "error",
      "jest/prefer-to-have-length": "warn",
      "jest/valid-expect": "error",
    },
  },
];

export default eslintConfig;

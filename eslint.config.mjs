import js from "@eslint/js";
import nextVitals from "eslint-config-next/core-web-vitals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  js.configs.recommended,
  ...nextVitals,

  {
    files: ["**/*.{js,jsx,ts,tsx}"],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },

    rules: {
      eqeqeq: ["error", "always"],
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "no-unreachable": "error",
      "no-shadow": "error",
      "no-use-before-define": "error",
      "no-constant-condition": "error",

      "no-console": "error",
      "no-debugger": "error",
      "no-alert": "error",
      "no-var": "error",
      "prefer-const": "error",
      "no-plusplus": "error",

      curly: ["error", "all"],
      semi: ["error", "always"],
      indent: ["error", 2],
      "comma-dangle": ["error", "always-multiline"],
      "object-shorthand": ["error", "always"],
      "arrow-body-style": ["error", "as-needed"],

      "max-depth": ["error", 3],
      "max-params": ["error", 3],
      // complexity: ["error", 8],

      "prefer-template": "error",
      "prefer-destructuring": ["error", { object: true, array: true }],
      "prefer-arrow-callback": "error",
      "no-duplicate-imports": "error",
      "no-nested-ternary": "error",
      "no-useless-concat": "error",

      "array-callback-return": "error",
      "no-await-in-loop": "error",

      "no-implicit-coercion": "error",
      radix: ["error", "always"],

      "newline-before-return": "error",
    },
  },
]);

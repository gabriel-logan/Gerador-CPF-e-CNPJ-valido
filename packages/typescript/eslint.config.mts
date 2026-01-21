import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
export default defineConfig([
  {
    ignores: ["dist", "node_modules", "types"],
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        project: "tsconfig.eslint.json",
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "no-else-return": ["error", { allowElseIf: false }],
      "consistent-return": "error",
      "no-console": "warn",
      "@typescript-eslint/typedef": [
        "error",
        {
          variableDeclaration: true,
          memberVariableDeclaration: true,
        },
      ],
      "@typescript-eslint/prefer-readonly": "error",
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/explicit-member-accessibility": [
        "error",
        {
          accessibility: "explicit",
          overrides: {
            accessors: "explicit",
            constructors: "no-public",
            methods: "explicit",
            properties: "explicit",
            parameterProperties: "explicit",
          },
        },
      ],
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/consistent-type-exports": "error",
      "@typescript-eslint/no-unnecessary-type-arguments": "off",
    },
  },
  tseslint.configs.strictTypeChecked,
  eslintPluginPrettierRecommended,
]);

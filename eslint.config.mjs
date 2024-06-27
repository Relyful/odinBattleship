import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {
    languageOptions: { globals: globals.browser },
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
      "prefer-const": "error"
    },
    overrides: [
      {
          files: ["webpack.*.js"],
          rules: {
              "no-undef": "off"
          }
      }
  ]
  },
  pluginJs.configs.recommended,
];
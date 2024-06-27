import globals from "globals";

export default [
  {
    files: ["src/**/*"],
    // ignores: [
    //   "**/*.test.*",
    //   "webpack.*.js",
    // ],
    languageOptions: { 
      globals: globals.browser 
    },
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
      "prefer-const": "error"
    },
  },
];
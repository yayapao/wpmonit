module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    // disable function params should be explicit
    "@typescript-eslint/explicit-module-boundary-types": "off",
    // disable some specific types verify
    "@typescript-eslint/ban-types": [0],
    // allow to use any
    "@typescript-eslint/no-explicit-any": [0],
    "@typescript-eslint/no-var-requires": [0],
    semi: ["error", "never"],
    camelcase: 0,
  },
};

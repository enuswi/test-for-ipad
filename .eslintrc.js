module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  env: {
    browser: true,
    es2021: true,
  },
  //parserOptions: {
  //  ecmaVersion: "latest",
  //  sourceType: "module",
  //  project: "./tsconfig.eslint.json",
  //  tsconfigRootDir: __dirname,
  //},
  ignorePatterns: ["dist", "node_modules", "jest.config.js"],
  rules: {
    "import/prefer-default-export": "off",
    "@typescript-eslint/quotes": ["error", "double"],
  },
};
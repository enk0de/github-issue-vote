module.exports = {
  root: true,
  plugins: ["prettier"],
  extends: ["airbnb-base", "airbnb-typescript/base"],
  env: {
    es6: true,
    node: true,
  },
  rules: {
    "import/extensions": 0,
    "import/prefer-default-export": 0
  },
  parserOptions: {
    project: "./packages/*/tsconfig.json",
  },
  ignorePatterns: ["**/dist/**", "**/webpack.config.js"],
};
 
module.exports = {
  parser: "babel-eslint",
  extends: "airbnb",
  plugins: ["react", "jsx-a11y", "import"],

  rules: {
    quotes: ["error", "double"],
    "comma-dangle": ["error", "never"],
    semi: ["error", "always"],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/jsx-max-props-per-line": [1, { maximum: 1 }]
  },
  settings: {
    "import/resolver": {
      webpack: {
        config: "webpack.config.js"
      }
    }
  },
  env: {
    browser: true
  }
};

module.exports = {
  extends: ["base"],
  env: {
    node: true,
    es6: true,
  },
  overrides: [
    {
      files: ["**/__tests__/**/*"],
      env: {
        jest: true,
      },
    },
  ],
};

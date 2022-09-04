module.exports = {
    env: {
      commonjs: true,
      es6: true,
      node: true,
      mocha: true,
    },
    extends: [
      'airbnb-base',
    ],
    rules: {
      "linebreak-style": 0
    },
    globals: {
      window: true,
      document: true,
      localStorage: true,
      getComputedStyle: true,
    },
  };
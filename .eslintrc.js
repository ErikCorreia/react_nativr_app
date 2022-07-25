modules.exports = {
    extends: ['eslint-config-jsx'],
    rules: {
      // Override JS rules, e.g.:
      // 'no-extra-semi': ['warn'],
    },
    overrides: [
      {
        files: ['**/*.ts', '**/*.tsx'],
        rules: {
          // Override TS rules, e.g.:
          // '@typescript-eslint/no-extra-semi': ['warn'],
        },
      },
    ],
  };
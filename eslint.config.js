const customPlugin = require('./eslint-plugin-custom/index');

module.exports = {
  plugins: {
    custom: customPlugin,  
  },
  rules: {
    'no-console': 'error',
    'no-warning-comments': ['error', { terms: ['TODO'], location: 'anywhere' }],
    'custom/no-hebrew': 'error',
  },
};

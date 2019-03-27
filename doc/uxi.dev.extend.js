const path = require('path');

module.exports = (config) => {
  config.devServer.port = 3300; // eslint-disable-line no-param-reassign
  config.entry[1].replace(/(:\d*)$/, ':3300');


  config.resolve.alias = { // eslint-disable-line no-param-reassign
    'uxi-business': path.resolve(__dirname, '../src'),
    'styled-components': path.resolve(__dirname, 'node_modules/styled-components'),
    'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
    react: path.resolve(__dirname, 'node_modules/react'),
    'redux-form': path.resolve(__dirname, 'node_modules/redux-form'),
    uxi: path.resolve(__dirname, 'node_modules/uxi'),
    'react-intl': path.resolve(__dirname, 'node_modules/react-intl'),
    'react-redux': path.resolve(__dirname, 'node_modules/react-redux'),
  };

  return config;
};

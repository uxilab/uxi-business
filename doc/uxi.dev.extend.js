var path = require('path');

module.exports = (config) => {
  config.devServer.port = 3300;
  config.entry[1].replace(/(:\d*)$/, ':3300');


  config.resolve.alias = {
    'uxi-business': path.resolve(__dirname, '../src'),
    'styled-components': path.resolve(__dirname, 'node_modules/styled-components'),
    'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
    'react': path.resolve(__dirname, 'node_modules/react'),
    'redux-form': path.resolve(__dirname, 'node_modules/redux-form'),
    'uxi': path.resolve(__dirname, 'node_modules/uxi'),
    'react-intl': path.resolve(__dirname, 'node_modules/react-intl'),
  };

  return config;
};

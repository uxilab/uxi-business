'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DefaultErrorMessage = function DefaultErrorMessage(_ref) {
  var error = _ref.error;

  return _react2.default.createElement(
    'span',
    { style: { color: 'red' } },
    JSON.stringify(error)
  );
};

exports.default = DefaultErrorMessage;
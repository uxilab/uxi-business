'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _UserMessageProvider = require('../UserMessageProvider');

var _UserMessageProvider2 = _interopRequireDefault(_UserMessageProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Comp) {
  return function (props) {
    return _react2.default.createElement(
      _UserMessageProvider2.default,
      null,
      _react2.default.createElement(Comp, props)
    );
  };
};
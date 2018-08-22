'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MessageDetails = require('./MessageDetails');

var _MessageDetails2 = _interopRequireDefault(_MessageDetails);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AllMessageDetails = function AllMessageDetails(_ref) {
  var _ref$messages = _ref.messages,
      messages = _ref$messages === undefined ? [] : _ref$messages;
  return _react2.default.createElement(
    'div',
    null,
    messages.map(function (message) {
      return _react2.default.createElement(_MessageDetails2.default, { message: message });
    })
  );
};

exports.default = AllMessageDetails;
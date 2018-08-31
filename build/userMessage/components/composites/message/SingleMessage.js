'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactIntl = require('react-intl');

var _Alert = require('uxi/Alert');

var _Alert2 = _interopRequireDefault(_Alert);

var _MessageTitle = require('./MessageTitle');

var _MessageTitle2 = _interopRequireDefault(_MessageTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SingleMessage = function SingleMessage(_ref) {
  var message = _ref.message,
      type = _ref.type,
      onClose = _ref.onClose,
      extra = _ref.extra;
  return _react2.default.createElement(
    _Alert2.default,
    {
      onClose: onClose,
      style: { fontSize: '14px', minWidth: '280px', width: '400px', maxWidth: '680px' },
      type: type,
      showClose: true
    },
    message.title && _react2.default.createElement(
      _MessageTitle2.default,
      null,
      message.title
    ),
    message.message && _react2.default.createElement(
      'div',
      null,
      message.message
    ),
    extra ? extra : null
  );
};

exports.default = SingleMessage;
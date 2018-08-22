'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactIntl = require('react-intl');

var _SingleMessage = require('./message/SingleMessage');

var _SingleMessage2 = _interopRequireDefault(_SingleMessage);

var _MultipleMessage = require('./message/MultipleMessage');

var _MultipleMessage2 = _interopRequireDefault(_MultipleMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GlobalInfoMessage = function GlobalInfoMessage(_ref) {
  var _ref$messages = _ref.messages,
      messages = _ref$messages === undefined ? [] : _ref$messages,
      onClose = _ref.onClose;

  var isEmpty = messages.length === 0;

  if (isEmpty) {
    return null;
  }

  var messagesWithDetails = messages.filter(function (m) {
    return m.message;
  });

  if (messagesWithDetails.length === 1) {
    return _react2.default.createElement(_SingleMessage2.default, {
      type: 'info',
      message: messagesWithDetails[0],
      onClose: onClose
    });
  }

  return _react2.default.createElement(_MultipleMessage2.default, {
    type: 'info',
    defaultTitle: _react2.default.createElement(_reactIntl.FormattedMessage, {
      id: 'module-info-defaultTitleMultiple',
      defaultMessage: 'Information'
    }),
    defaultExplanation: _react2.default.createElement(_reactIntl.FormattedMessage, {
      id: 'module-info-defaultMultiple',
      defaultMessage: 'You have {value} errors',
      values: { value: messagesWithDetails.length }
    }),
    messages: messagesWithDetails,
    onClose: onClose
  });
};

exports.default = GlobalInfoMessage;
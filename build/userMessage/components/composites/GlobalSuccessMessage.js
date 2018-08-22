'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactIntl = require('react-intl');

var _SingleMessage = require('./message/SingleMessage');

var _SingleMessage2 = _interopRequireDefault(_SingleMessage);

var _MultipleMessage = require('./message/MultipleMessage');

var _MultipleMessage2 = _interopRequireDefault(_MultipleMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var findAppropriateSuccessMessage = function findAppropriateSuccessMessage(successMessage) {
  if (successMessage.message) {
    return _react2.default.createElement(
      'span',
      null,
      successMessage.message
    );
  }

  return _react2.default.createElement(_reactIntl.FormattedMessage, {
    id: 'module-sucesss-defaultMessage',
    defaultMessage: 'Your operation has been completed successfuly'
  });
};

var GlobalSuccessMessage = function GlobalSuccessMessage(_ref) {
  var _ref$messages = _ref.messages,
      messages = _ref$messages === undefined ? [] : _ref$messages,
      onClose = _ref.onClose;

  var isEmpty = messages.length === 0;

  if (isEmpty) {
    return null;
  }

  var messagesWithDetails = messages.map(function (successMessage) {
    return _extends({}, successMessage, {
      message: findAppropriateSuccessMessage(successMessage)
    });
  });

  if (messages.length === 1) {
    return _react2.default.createElement(_SingleMessage2.default, {
      type: 'success',
      message: messages[0],
      onClose: onClose
    });
  }

  return _react2.default.createElement(_MultipleMessage2.default, {
    type: 'success',
    defaultTitle: _react2.default.createElement(_reactIntl.FormattedMessage, {
      id: 'module-sucess-defaultTitleMultiple',
      defaultMessage: 'Operations completed successfuly'
    }),
    defaultExplanation: _react2.default.createElement(_reactIntl.FormattedMessage, {
      id: 'module-sucess-defaultMultiple',
      defaultMessage: 'You have {value} success messages',
      values: { value: messages.length }
    }),
    messages: messagesWithDetails,
    onClose: onClose
  });
};

exports.default = GlobalSuccessMessage;
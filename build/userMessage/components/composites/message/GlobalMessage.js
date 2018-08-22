'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactIntl = require('react-intl');

var _SuccessMessage = require('./success/SuccessMessage');

var _SuccessMessage2 = _interopRequireDefault(_SuccessMessage);

var _AllMessageDetails = require('./message/AllMessageDetails');

var _AllMessageDetails2 = _interopRequireDefault(_AllMessageDetails);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var findAppropriateSuccessMessage = function findAppropriateSuccessMessage(successMessage) {
  if (successMessage.message) {
    return _react2.default.createElement(
      'span',
      null,
      successMessage.message
    );
  }

  return _react2.default.createElement(
    'span',
    null,
    _react2.default.createElement(_reactIntl.FormattedMessage, {
      id: 'module-sucesss-defaultMessage',
      defaultMessage: 'Your operation has been completed successfuly'
    })
  );
};

var GlobalMessage = function GlobalMessage(_ref) {
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
    return _react2.default.createElement(SingleMessage, { type: 'success', message: messages[0] });
  }

  return _react2.default.createElement(_SuccessMessage2.default, {
    onClose: onClose,
    hasMultiple: messages.length > 1,
    moreDetails: messagesWithDetails && messagesWithDetails.length > 0 ? _react2.default.createElement(_AllMessageDetails2.default, {
      messages: messagesWithDetails
    }) : null
  });
};

exports.default = GlobalSuccessMessage;
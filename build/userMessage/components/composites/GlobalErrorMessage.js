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

var findAppropriateErrorMessage = function findAppropriateErrorMessage(errorMessage) {
  if (errorMessage.errorMessage) {
    return _react2.default.createElement(
      'span',
      null,
      errorMessage.errorMessage
    );
  }

  if (errorMessage.message) {
    return _react2.default.createElement(
      'span',
      null,
      errorMessage.message
    );
  }

  if (errorMessage.type === 'accessDenied') {
    return _react2.default.createElement(
      'span',
      null,
      _react2.default.createElement(_reactIntl.FormattedMessage, {
        id: 'module-error-accessDenied',
        defaultMessage: 'You do not have access to this ressource'
      })
    );
  }

  if (errorMessage.type === 'noFound') {
    return _react2.default.createElement(
      'span',
      null,
      _react2.default.createElement(_reactIntl.FormattedMessage, {
        id: 'module-error-didNofoundError',
        defaultMessage: 'It seems we did not found the data'
      })
    );
  }

  if (errorMessage.type === 'conflicted') {
    return _react2.default.createElement(
      'span',
      null,
      _react2.default.createElement(_reactIntl.FormattedMessage, {
        id: 'module-error-entityConflict',
        defaultMessage: 'An error occured, you are probably trying to create the same Entity'
      })
    );
  }

  return _react2.default.createElement(
    'span',
    null,
    _react2.default.createElement(_reactIntl.FormattedMessage, {
      id: 'module-error-unknownErrorOccured',
      defaultMessage: 'An unknown error occured'
    })
  );
};

var GlobalErrorMessage = function GlobalErrorMessage(_ref) {
  var _ref$messages = _ref.messages,
      messages = _ref$messages === undefined ? [] : _ref$messages,
      onClose = _ref.onClose;

  var isEmpty = messages.length === 0;

  if (isEmpty) {
    return null;
  }

  var messagesWithDetails = messages.filter(function (messageWithDetails) {
    return messageWithDetails.status || messageWithDetails.url || messageWithDetails.errorMessage || messageWithDetails.message;
  }).map(function (errorMessage) {
    return _extends({}, errorMessage, {
      message: findAppropriateErrorMessage(errorMessage)
    });
  });

  var extra = _react2.default.createElement(
    'div',
    { style: { marginTop: '6px' } },
    _react2.default.createElement(_reactIntl.FormattedMessage, {
      id: 'module-error-feelFreeTo',
      defaultMessage: 'Feel free to contact our'
    }),
    '\xA0',
    _react2.default.createElement(
      'a',
      {
        style: { color: '#fff', textDecoration: 'underline' },
        href: 'mailto:support@cluedin.com'
      },
      _react2.default.createElement(_reactIntl.FormattedMessage, {
        id: 'module-error-contactSupport',
        defaultMessage: 'support'
      })
    ),
    '\xA0',
    _react2.default.createElement(_reactIntl.FormattedMessage, {
      id: 'module-core-toHaveImmediateAssistance',
      defaultMessage: 'to have immediate assistance.'
    })
  );

  if (messagesWithDetails.length === 1) {
    return _react2.default.createElement(_SingleMessage2.default, {
      type: 'error',
      message: messagesWithDetails[0],
      extra: extra,
      onClose: onClose
    });
  }

  return _react2.default.createElement(_MultipleMessage2.default, {
    type: 'error',
    defaultTitle: _react2.default.createElement(_reactIntl.FormattedMessage, {
      id: 'module-error-defaultTitleMultiple',
      defaultMessage: 'Multiple errors occured'
    }),
    defaultExplanation: _react2.default.createElement(_reactIntl.FormattedMessage, {
      id: 'module-error-defaultMultiple',
      defaultMessage: 'You have {value} messages',
      values: { value: messagesWithDetails.length }
    }),
    extra: extra,
    messages: messagesWithDetails,
    onClose: onClose
  });
};

exports.default = GlobalErrorMessage;
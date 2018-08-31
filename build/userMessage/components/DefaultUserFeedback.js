'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _selector = require('../selector');

var _GlobalErrorMessage = require('./composites/GlobalErrorMessage');

var _GlobalErrorMessage2 = _interopRequireDefault(_GlobalErrorMessage);

var _GlobalSuccessMessage = require('./composites/GlobalSuccessMessage');

var _GlobalSuccessMessage2 = _interopRequireDefault(_GlobalSuccessMessage);

var _GlobalWarningMessage = require('./composites/GlobalWarningMessage');

var _GlobalWarningMessage2 = _interopRequireDefault(_GlobalWarningMessage);

var _GlobalInfoMessage = require('./composites/GlobalInfoMessage');

var _GlobalInfoMessage2 = _interopRequireDefault(_GlobalInfoMessage);

var _actions = require('../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DefaultUserFeedback = function DefaultUserFeedback(_ref) {
  var errorMessages = _ref.errorMessages,
      successMessages = _ref.successMessages,
      warningMessages = _ref.warningMessages,
      globalInfoMessages = _ref.globalInfoMessages,
      clearErrors = _ref.clearErrors,
      clearSuccess = _ref.clearSuccess,
      clearWarning = _ref.clearWarning,
      clearInfo = _ref.clearInfo,
      contextId = _ref.contextId;
  return _react2.default.createElement(
    'div',
    null,
    errorMessages && errorMessages.length > 0 && _react2.default.createElement(_GlobalErrorMessage2.default, {
      messages: errorMessages,
      onClose: clearErrors
    }),
    successMessages && successMessages.length > 0 && _react2.default.createElement(_GlobalSuccessMessage2.default, {
      messages: successMessages,
      onClose: clearSuccess
    }),
    warningMessages && warningMessages.length > 0 && _react2.default.createElement(_GlobalWarningMessage2.default, {
      messages: warningMessages,
      onClose: clearWarning
    }),
    globalInfoMessages && globalInfoMessages.length > 0 && _react2.default.createElement(_GlobalInfoMessage2.default, {
      messages: globalInfoMessages,
      onClose: clearInfo
    })
  );
};

var mapStateToProps = function mapStateToProps(_ref2, _ref3) {
  var messages = _ref2.userMessage.messages;
  var contextId = _ref3.contextId,
      messagesFromProps = _ref3.messagesFromProps;

  var messageStore = contextId ? messages[contextId] : messages.global;
  var store = (0, _selector.selectErrorMessage)(messageStore);

  return _extends({}, store, {
    contextId: contextId
  });
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref4) {
  var contextId = _ref4.contextId;
  return {
    clearErrors: function clearErrors() {
      dispatch((0, _actions.shouldClearError)({ context: contextId }));
    },
    clearSuccess: function clearSuccess() {
      dispatch((0, _actions.shouldClearSuccess)({ context: contextId }));
    },
    clearWarning: function clearWarning() {
      dispatch((0, _actions.shouldClearWarnings)({ context: contextId }));
    },
    clearInfo: function clearInfo() {
      dispatch((0, _actions.shouldClearInfo)({ context: contextId }));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(DefaultUserFeedback);
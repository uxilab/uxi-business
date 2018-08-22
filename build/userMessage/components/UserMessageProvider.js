'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _UxiBusinessProvider = require('../../provider/UxiBusinessProvider');

var _GlobalErrorMessage = require('./composites/GlobalErrorMessage');

var _GlobalErrorMessage2 = _interopRequireDefault(_GlobalErrorMessage);

var _GlobalSuccessMessage = require('./composites/GlobalSuccessMessage');

var _GlobalSuccessMessage2 = _interopRequireDefault(_GlobalSuccessMessage);

var _SessionExpired = require('./composites/SessionExpired');

var _SessionExpired2 = _interopRequireDefault(_SessionExpired);

var _UserFeedbackWrapper = require('./composites/UserFeedbackWrapper');

var _UserFeedbackWrapper2 = _interopRequireDefault(_UserFeedbackWrapper);

var _GlobalWarningMessage = require('./composites/GlobalWarningMessage');

var _GlobalWarningMessage2 = _interopRequireDefault(_GlobalWarningMessage);

var _GlobalInfoMessage = require('./composites/GlobalInfoMessage');

var _GlobalInfoMessage2 = _interopRequireDefault(_GlobalInfoMessage);

var _actions = require('../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var UserFeedbackProvider = function UserFeedbackProvider(_ref) {
  var children = _ref.children,
      sessionExpiredGlobalMessages = _ref.sessionExpiredGlobalMessages,
      errorMessages = _ref.errorMessages,
      successMessages = _ref.successMessages,
      warningMessages = _ref.warningMessages,
      globalInfoMessages = _ref.globalInfoMessages,
      clearErrors = _ref.clearErrors,
      clearSuccess = _ref.clearSuccess,
      clearWarning = _ref.clearWarning,
      clearInfo = _ref.clearInfo;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _UxiBusinessProvider.AppContext.Consumer,
      null,
      function (_ref2) {
        var onSessionExpired = _ref2.onSessionExpired;
        return _react2.default.createElement(
          _UserFeedbackWrapper2.default,
          null,
          sessionExpiredGlobalMessages && sessionExpiredGlobalMessages.length > 0 && _react2.default.createElement(_SessionExpired2.default, { onSessionExpired: onSessionExpired }),
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
      }
    ),
    children
  );
};

var mapStateToProps = function mapStateToProps(_ref3) {
  var _ref3$userMessage = _ref3.userMessage,
      accessDeniedGlobalMessages = _ref3$userMessage.accessDeniedGlobalMessages,
      sessionExpiredGlobalMessages = _ref3$userMessage.sessionExpiredGlobalMessages,
      unknownErrorMessages = _ref3$userMessage.unknownErrorMessages,
      notFoundGlobalMessages = _ref3$userMessage.notFoundGlobalMessages,
      queuedGlobalMessages = _ref3$userMessage.queuedGlobalMessages,
      globalNetworkErrorMessages = _ref3$userMessage.globalNetworkErrorMessages,
      globalConflictedEntity = _ref3$userMessage.globalConflictedEntity,
      globalErrorMessages = _ref3$userMessage.globalErrorMessages,
      globalSuccessMessages = _ref3$userMessage.globalSuccessMessages,
      globalWarningMessages = _ref3$userMessage.globalWarningMessages,
      globalInfoMessages = _ref3$userMessage.globalInfoMessages;

  var errorMessages = [].concat(_toConsumableArray(globalNetworkErrorMessages.map(function (m) {
    return _extends({}, m, {
      type: 'network'
    });
  })), _toConsumableArray(globalErrorMessages.map(function (m) {
    return _extends({}, m);
  })), _toConsumableArray(accessDeniedGlobalMessages.map(function (m) {
    return _extends({}, m, {
      type: 'accessDenied'
    });
  })), _toConsumableArray(unknownErrorMessages.map(function (m) {
    return _extends({}, m, {
      type: 'unknown'
    });
  })), _toConsumableArray(notFoundGlobalMessages.map(function (m) {
    return _extends({}, m, {
      type: 'noFound'
    });
  })), _toConsumableArray(globalConflictedEntity.map(function (m) {
    return _extends({}, m, {
      type: 'conflicted'
    });
  })));

  var warningMessages = [].concat(_toConsumableArray(globalWarningMessages), _toConsumableArray((queuedGlobalMessages || []).map(function (m) {
    return _extends({}, m, {
      type: 'queue'
    });
  })));

  var successMessages = [].concat(_toConsumableArray(globalSuccessMessages));

  return {
    errorMessages: errorMessages,
    sessionExpiredGlobalMessages: sessionExpiredGlobalMessages,
    successMessages: successMessages,
    warningMessages: warningMessages,
    globalInfoMessages: globalInfoMessages
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    clearErrors: function clearErrors() {
      dispatch((0, _actions.shouldClearError)());
    },
    clearSuccess: function clearSuccess() {
      dispatch((0, _actions.shouldClearSuccess)());
    },
    clearWarning: function clearWarning() {
      dispatch((0, _actions.shouldClearWarnings)());
    },
    clearInfo: function clearInfo() {
      dispatch((0, _actions.shouldClearInfo)());
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(UserFeedbackProvider);
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showInfoAndHide = exports.showWarningAndHide = exports.showErrorAndHide = exports.showSuccessAndHide = exports.showAlert = exports.withContainedUserFeedback = exports.withUserMessageAction = exports.UserMessageProvider = exports.withUserMessage = exports.withDefaultErrorHandlingActions = exports.reducer = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactRedux = require('react-redux');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _v = require('uuid/v4');

var _v2 = _interopRequireDefault(_v);

var _actions = require('./actions');

var _actions2 = _interopRequireDefault(_actions);

var _DefaultUserFeedback = require('./components/DefaultUserFeedback');

var _DefaultUserFeedback2 = _interopRequireDefault(_DefaultUserFeedback);

var _reducer2 = require('./reducer');

var _reducer3 = _interopRequireDefault(_reducer2);

var _withUserMessage2 = require('./components/hocs/withUserMessage');

var _withUserMessage3 = _interopRequireDefault(_withUserMessage2);

var _UserMessageProvider2 = require('./components/UserMessageProvider');

var _UserMessageProvider3 = _interopRequireDefault(_UserMessageProvider2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.reducer = _reducer3.default;
exports.withDefaultErrorHandlingActions = _actions2.default;
exports.withUserMessage = _withUserMessage3.default;
exports.UserMessageProvider = _UserMessageProvider3.default;
var withUserMessageAction = exports.withUserMessageAction = function withUserMessageAction(Comp, contextId) {

  var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
      success: function success(message) {
        dispatch((0, _actions.showSuccess)(_extends({}, message, { context: contextId })));
      },
      warning: function warning(message) {
        dispatch((0, _actions.showWarning)(_extends({}, message, { context: contextId })));
      },
      error: function error(message) {
        dispatch((0, _actions.showError)(_extends({}, message, { context: contextId })));
      },
      info: function info(message) {
        dispatch((0, _actions.showInfo)(_extends({}, message, { context: contextId })));
      },
      dispatchWithContext: function dispatchWithContext(action, params) {
        dispatch(action(params, contextId));
      }
    };
  };

  return (0, _reactRedux.connect)(null, mapDispatchToProps)(function (props) {
    return _react2.default.createElement(Comp, props);
  });
};

var withContainedUserFeedback = exports.withContainedUserFeedback = function withContainedUserFeedback(Comp, options) {
  var uniqueID = (0, _v2.default)();

  return withUserMessageAction(function (props) {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_DefaultUserFeedback2.default, {
        contextId: uniqueID,
        messagesFromProps: props.userMessage
      }),
      _react2.default.createElement(Comp, _extends({}, props, { contextId: uniqueID }))
    );
  }, uniqueID);
};

var showAndHide = function showAndHide(showFn, hideFn) {
  showFn();

  setTimeout(hideFn, 5000);
};

var showAlert = exports.showAlert = function showAlert(alert) {
  return function (dispatch) {
    var id = (0, _v2.default)();
    var alertWithId = _extends({}, alert, {
      id: id,
      type: alert.type || 'info'
    });

    var alertToUser = _actions.showInfo;
    var hideToUser = _actions.shouldClearInfo;

    if (alert.type === 'success') {
      alertToUser = _actions.showSuccess;
      hideToUser = _actions.shouldClearSuccess;
    }

    if (alert.type === 'error') {
      alertToUser = _actions.showError;
      hideToUser = _actions.shouldClearError;
    }

    if (alert.type === 'warning') {
      alertToUser = _actions.showWarning;
      hideToUser = _actions.shouldClearWarnings;
    }

    return showAndHide(function () {
      return dispatch(alertToUser(alertWithId));
    }, function () {
      return dispatch(hideToUser(alertWithId));
    });
  };
};

var showSuccessAndHide = exports.showSuccessAndHide = function showSuccessAndHide(message) {
  return showAlert(_extends({}, message, {
    type: 'success'
  }));
};

var showErrorAndHide = exports.showErrorAndHide = function showErrorAndHide(message) {
  return showAlert(_extends({}, message, {
    type: 'error'
  }));
};

var showWarningAndHide = exports.showWarningAndHide = function showWarningAndHide(message) {
  return showAlert(_extends({}, message, {
    type: 'warning'
  }));
};

var showInfoAndHide = exports.showInfoAndHide = function showInfoAndHide(message) {
  return showAlert(_extends({}, message, {
    type: 'info'
  }));
};
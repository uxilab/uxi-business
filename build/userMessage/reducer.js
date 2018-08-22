'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _handleActions;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reduxActions = require('redux-actions');

var _actions = require('./actions');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initalDefault = {
  accessDeniedGlobalMessages: [],
  sessionExpiredGlobalMessages: [],
  unknownErrorMessages: [],
  notFoundGlobalMessages: [],
  queuedGlobalMessages: [],
  globalNetworkErrorMessages: [],
  globalSuccessMessages: [],
  globalWarningMessages: [],
  globalErrorMessages: [],
  globalInfoMessages: [],
  globalConflictedEntity: []
};

exports.default = (0, _reduxActions.handleActions)((_handleActions = {}, _defineProperty(_handleActions, _actions.showSuccess, function (state, _ref) {
  var payload = _ref.payload;
  return _extends({}, state, {
    globalSuccessMessages: [].concat(_toConsumableArray(state.globalSuccessMessages), [payload])
  });
}), _defineProperty(_handleActions, _actions.showWarning, function (state, _ref2) {
  var payload = _ref2.payload;
  return _extends({}, state, {
    globalWarningMessages: [].concat(_toConsumableArray(state.globalWarningMessages), [payload])
  });
}), _defineProperty(_handleActions, _actions.showError, function (state, _ref3) {
  var payload = _ref3.payload;
  return _extends({}, state, {
    globalErrorMessages: [].concat(_toConsumableArray(state.globalErrorMessages), [payload])
  });
}), _defineProperty(_handleActions, _actions.showInfo, function (state, _ref4) {
  var payload = _ref4.payload;
  return _extends({}, state, {
    globalInfoMessages: [].concat(_toConsumableArray(state.globalInfoMessages), [payload])
  });
}), _defineProperty(_handleActions, _actions.generalAccessDenied, function (state, _ref5) {
  var payload = _ref5.payload;
  return _extends({}, state, {
    accessDeniedGlobalMessages: [].concat(_toConsumableArray(state.accessDeniedGlobalMessages), [payload])
  });
}), _defineProperty(_handleActions, _actions.generalSessionExpired, function (state, _ref6) {
  var payload = _ref6.payload;
  return _extends({}, state, {
    sessionExpiredGlobalMessages: [].concat(_toConsumableArray(state.sessionExpiredGlobalMessages), [payload])
  });
}), _defineProperty(_handleActions, _actions.generalUnknownError, function (state, _ref7) {
  var payload = _ref7.payload;
  return _extends({}, state, {
    unknownErrorMessages: [].concat(_toConsumableArray(state.unknownErrorMessages), [payload])
  });
}), _defineProperty(_handleActions, _actions.generalNetworkError, function (state, _ref8) {
  var payload = _ref8.payload;
  return _extends({}, state, {
    globalNetworkErrorMessages: [].concat(_toConsumableArray(state.globalNetworkErrorMessages), [payload])
  });
}), _defineProperty(_handleActions, _actions.generalConflictedEntity, function (state, _ref9) {
  var payload = _ref9.payload;
  return _extends({}, state, {
    globalConflictedEntity: [].concat(_toConsumableArray(state.globalConflictedEntity), [payload])
  });
}), _defineProperty(_handleActions, _actions.generalEntityNotFound, function (state, _ref10) {
  var payload = _ref10.payload;
  return _extends({}, state, {
    notFoundGlobalMessages: [].concat(_toConsumableArray(state.notFoundGlobalMessages), [payload])
  });
}), _defineProperty(_handleActions, _actions.generalQueued, function (state, _ref11) {
  var payload = _ref11.payload;
  return _extends({}, state, {
    queuedGlobalMessages: [].concat(_toConsumableArray(state.queuedGlobalMessages), [payload])
  });
}), _defineProperty(_handleActions, _actions.clearError, function (state, _ref12) {
  var payload = _ref12.payload;
  return _extends({}, state, {
    accessDeniedGlobalMessages: state.accessDeniedGlobalMessages.filter(function (m) {
      return m.id !== payload;
    }),
    sessionExpiredGlobalMessages: state.sessionExpiredGlobalMessages.filter(function (m) {
      return m.id !== payload;
    }),
    unknownErrorMessages: state.unknownErrorMessages.filter(function (m) {
      return m.id !== payload;
    }),
    notFoundGlobalMessages: state.notFoundGlobalMessages.filter(function (m) {
      return m.id !== payload;
    }),
    queuedGlobalMessages: state.queuedGlobalMessages.filter(function (m) {
      return m.id !== payload;
    })
  });
}), _defineProperty(_handleActions, _actions.shouldClearError, function (state) {
  return _extends({}, state, {
    globalErrorMessages: []
  });
}), _defineProperty(_handleActions, _actions.shouldClearSuccess, function (state) {
  return _extends({}, state, {
    globalSuccessMessages: []
  });
}), _defineProperty(_handleActions, _actions.shouldClearWarnings, function (state) {
  return _extends({}, state, {
    globalWarningMessages: []
  });
}), _defineProperty(_handleActions, _actions.shouldClearInfo, function (state) {
  return _extends({}, state, {
    globalInfoMessages: []
  });
}), _handleActions), initalDefault);
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _handleActions;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reduxActions = require('redux-actions');

var _actions = require('./actions');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultMessage = 'global';

var initalDefault = {
  sessionExpiredGlobalMessages: [],
  messages: _defineProperty({}, defaultMessage, {
    accessDenied: [],
    notFoundError: [],
    networkError: [],
    success: [],
    error: [],
    warning: [],
    unknownError: [],
    info: [],
    queued: [],
    conflictedError: []
  })
};

var updateMessageStore = function updateMessageStore() {
  var messages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var payload = arguments[1];
  var type = arguments[2];

  var context = payload && payload.context ? payload.context : 'global';
  var currentMessage = messages[context] || {};

  var result = _extends({}, messages, _defineProperty({}, context, _extends({}, currentMessage, _defineProperty({}, type, [].concat(_toConsumableArray(currentMessage[type] || []), [payload])))));
  return result;
};

var clearStoreFromError = function clearStoreFromError() {
  var messages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var payload = arguments[1];

  var context = payload && payload.context ? payload.context : 'global';
  var id = payload ? payload.id : undefined;

  if (!messages[context]) {
    messages[context] = {};
  }

  return _extends({}, messages, _defineProperty({}, context, {
    accessDenied: (messages[context].accessDenied || []).filter(function (e) {
      return e.id === id;
    }),
    notFoundError: (messages[context].notFoundError || []).filter(function (e) {
      return e.id === id;
    }),
    networkError: (messages[context].networkError || []).filter(function (e) {
      return e.id === id;
    }),
    success: (messages[context].success || []).filter(function (e) {
      return e.id === id;
    }),
    error: (messages[context].error || []).filter(function (e) {
      return e.id === id;
    }),
    warning: (messages[context].warning || []).filter(function (e) {
      return e.id === id;
    }),
    unknownError: (messages[context].unknownError || []).filter(function (e) {
      return e.id === id;
    }),
    info: (messages[context].info || []).filter(function (e) {
      return e.id === id;
    }),
    queued: (messages[context].queued || []).filter(function (e) {
      return e.id === id;
    }),
    conflictedError: (messages[context].conflictedError || []).filter(function (e) {
      return e.id === id;
    })
  }));
};

exports.default = (0, _reduxActions.handleActions)((_handleActions = {}, _defineProperty(_handleActions, _actions.showSuccess, function (state, _ref) {
  var payload = _ref.payload;
  return _extends({}, state, {
    messages: updateMessageStore(state.messages, payload, 'success')
  });
}), _defineProperty(_handleActions, _actions.showWarning, function (state, _ref2) {
  var payload = _ref2.payload;
  return _extends({}, state, {
    messages: updateMessageStore(state.messages, payload, 'warning')
  });
}), _defineProperty(_handleActions, _actions.showError, function (state, _ref3) {
  var payload = _ref3.payload;
  return _extends({}, state, {
    messages: updateMessageStore(state.messages, payload, 'error')
  });
}), _defineProperty(_handleActions, _actions.showInfo, function (state, _ref4) {
  var payload = _ref4.payload;
  return _extends({}, state, {
    messages: updateMessageStore(state.messages, payload, 'info')
  });
}), _defineProperty(_handleActions, _actions.generalAccessDenied, function (state, _ref5) {
  var payload = _ref5.payload;
  return _extends({}, state, {
    messages: updateMessageStore(state.messages, payload, 'accessDenied')
  });
}), _defineProperty(_handleActions, _actions.generalSessionExpired, function (state, _ref6) {
  var payload = _ref6.payload;
  return _extends({}, state, {
    sessionExpiredGlobalMessages: [].concat(_toConsumableArray(state.sessionExpiredGlobalMessages), [payload])
  });
}), _defineProperty(_handleActions, _actions.generalUnknownError, function (state, _ref7) {
  var payload = _ref7.payload;
  return _extends({}, state, {
    messages: updateMessageStore(state.messages, payload, 'unknownError')
  });
}), _defineProperty(_handleActions, _actions.generalNetworkError, function (state, _ref8) {
  var payload = _ref8.payload;
  return _extends({}, state, {
    messages: updateMessageStore(state.messages, payload, 'networkError')
  });
}), _defineProperty(_handleActions, _actions.generalConflictedEntity, function (state, _ref9) {
  var payload = _ref9.payload;
  return _extends({}, state, {
    messages: updateMessageStore(state.messages, payload, 'conflictedError')
  });
}), _defineProperty(_handleActions, _actions.generalEntityNotFound, function (state, _ref10) {
  var payload = _ref10.payload;
  return _extends({}, state, {
    messages: updateMessageStore(state.messages, payload, 'notFoundError')
  });
}), _defineProperty(_handleActions, _actions.generalQueued, function (state, _ref11) {
  var payload = _ref11.payload;
  return _extends({}, state, {
    messages: updateMessageStore(state.messages, payload, 'queued')
  });
}), _defineProperty(_handleActions, _actions.clearError, function (state, _ref12) {
  var payload = _ref12.payload;
  return _extends({}, state, {
    messages: clearStoreFromError(state.messages, payload)
  });
}), _defineProperty(_handleActions, _actions.shouldClearError, function (state, _ref13) {
  var payload = _ref13.payload;
  return _extends({}, state, {
    messages: clearStoreFromError(state.messages, payload)
  });
}), _defineProperty(_handleActions, _actions.shouldClearSuccess, function (state, _ref14) {
  var payload = _ref14.payload;
  return _extends({}, state, {
    messages: clearStoreFromError(state.messages, payload)
  });
}), _defineProperty(_handleActions, _actions.shouldClearWarnings, function (state, _ref15) {
  var payload = _ref15.payload;
  return _extends({}, state, {
    messages: clearStoreFromError(state.messages, payload)
  });
}), _defineProperty(_handleActions, _actions.shouldClearInfo, function (state, _ref16) {
  var payload = _ref16.payload;
  return _extends({}, state, {
    messages: clearStoreFromError(state.messages, payload)
  });
}), _handleActions), initalDefault);
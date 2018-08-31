'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var selectErrorMessage = exports.selectErrorMessage = function selectErrorMessage() {
  var userMessageForContext = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var accessDenied = userMessageForContext.accessDenied,
      notFoundError = userMessageForContext.notFoundError,
      networkError = userMessageForContext.networkError,
      success = userMessageForContext.success,
      error = userMessageForContext.error,
      warning = userMessageForContext.warning,
      unknownError = userMessageForContext.unknownError,
      info = userMessageForContext.info,
      queued = userMessageForContext.queued,
      conflictedError = userMessageForContext.conflictedError;


  var errorMessages = [].concat(_toConsumableArray((networkError || []).map(function (m) {
    return _extends({}, m, {
      type: 'network'
    });
  })), _toConsumableArray((error || []).map(function (m) {
    return _extends({}, m);
  })), _toConsumableArray((accessDenied || []).map(function (m) {
    return _extends({}, m, {
      type: 'accessDenied'
    });
  })), _toConsumableArray((unknownError || []).map(function (m) {
    return _extends({}, m, {
      type: 'unknown'
    });
  })), _toConsumableArray((notFoundError || []).map(function (m) {
    return _extends({}, m, {
      type: 'noFound'
    });
  })), _toConsumableArray((conflictedError || []).map(function (m) {
    return _extends({}, m, {
      type: 'conflicted'
    });
  })));

  var warningMessages = [].concat(_toConsumableArray(warning || []), _toConsumableArray((queued || []).map(function (m) {
    return _extends({}, m, {
      type: 'queue'
    });
  })));

  var successMessages = [].concat(_toConsumableArray(success || []));

  return {
    errorMessages: errorMessages,
    successMessages: success || [],
    globalInfoMessages: info || [],
    warningMessages: warningMessages
  };
};
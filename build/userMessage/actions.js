'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generalNetworkError = exports.clearError = exports.generalConflictedEntity = exports.generalQueued = exports.generalEntityNotFound = exports.generalUnknownError = exports.generalSessionExpired = exports.generalAccessDenied = exports.shouldClearInfo = exports.shouldClearWarnings = exports.shouldClearSuccess = exports.shouldClearError = exports.showInfo = exports.showError = exports.showWarning = exports.showSuccess = undefined;

var _reduxActions = require('redux-actions');

var _reactRedux = require('react-redux');

var _v = require('uuid/v4');

var _v2 = _interopRequireDefault(_v);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var addIdIfNotThere = function addIdIfNotThere() {
  var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (!message.id) {
    message.id = (0, _v2.default)();
  }

  return message;
};

var showSuccess = exports.showSuccess = (0, _reduxActions.createAction)('GENERAL_SHOW_SUCCESS', addIdIfNotThere);
var showWarning = exports.showWarning = (0, _reduxActions.createAction)('GENERAL_SHOW_WARNING', addIdIfNotThere);
var showError = exports.showError = (0, _reduxActions.createAction)('GENERAL_SHOW_ERROR', addIdIfNotThere);
var showInfo = exports.showInfo = (0, _reduxActions.createAction)('GENERAL_SHOW_INFORMATION', addIdIfNotThere);

var shouldClearError = exports.shouldClearError = (0, _reduxActions.createAction)('GENERAL_CLEAR_ERROR', addIdIfNotThere);
var shouldClearSuccess = exports.shouldClearSuccess = (0, _reduxActions.createAction)('GENERAL_CLEAR_SUCCESS', addIdIfNotThere);
var shouldClearWarnings = exports.shouldClearWarnings = (0, _reduxActions.createAction)('GENERAL_CLEAR_WARNINGS', addIdIfNotThere);
var shouldClearInfo = exports.shouldClearInfo = (0, _reduxActions.createAction)('GENERAL_CLEAR_INFO', addIdIfNotThere);

var generalAccessDenied = exports.generalAccessDenied = (0, _reduxActions.createAction)('GENERAL_ACCESS_DENIED', addIdIfNotThere);
var generalSessionExpired = exports.generalSessionExpired = (0, _reduxActions.createAction)('GENERAL_SESSION_EXPIRED', addIdIfNotThere);
var generalUnknownError = exports.generalUnknownError = (0, _reduxActions.createAction)('GENERAL_UNKNOWN_ERROR', addIdIfNotThere);
var generalEntityNotFound = exports.generalEntityNotFound = (0, _reduxActions.createAction)('GENERAL_ENTITY_NOT_FOUND', addIdIfNotThere);
var generalQueued = exports.generalQueued = (0, _reduxActions.createAction)('GENERAL_REQUEST_QUEUED', addIdIfNotThere);
var generalConflictedEntity = exports.generalConflictedEntity = (0, _reduxActions.createAction)('GENERAL_ENTITY_CONFLICTED', addIdIfNotThere);
var clearError = exports.clearError = (0, _reduxActions.createAction)('GENERAL_CLEAR_ERROR', addIdIfNotThere);
var generalNetworkError = exports.generalNetworkError = (0, _reduxActions.createAction)('GENERAL_NETWORK_ERROR', addIdIfNotThere);
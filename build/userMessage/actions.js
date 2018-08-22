'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generalNetworkError = exports.clearError = exports.generalConflictedEntity = exports.generalQueued = exports.generalEntityNotFound = exports.generalUnknownError = exports.generalSessionExpired = exports.generalAccessDenied = exports.shouldClearInfo = exports.shouldClearWarnings = exports.shouldClearSuccess = exports.shouldClearError = exports.showInfo = exports.showError = exports.showWarning = exports.showSuccess = undefined;

var _reduxActions = require('redux-actions');

var _v = require('uuid/v4');

var _v2 = _interopRequireDefault(_v);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var showSuccess = exports.showSuccess = (0, _reduxActions.createAction)('GENERAL_SHOW_SUCCESS');
var showWarning = exports.showWarning = (0, _reduxActions.createAction)('GENERAL_SHOW_WARNING');
var showError = exports.showError = (0, _reduxActions.createAction)('GENERAL_SHOW_ERROR');
var showInfo = exports.showInfo = (0, _reduxActions.createAction)('GENERAL_SHOW_INFORMATION');

var shouldClearError = exports.shouldClearError = (0, _reduxActions.createAction)('GENERAL_CLEAR_ERROR');
var shouldClearSuccess = exports.shouldClearSuccess = (0, _reduxActions.createAction)('GENERAL_CLEAR_SUCCESS');
var shouldClearWarnings = exports.shouldClearWarnings = (0, _reduxActions.createAction)('GENERAL_CLEAR_WARNINGS');
var shouldClearInfo = exports.shouldClearInfo = (0, _reduxActions.createAction)('GENERAL_CLEAR_INFO');

var generalAccessDenied = exports.generalAccessDenied = (0, _reduxActions.createAction)('GENERAL_ACCESS_DENIED');
var generalSessionExpired = exports.generalSessionExpired = (0, _reduxActions.createAction)('GENERAL_SESSION_EXPIRED');
var generalUnknownError = exports.generalUnknownError = (0, _reduxActions.createAction)('GENERAL_UNKNOWN_ERROR');
var generalEntityNotFound = exports.generalEntityNotFound = (0, _reduxActions.createAction)('GENERAL_ENTITY_NOT_FOUND');
var generalQueued = exports.generalQueued = (0, _reduxActions.createAction)('GENERAL_REQUEST_QUEUED');
var generalConflictedEntity = exports.generalConflictedEntity = (0, _reduxActions.createAction)('GENERAL_ENTITY_CONFLICTED');
var clearError = exports.clearError = (0, _reduxActions.createAction)('GENERAL_CLEAR_ERROR');
var generalNetworkError = exports.generalNetworkError = (0, _reduxActions.createAction)('GENERAL_NETWORK_ERROR');
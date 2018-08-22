import { createAction } from 'redux-actions';
import uuid from 'uuid/v4';

export const showSuccess = createAction('GENERAL_SHOW_SUCCESS');
export const showWarning = createAction('GENERAL_SHOW_WARNING');
export const showError = createAction('GENERAL_SHOW_ERROR');
export const showInfo = createAction('GENERAL_SHOW_INFORMATION');

export const shouldClearError = createAction('GENERAL_CLEAR_ERROR');
export const shouldClearSuccess = createAction('GENERAL_CLEAR_SUCCESS');
export const shouldClearWarnings = createAction('GENERAL_CLEAR_WARNINGS');
export const shouldClearInfo = createAction('GENERAL_CLEAR_INFO');

export const generalAccessDenied = createAction('GENERAL_ACCESS_DENIED');
export const generalSessionExpired = createAction('GENERAL_SESSION_EXPIRED');
export const generalUnknownError = createAction('GENERAL_UNKNOWN_ERROR');
export const generalEntityNotFound = createAction('GENERAL_ENTITY_NOT_FOUND');
export const generalQueued = createAction('GENERAL_REQUEST_QUEUED');
export const generalConflictedEntity = createAction('GENERAL_ENTITY_CONFLICTED');
export const clearError = createAction('GENERAL_CLEAR_ERROR');
export const generalNetworkError = createAction('GENERAL_NETWORK_ERROR');

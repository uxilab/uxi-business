import { createAction } from 'redux-actions';
import uuid from 'uuid/v4';

const addIdIfNotThere = (message = {}) => {
  if (!message.id) {
    message.id = uuid(); // eslint-disable-line no-param-reassign
  }

  return message;
};

export const showSuccess = createAction('UXI-B_GENERAL_SHOW_SUCCESS', addIdIfNotThere);
export const showWarning = createAction('UXI-B_GENERAL_SHOW_WARNING', addIdIfNotThere);
export const showError = createAction('UXI-B_GENERAL_SHOW_ERROR', addIdIfNotThere);
export const showInfo = createAction('UXI-B_GENERAL_SHOW_INFORMATION', addIdIfNotThere);

export const shouldClearMessageById = createAction('UXI-B_GENERAL_CLEAR_MSG_BY_ID'/* , addIdIfNotThere */);
export const shouldClearErrors = createAction('UXI-B_GENERAL_CLEAR_ERRORS'/* , addIdIfNotThere */);
export const shouldClearSuccesses = createAction('UXI-B_GENERAL_CLEAR_SUCCESSES'/* , addIdIfNotThere */);
export const shouldClearWarnings = createAction('UXI-B_GENERAL_CLEAR_WARNINGS'/* , addIdIfNotThere */);
export const shouldClearInfo = createAction('UXI-B_GENERAL_CLEAR_INFO' /* , addIdIfNotThere */);
export const shouldClearInfos = createAction('UXI-B_GENERAL_CLEAR_INFOS' /* , addIdIfNotThere */);

export const generalAccessDenied = createAction('UXI-B_GENERAL_ACCESS_DENIED', addIdIfNotThere);
export const generalSessionExpired = createAction('UXI-B_GENERAL_SESSION_EXPIRED', addIdIfNotThere);
export const generalUnknownError = createAction('UXI-B_GENERAL_UNKNOWN_ERROR', addIdIfNotThere);
export const generalEntityNotFound = createAction('UXI-B_GENERAL_ENTITY_NOT_FOUND', addIdIfNotThere);
export const generalQueued = createAction('UXI-B_GENERAL_REQUEST_QUEUED', addIdIfNotThere);
export const generalConflictedEntity = createAction('UXI-B_GENERAL_ENTITY_CONFLICTED', addIdIfNotThere);
export const generalNetworkError = createAction('UXI-B_GENERAL_NETWORK_ERROR', addIdIfNotThere);

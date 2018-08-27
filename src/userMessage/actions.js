import { createAction } from 'redux-actions';
import { connect } from 'react-redux';
import React from 'react';
import DefaultUserFeedback from './components/DefaultUserFeedback';

import uuid from 'uuid/v4';

const addIdIfNotThere = (message = {}) => {
  if(!message.id) {
    message.id = uuid();
  }

  return message;
};

export const showSuccess = createAction('GENERAL_SHOW_SUCCESS', addIdIfNotThere);
export const showWarning = createAction('GENERAL_SHOW_WARNING', addIdIfNotThere);
export const showError = createAction('GENERAL_SHOW_ERROR', addIdIfNotThere);
export const showInfo = createAction('GENERAL_SHOW_INFORMATION', addIdIfNotThere);

export const shouldClearError = createAction('GENERAL_CLEAR_ERROR', addIdIfNotThere);
export const shouldClearSuccess = createAction('GENERAL_CLEAR_SUCCESS', addIdIfNotThere);
export const shouldClearWarnings = createAction('GENERAL_CLEAR_WARNINGS', addIdIfNotThere);
export const shouldClearInfo = createAction('GENERAL_CLEAR_INFO', addIdIfNotThere);

export const generalAccessDenied = createAction('GENERAL_ACCESS_DENIED', addIdIfNotThere);
export const generalSessionExpired = createAction('GENERAL_SESSION_EXPIRED', addIdIfNotThere);
export const generalUnknownError = createAction('GENERAL_UNKNOWN_ERROR', addIdIfNotThere);
export const generalEntityNotFound = createAction('GENERAL_ENTITY_NOT_FOUND', addIdIfNotThere);
export const generalQueued = createAction('GENERAL_REQUEST_QUEUED', addIdIfNotThere);
export const generalConflictedEntity = createAction('GENERAL_ENTITY_CONFLICTED', addIdIfNotThere);
export const clearError = createAction('GENERAL_CLEAR_ERROR', addIdIfNotThere);
export const generalNetworkError = createAction('GENERAL_NETWORK_ERROR', addIdIfNotThere);

export const withContainedUserFeedback = (Comp, options) => {
  const uniqueIDForEachDefault = uuid();

  const ToRender = (props) => {
    return (
      <div>
        <DefaultUserFeedback
          contextId={uniqueIDForEachDefault}
          messagesFromProps={props.userMessage}
        />
        <Comp {...props} />
      </div>
    );
  };

  const mapToStateProps = () => ({});

  const mapToDispatchProps = (dispatch) => ({
    info: (options = {}) => {
      dispatch(showInfo({ ...options, context: uniqueIDForEachDefault}));
    },
    error: (options = {}) => {
      dispatch(showError({ ...options, context: uniqueIDForEachDefault}));
    },
    warning: (options = {}) => {
      dispatch(showWarning({ ...options, context: uniqueIDForEachDefault}));
    },
    success: (options = {}) => {
      dispatch(showSuccess({ ...options, context: uniqueIDForEachDefault}));
    },
    withContext: (...rest) => {
      return {
        params: rest,
        context: uniqueIDForEachDefault,
      };
    },
  });

  return connect(mapToStateProps, mapToDispatchProps)(ToRender);
};

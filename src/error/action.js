import { createAction } from 'redux-actions';
import uuid from 'uuid/v4';
import {
  shouldShowAlert,
} from '../core/actions';
import {
  logMessage,
} from '../../helpers/logger';

export const generalAccessDenied = createAction('GENERAL_ACCESS_DENIED');
export const generalSessionExpired = createAction('GENERAL_SESSION_EXPIRED');
export const generalUnknownError = createAction('GENERAL_UNKNOWN_ERROR');
export const generalEntityNotFound = createAction('GENERAL_ENTITY_NOT_FOUND');
export const generalQueued = createAction('GENERAL_REQUEST_QUEUED');
export const clearError = createAction('GENERAL_CLEAR_ERROR');

export const defaultErrorHandling = (dispatch, params, errorActions = {}) => (e) => {
  const response = e.requestError || {};
  const errorMessage = response.message || e.message;
  const requestURL = response && response.original ? response.original.url : '';
  const id = uuid();

  setTimeout(() => {
    dispatch(clearError(id));
  }, 10000);

  if (errorActions.onErrorAction) {
    dispatch(errorActions.onErrorAction());
  }

  if (response.original && response.original.status === 401) {
    logMessage(`Error 401 - unauthorized - for ${response.original.url}`);
    const unauthorizedMessage = {
      id,
      params,
      errorMessage,
      url: requestURL,
      status: 401,
    };

    return dispatch(
      errorActions.sessionExpired ?
        errorActions.sessionExpired(unauthorizedMessage) :
        generalSessionExpired(unauthorizedMessage)
    );
  }

  if (response.original && response.original.status === 403) {
    logMessage(`Error 403 - access denied - for ${response.original.url}`);

    const accessDeniedMessage = {
      id,
      params,
      errorMessage,
      url: requestURL,
      status: 403,
    };

    return dispatch(
      errorActions.accessDenied ?
        errorActions.accessDenied(accessDeniedMessage) :
        generalAccessDenied(accessDeniedMessage)
    );
  }

  if (response.original && response.original.status === 404) {
    logMessage(`Error 404 - Not Found - for ${response.original.url}`);

    const notFoundMessage = {
      id,
      params,
      errorMessage,
      url: requestURL,
      status: 404,
    };

    return dispatch(
      errorActions.notFound ?
        errorActions.notFound(notFoundMessage) :
        generalEntityNotFound(notFoundMessage)
    );
  }

  if (response.original && response.original.status === 202) {
    logMessage(`Error 202 - Queued - for ${response.original.url}`);

    const queuedMessage = {
      id,
      params,
      errorMessage,
      url: requestURL,
      status: 202,
    };

    return dispatch(
      errorActions.queued ?
        errorActions.queued(queuedMessage) :
        generalQueued(queuedMessage)
    );
  }

  if (
    response.original &&
    response.original.status &&
    response.original.status >= 400 &&
    response.original.status <= 599
  ) {
    logMessage(`Error ${response.original.status} - Unknown - for ${response.original.url}`);
    const unknownErrorMessage = {
      id,
      params,
      errorMessage,
      url: requestURL,
      status: response.original.status,
    };

    return dispatch(
      errorActions.unknownError ?
        errorActions.unknownError(unknownErrorMessage) :
        generalUnknownError(unknownErrorMessage)
    );
  }

  if (response.isError) {
    logMessage(`Uknow Error - Unknown status - for ${response.original.url}`);

    const unknownErrorMessage = {
      id,
      params,
      errorMessage,
      url: requestURL,
    };

    return dispatch(
      errorActions.unknownError ?
        errorActions.unknownError(unknownErrorMessage) :
        generalUnknownError(unknownErrorMessage)
    );
  }

  if (errorMessage) {
    return dispatch(
      errorActions.unknownError ?
        errorActions.unknownError({
          id,
          params,
          errorMessage,
        }) :
        generalUnknownError({
          id,
          params,
          errorMessage,
        })
    );
  }

  return null;
};
/**
 * Decorate an action that fetch Data and ensure there is a default actions handler.
 * errorActions {
 *    sessionExpired,
 *    accessDenied,
 *    notFound,
 *    unknownError,
 *    queued,
 * }
 */
export const withDefaultErrorHandlingActions = (
  promise, errorActions = {}
) => params => dispatch => promise(params)(dispatch)
  .catch(defaultErrorHandling(dispatch, params, errorActions));

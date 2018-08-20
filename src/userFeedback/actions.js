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
export const clearError = createAction('GENERAL_CLEAR_ERROR');

const defaultMutationHandling = (dispatch, options = {}) => (resp) => {
  const successMessage = options.successMessage;
  const id = uuid();
  if(resp.ok) {
    dispatch(
      options.success ?
        options.success({ id, message: successMessage}) :
        showSuccess({ id, message: successMessage})
    )

    setTimeout(() => {
      dispatch(clearError(id));
    }, 10000);
  }
}

export const defaultErrorHandling = (dispatch, params, options = {}) => (e) => {
  const response = e.requestError || {};
  const errorMessage = response.message || e.message;
  const requestURL = response && response.original ? response.original.url : '';
  const id = uuid();

  setTimeout(() => {
    dispatch(clearError(id));
  }, 10000);

  if (options.onErrorAction) {
    dispatch(options.onErrorAction());
  }

  if (response.original && response.original.status === 401) {
    options.log && options.log(`Error 401 - unauthorized - for ${response.original.url}`)

    const unauthorizedMessage = {
      id,
      params,
      errorMessage,
      url: requestURL,
      status: 401,
    };

    return dispatch(
      options.sessionExpired ?
      options.sessionExpired(unauthorizedMessage) :
        generalSessionExpired(unauthorizedMessage)
    );
  }

  if (response.original && response.original.status === 403) {
    options.log && options.log(`Error 403 - access denied - for ${response.original.url}`);

    const accessDeniedMessage = {
      id,
      params,
      errorMessage,
      url: requestURL,
      status: 403,
    };

    return dispatch(
      options.accessDenied ?
      options.accessDenied(accessDeniedMessage) :
        generalAccessDenied(accessDeniedMessage)
    );
  }

  if (response.original && response.original.status === 404) {
    options.log && options.log(`Error 404 - Not Found - for ${response.original.url}`);

    const notFoundMessage = {
      id,
      params,
      errorMessage,
      url: requestURL,
      status: 404,
    };

    return dispatch(
      options.notFound ?
      options.notFound(notFoundMessage) :
        generalEntityNotFound(notFoundMessage)
    );
  }

  if (response.original && response.original.status === 202) {
    options.log && options.log(`Error 202 - Queued - for ${response.original.url}`);

    const queuedMessage = {
      id,
      params,
      errorMessage,
      url: requestURL,
      status: 202,
    };

    return dispatch(
      options.queued ?
      options.queued(queuedMessage) :
        generalQueued(queuedMessage)
    );
  }

  if (
    response.original &&
    response.original.status &&
    response.original.status >= 400 &&
    response.original.status <= 599
  ) {
    options.log && options.log(`Error ${response.original.status} - Unknown - for ${response.original.url}`);
    const unknownErrorMessage = {
      id,
      params,
      errorMessage,
      url: requestURL,
      status: response.original.status,
    };

    return dispatch(
      options.unknownError ?
      options.unknownError(unknownErrorMessage) :
        generalUnknownError(unknownErrorMessage)
    );
  }

  if (response.isError) {
    options.log && options.log(`Uknow Error - Unknown status - for ${response.original.url}`);

    const unknownErrorMessage = {
      id,
      params,
      errorMessage,
      url: requestURL,
    };

    return dispatch(
      options.unknownError ?
      options.unknownError(unknownErrorMessage) :
        generalUnknownError(unknownErrorMessage)
    );
  }

  if (errorMessage) {
    return dispatch(
      options.unknownError ?
      options.unknownError({
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
  promise, options = {}
) => params => dispatch => {
  if(options.withMutation) {
    return promise(params)(dispatch).then(defaultMutationHandling).catch(defaultErrorHandling(dispatch, params, options));
  }

  return promise(params)(dispatch).catch(defaultErrorHandling(dispatch, params, options));
}

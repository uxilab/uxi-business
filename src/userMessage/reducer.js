import { handleActions } from 'redux-actions';
import {
  showSuccess,
  showWarning,
  showError,
  showInfo,
  generalAccessDenied,
  generalSessionExpired,
  generalUnknownError,
  generalNetworkError,
  generalEntityNotFound,
  generalConflictedEntity,
  generalQueued,
  shouldClearMessageById,
  shouldClearErrors,
  shouldClearSuccesses,
  shouldClearWarnings,
  shouldClearInfos,
} from './actions';

const defaultMessage = 'global';

const initalDefault = {
  sessionExpiredGlobalMessages: [],
  messages: {
    [defaultMessage]: {
      accessDenied: [],
      notFoundError: [],
      networkError: [],
      success: [],
      error: [],
      warning: [],
      unknownError: [],
      info: [],
      queued: [],
      conflictedError: [],
    },
  },
};

const updateMessageStore = (messages = {}, payload, type) => {
  const context = (payload && payload.context) ? payload.context : 'global';
  const currentMessage = messages[context] || {};

  const result = {
    ...messages,
    [context]: {
      ...currentMessage,
      [type]: [
        ...(currentMessage[type] || []),
        payload,
      ],
    },
  };
  return result;
};

const clearStoreFromMessage = (messages = {}, payload) => {
  const context = (payload && payload.context) ? payload.context : 'global';
  const id = payload ? payload.id : undefined;

  if (!messages[context]) {
    messages[context] = {}; // eslint-disable-line no-param-reassign
  }

  return {
    ...messages,
    [context]: {
      accessDenied: (messages[context].accessDenied || []).filter(e => e.id !== id),
      notFoundError: (messages[context].notFoundError || []).filter(e => e.id !== id),
      networkError: (messages[context].networkError || []).filter(e => e.id !== id),
      success: (messages[context].success || []).filter(e => e.id !== id),
      error: (messages[context].error || []).filter(e => e.id !== id),
      warning: (messages[context].warning || []).filter(e => e.id !== id),
      unknownError: (messages[context].unknownError || []).filter(e => e.id !== id),
      info: (messages[context].info || []).filter(e => e.id !== id),
      queued: (messages[context].queued || []).filter(e => e.id !== id),
      conflictedError: (messages[context].conflictedError || []).filter(e => e.id !== id),
    },
  };
};


const clearStoreFromAllErrors = (messages, payload) => {
  const context = (payload && payload.context) ? payload.context : 'global';
  // const id = payload ? payload.id : undefined;

  if (!messages[context]) {
    messages[context] = {}; // eslint-disable-line no-param-reassign
  }

  return {
    ...messages,
    [context]: {
      // success: (messages[context].success || []).filter(e => e.id !== id),
      // warning: (messages[context].warning || []).filter(e => e.id !== id),
      // info: (messages[context].info || []).filter(e => e.id !== id),
      // queued: (messages[context].queued || []).filter(e => e.id !== id),
      ...messages[context],
      accessDenied: [],
      notFoundError: [],
      networkError: [],
      error: [],
      unknownError: [],
      conflictedError: [],
    },
  };
};

const clearStoreFromAllInfos = (messages, payload) => {
  const context = (payload && payload.context) ? payload.context : 'global';
  // const id = payload ? payload.id : undefined;

  if (!messages[context]) {
    messages[context] = {}; // eslint-disable-line no-param-reassign
  }

  return {
    ...messages,
    [context]: {
      ...messages[context],
      info: [],
    },
  };
};

const clearStoreFromAllSuccessesAndQueued = (messages, payload) => {
  const context = (payload && payload.context) ? payload.context : 'global';
  // const id = payload ? payload.id : undefined;

  if (!messages[context]) {
    messages[context] = {}; // eslint-disable-line no-param-reassign
  }

  return {
    ...messages,
    [context]: {
      ...messages[context],
      success: [],
      queued: [],
    },
  };
};

export default handleActions({
  [showSuccess]: (state, { payload }) => ({
    ...state,
    messages: updateMessageStore(state.messages, payload, 'success'),
  }),
  [showWarning]: (state, { payload }) => ({
    ...state,
    messages: updateMessageStore(state.messages, payload, 'warning'),
  }),
  [showError]: (state, { payload }) => ({
    ...state,
    messages: updateMessageStore(state.messages, payload, 'error'),
  }),
  [showInfo]: (state, { payload }) => ({
    ...state,
    messages: updateMessageStore(state.messages, payload, 'info'),
  }),
  [generalAccessDenied]: (state, { payload }) => ({
    ...state,
    messages: updateMessageStore(state.messages, payload, 'accessDenied'),
  }),
  [generalSessionExpired]: (state, { payload }) => ({
    ...state,
    sessionExpiredGlobalMessages: [
      ...state.sessionExpiredGlobalMessages,
      payload,
    ],
  }),
  [generalUnknownError]: (state, { payload }) => ({
    ...state,
    messages: updateMessageStore(state.messages, payload, 'unknownError'),
  }),
  [generalNetworkError]: (state, { payload }) => ({
    ...state,
    messages: updateMessageStore(state.messages, payload, 'networkError'),
  }),
  [generalConflictedEntity]: (state, { payload }) => ({
    ...state,
    messages: updateMessageStore(state.messages, payload, 'conflictedError'),
  }),
  [generalEntityNotFound]: (state, { payload }) => ({
    ...state,
    messages: updateMessageStore(state.messages, payload, 'notFoundError'),
  }),
  [generalQueued]: (state, { payload }) => ({
    ...state,
    messages: updateMessageStore(state.messages, payload, 'queued'),
  }),
  [shouldClearMessageById]: (state, { payload }) => ({
    ...state,
    messages: clearStoreFromMessage(state.messages, payload),
  }),
  [shouldClearErrors]: (state, { payload = {} }) => ({
    ...state,
    messages: clearStoreFromAllErrors(state.messages, payload),
  }),
  [shouldClearSuccesses]: (state, { payload }) => ({
    ...state,
    messages: clearStoreFromAllSuccessesAndQueued(state.messages, payload),
  }),
  [shouldClearWarnings]: (state, { payload }) => ({
    ...state,
    messages: clearStoreFromMessage(state.messages, payload),
  }),
  // [shouldClearInfo]: (state, { payload }) => ({
  //   ...state,
  //   messages: clearStoreFromMessage(state.messages, payload),
  // }),
  [shouldClearInfos]: (state, { payload }) => ({
    ...state,
    messages: clearStoreFromAllInfos(state.messages, payload),
  }),
}, initalDefault);

import { handleActions } from 'redux-actions';
import {
  entityNotFound,
  entityNoAccess,
  somethingOdd,
  generalAccessDenied,
  generalSessionExpired,
  generalUnknownError,
  generalEntityNotFound,
  generalQueued,
  clearError,
} from './actions';

const initalDefault = {
  accessDeniedGlobalMessages: [],
  sessionExpiredGlobalMessages: [],
  unknownErrorMessages: [],
  notFoundGlobalMessages: [],
  queuedGlobalMessages: [],
};

export default handleActions({()
  [generalAccessDenied]: (state, { payload }) => ({
    ...state,
    accessDeniedGlobalMessages: [
      ...state.accessDeniedGlobalMessages,
      payload,
    ],
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
    unknownErrorMessages: [
      ...state.unknownErrorMessages,
      payload,
    ],
  }),
  [generalEntityNotFound]: (state, { payload }) => ({
    ...state,
    notFoundGlobalMessages: [
      ...state.notFoundGlobalMessages,
      payload,
    ],
  }),
  [generalQueued]: (state, { payload }) => ({
    ...state,
    queuedGlobalMessages: [
      ...state.queuedGlobalMessages,
      payload,
    ],
  }),
  [clearError]: (state, { payload }) => ({
    ...state,
    accessDeniedGlobalMessages: state.accessDeniedGlobalMessages.filter(m => m.id !== payload),
    sessionExpiredGlobalMessages: state.sessionExpiredGlobalMessages.filter(m => m.id !== payload),
    unknownErrorMessages: state.unknownErrorMessages.filter(m => m.id !== payload),
    notFoundGlobalMessages: state.notFoundGlobalMessages.filter(m => m.id !== payload),
    queuedGlobalMessages: state.queuedGlobalMessages.filter(m => m.id !== payload),
  }),
}, initalDefault);

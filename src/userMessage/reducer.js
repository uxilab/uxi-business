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
  clearError,
  shouldClearError,
  shouldClearSuccess,
  shouldClearWarnings,
  shouldClearInfo,
} from './actions';

const initalDefault = {
  accessDeniedGlobalMessages: [],
  sessionExpiredGlobalMessages: [],
  unknownErrorMessages: [],
  notFoundGlobalMessages: [],
  queuedGlobalMessages: [],
  globalNetworkErrorMessages: [],
  globalSuccessMessages: [],
  globalWarningMessages: [],
  globalErrorMessages: [],
  globalInfoMessages: [],
  globalConflictedEntity:[],
};

export default handleActions({
  [showSuccess]: (state, {payload}) => ({
    ...state,
    globalSuccessMessages: [
      ...state.globalSuccessMessages,
      payload,
    ],
  }),
  [showWarning]: (state, { payload }) => ({
    ...state,
    globalWarningMessages: [
      ...state.globalWarningMessages,
      payload,
    ],
  }),
  [showError]: (state, { payload }) => ({
    ...state,
    globalErrorMessages: [
      ...state.globalErrorMessages,
      payload,
    ],
  }),
  [showInfo]: (state, { payload }) => ({
    ...state,
    globalInfoMessages: [
      ...state.globalInfoMessages,
      payload,
    ],
  }),
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
  [generalNetworkError]: (state, { payload }) => ({
    ...state,
    globalNetworkErrorMessages: [
      ...state.globalNetworkErrorMessages,
      payload,
    ],
  }),
  [generalConflictedEntity]: (state, {payload}) => ({
    ...state,
    globalConflictedEntity: [
      ...state.globalConflictedEntity,
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
    globalNetworkErrorMessages: state.queuedGlobalMessages.filter(m => m.id !== payload),
  }),
  [shouldClearError]: state => ({
    ...state,
    globalErrorMessages: [],
  }),
  [shouldClearSuccess]: state => ({
    ...state,
    globalSuccessMessages: [],
  }),
  [shouldClearWarnings]: state => ({
    ...state,
    globalWarningMessages: [],
  }),
  [shouldClearInfo]: state => ({
    ...state,
    globalInfoMessages: [],
  }),
}, initalDefault);

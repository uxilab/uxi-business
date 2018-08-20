import React from 'react';
import { connect } from 'react-redux';
import GlobalErrorMessage from './composites/GlobalErrorMessage';
import GlobalSuccessMessage from './composites/GlobalSuccessMessage';
import SessionExpired from './composites/SessionExpired';
import UserFeedbackWrapper from './composites/UserFeedbackWrapper';
import GlobalWarnningMessage from './composites/GlobalWarningMessage';
import GlobalInfoMessage from './composites/GlobalInfoMessage';
import {
  shouldClearError,
  shouldClearSuccess,
  shouldClearWarnings,
  shouldClearInfo,
} from '../actions';

const UserFeedbackProvider = ({
  children,
  sessionExpiredGlobalMessages,
  errorMessages,
  successMessages,
  warningMessages,
  globalInfoMessages,
  clearErrors,
  clearSuccess,
  clearWarning,
  clearInfo,
}) => (
  <div>
    <UserFeedbackWrapper>
      {
        sessionExpiredGlobalMessages &&
        sessionExpiredGlobalMessages.length > 0 &&
        (
          <SessionExpired />
        )
      }
      {
        errorMessages &&
        errorMessages.length > 0 &&
        (
          <GlobalErrorMessage
            messages={errorMessages}
            onClose={clearErrors}
          />
        )
      }
      {
        successMessages &&
        successMessages.length > 0 &&
        (
          <GlobalSuccessMessage
            messages={successMessages}
            onClose={clearSuccess}
          />
        )
      }
      {
        warningMessages &&
        warningMessages.length > 0 &&
        (
          <GlobalWarnningMessage
            messages={warningMessages}
            onClose={clearWarning}
          />
        )
      }
      {
        globalInfoMessages &&
        globalInfoMessages.length > 0 &&
        (
          <GlobalInfoMessage
            messages={globalInfoMessages}
            onClose={clearInfo}
          />
        )
      }
    </UserFeedbackWrapper>
    {children}
  </div>
);

const mapStateToProps = ({
  userFeedback: {
    accessDeniedGlobalMessages,
    sessionExpiredGlobalMessages,
    unknownErrorMessages,
    notFoundGlobalMessages,
    queuedGlobalMessages,
    globalErrorMessages,
    globalSuccessMessages,
    globalWarningMessages,
    globalInfoMessages,
  },
}) => {
  const errorMessages = [
    ...globalErrorMessages.map(m => ({
      ...m,
    })),
    ...accessDeniedGlobalMessages.map(m => ({
      ...m,
      type: 'accessDenied',
    })),
    ...unknownErrorMessages.map(m => ({
      ...m,
      type: 'unknown',
    })),
    ...notFoundGlobalMessages.map(m => ({
      ...m,
      type: 'noFound',
    })),
  ];

  const warningMessages = [
    ...globalWarningMessages,
    ...(queuedGlobalMessages || []).map(m => ({
      ...m,
      type: 'queue',
    }))
  ];

  const successMessages = [
    ...globalSuccessMessages,
  ];

  return {
    hasAlert: (
      errorMessages.length > 0 ||
      sessionExpiredGlobalMessages.length > 0 ||
      queuedGlobalMessages.length > 0
    ),
    errorMessages,
    sessionExpiredGlobalMessages,
    successMessages,
    warningMessages,
    globalInfoMessages,
  };
};

const mapDispatchToProps = (dispatch) => ({
  clearErrors() {
    dispatch(shouldClearError());
  },
  clearSuccess() {
    dispatch(shouldClearSuccess());
  },
  clearWarning() {
    dispatch(shouldClearWarnings());
  },
  clearInfo() {
    dispatch(shouldClearInfo());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserFeedbackProvider);

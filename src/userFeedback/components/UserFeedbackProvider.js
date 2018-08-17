import React from 'react';
import { connect } from 'react-redux';
import GlobalErrorMessage from './composites/GlobalErrorMessage';
import DefaultSessionExpired from './composites/DefaultSessionExpired';
import GlobalQueuedMessage from './composites/GlobalQueuedMessage';
import UserFeedbackWrapper from './composites/UserFeedbackWrapper';

const UserFeedbackProvider = ({
  children,
  sessionExpiredGlobalMessages,
  errorMessages,
  queuedGlobalMessages,
}) => (
  <div>
    <UserFeedbackWrapper>
      {
        queuedGlobalMessages &&
        queuedGlobalMessages.length > 0 &&
        (
          <GlobalQueuedMessage messages={queuedGlobalMessages} />
        )
      }
      {
        sessionExpiredGlobalMessages &&
        sessionExpiredGlobalMessages.length > 0 &&
        (
          <DefaultSessionExpired />
        )
      }
      {
        errorMessages &&
        errorMessages.length > 0 &&
        (
          <GlobalErrorMessage messages={errorMessages} />
        )
      }
    </UserFeedbackWrapper>
    {children}
  </div>
);

const mapStateToProps = ({
  error: {
    accessDeniedGlobalMessages,
    sessionExpiredGlobalMessages,
    unknownErrorMessages,
    notFoundGlobalMessages,
    queuedGlobalMessages,
  },
}) => {
  const errorMessages = [
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

  return {
    hasAlert: (
      errorMessages.length > 0 ||
      sessionExpiredGlobalMessages.length > 0 ||
      queuedGlobalMessages.length > 0
    ),
    errorMessages,
    sessionExpiredGlobalMessages,
    queuedGlobalMessages,
  };
};

export default connect(
  mapStateToProps,
)(UserFeedbackProvider);

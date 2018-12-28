import React from 'react';
import { connect } from 'react-redux';
import {
  selectErrorMessage,
} from '../selector';
import GlobalErrorMessage from './composites/GlobalErrorMessage';
import GlobalSuccessMessage from './composites/GlobalSuccessMessage';
import GlobalWarningMessage from './composites/GlobalWarningMessage';
import GlobalInfoMessage from './composites/GlobalInfoMessage';
import UserFeedbackWrapper from './composites/UserFeedbackWrapper';

import {
  shouldClearMessageById,
  shouldClearErrors,
  shouldClearSuccesses,
  shouldClearWarnings,
  shouldClearInfos,
} from '../actions';

const DefaultUserFeedback = ({
  errorMessages,
  successMessages,
  warningMessages,
  globalInfoMessages,
  clearAllErrors,
  clearMessageById,
  clearAllSuccesses,
  clearWarning,
  clearAllInfos,
}) => (
  <UserFeedbackWrapper>
    {
      errorMessages &&
      errorMessages.length > 0 &&
      (
        <GlobalErrorMessage
          key="GlobalErrorMessage"
          messages={errorMessages}
          clearAllErrors={clearAllErrors}
          clearMessageById={clearMessageById}
        />
      )
    }
    {
      successMessages &&
      successMessages.length > 0 &&
      (
        <GlobalSuccessMessage
          key="GlobalSuccessMessage"
          messages={successMessages}
          clearAllSuccesses={clearAllSuccesses}
          clearMessageById={clearMessageById}
        />
      )
    }
    {
      warningMessages &&
      warningMessages.length > 0 &&
      (
        <GlobalWarningMessage
          key="GlobalWarningMessage"
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
          key="GlobalInfoMessage"
          messages={globalInfoMessages}
          clearAllInfos={clearAllInfos}
          clearMessageById={clearMessageById}
        />
      )
    }
  </UserFeedbackWrapper>

);

DefaultUserFeedback.displayName = 'DefaultUserFeedback';

const mapStateToProps = ({
  userMessage: {
    messages,
  },
}, {
  contextId,
}
) => {
  const messageStore = contextId ? messages[contextId] : messages.global;
  const store = selectErrorMessage(messageStore);

  return {
    ...store,
    contextId,
  };
};

const mapDispatchToProps = (dispatch, { contextId }) => ({
  clearMessageById(id) {
    dispatch(shouldClearMessageById({ id, context: contextId }));
  },
  clearAllErrors() {
    dispatch(shouldClearErrors({ context: contextId }));
  },
  clearAllSuccesses() {
    dispatch(shouldClearSuccesses({ context: contextId }));
  },
  clearWarning() {
    dispatch(shouldClearWarnings({ context: contextId }));
  },
  clearAllInfos() {
    dispatch(shouldClearInfos({ context: contextId }));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DefaultUserFeedback);

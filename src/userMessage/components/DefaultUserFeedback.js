import React from 'react';
import { connect } from 'react-redux';
import {
  selectErrorMessage,
} from '../selector';
import GlobalErrorMessage from './composites/GlobalErrorMessage';
import GlobalSuccessMessage from './composites/GlobalSuccessMessage';
import GlobalWarningMessage from './composites/GlobalWarningMessage';
import GlobalInfoMessage from './composites/GlobalInfoMessage';

import {
  shouldClearError,
  shouldClearErrors,
  shouldClearSuccess,
  shouldClearWarnings,
  shouldClearInfo,
} from '../actions';

const DefaultUserFeedback = ({
  errorMessages,
  successMessages,
  warningMessages,
  globalInfoMessages,
  clearAllErrors,
  clearErrorById,
  clearSuccess,
  clearWarning,
  clearInfo,
}) => (
  <div>
    {
      errorMessages &&
          errorMessages.length > 0 &&
          (
            <GlobalErrorMessage
              messages={errorMessages}
              clearAllErrors={clearAllErrors}
              clearErrorById={clearErrorById}
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
            <GlobalWarningMessage
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
  </div>
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
  clearErrorById(id) {
    dispatch(shouldClearError({ id, context: contextId }));
  },
  clearAllErrors() {
    dispatch(shouldClearErrors({ context: contextId }));
  },
  clearSuccess() {
    dispatch(shouldClearSuccess({ context: contextId }));
  },
  clearWarning() {
    dispatch(shouldClearWarnings({ context: contextId }));
  },
  clearInfo() {
    dispatch(shouldClearInfo({ context: contextId }));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DefaultUserFeedback);

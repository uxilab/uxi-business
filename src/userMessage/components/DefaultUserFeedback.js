import React from 'react';
import { connect } from 'react-redux';
import {
  selectErrorMessage
} from '../selector';
import GlobalErrorMessage from './composites/GlobalErrorMessage';
import GlobalSuccessMessage from './composites/GlobalSuccessMessage';
import GlobalWarningMessage from './composites/GlobalWarningMessage';
import GlobalInfoMessage from './composites/GlobalInfoMessage';

import {
  shouldClearError,
  shouldClearSuccess,
  shouldClearWarnings,
  shouldClearInfo,
} from '../actions';

const DefaultUserFeedback = ({
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

const mapStateToProps = ({
  userMessage: {
    messages: {
      global,
    },
  },
 }) => {
  const defaultMessages = selectErrorMessage(global);

  return {
    ...defaultMessages,
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
)(DefaultUserFeedback);


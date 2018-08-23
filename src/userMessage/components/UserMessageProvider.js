import React from 'react';
import { connect } from 'react-redux';
import {
  AppContext
} from '../../provider/UxiBusinessProvider';
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
import {
  selectErrorMessage
} from '../selector';

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
    <AppContext.Consumer>
      {({ onSessionExpired }) => (
         <UserFeedbackWrapper>
         {
           sessionExpiredGlobalMessages &&
           sessionExpiredGlobalMessages.length > 0 &&
           (
             <SessionExpired onSessionExpired={onSessionExpired} />
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
      )}
    </AppContext.Consumer>
    {children}
  </div>
);

const mapStateToProps = ({
  userMessage: {
    messages: {
      global,
    },
    sessionExpiredGlobalMessages,
  },
 }) => {
  const defaultMessages = selectErrorMessage(global);

  return {
    sessionExpiredGlobalMessages,
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
)(UserFeedbackProvider);

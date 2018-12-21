import React from 'react';
import { connect } from 'react-redux';
import {
  AppContext,
} from '../../provider/UxiBusinessProvider';
import SessionExpired from './composites/SessionExpired';
import UserFeedbackWrapper from './composites/UserFeedbackWrapper';
import DefaultUserFeedback from './DefaultUserFeedback';

const UserMessageProvider = ({
  children,
  sessionExpiredGlobalMessages,
}) => (
  <div>
    <UserFeedbackWrapper>
      <AppContext.Consumer>
        {({ onSessionExpired }) => (
          <div>
            {
              sessionExpiredGlobalMessages &&
              sessionExpiredGlobalMessages.length > 0 &&
              (
                <SessionExpired onSessionExpired={onSessionExpired} />
              )
            }
            <DefaultUserFeedback />
          </div>
        )}
      </AppContext.Consumer>
    </UserFeedbackWrapper>
    {children}
  </div>
);

UserMessageProvider.displayName = 'UserMessageProvider';

const mapStateToProps = ({
  userMessage: {
    sessionExpiredGlobalMessages,
  },
}) => ({
  sessionExpiredGlobalMessages,
});

export default connect(
  mapStateToProps,
)(UserMessageProvider);

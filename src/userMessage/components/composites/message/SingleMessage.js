import React from 'react';
import Alert from 'uxi/Alert';
import MessageTitle from './MessageTitle';
import AlertStyles from './Alert.styles';

const SingleMessage = ({
  message,
  type,
  clearMessageById,
  extra,
}) => (
  <Alert
    onClose={() => clearMessageById(message.id)}
    style={AlertStyles}
    type={type}
    showClose
  >
    {
      message.title &&
        (
          <MessageTitle>
            {message.title}
          </MessageTitle>
        )
    }
    {
      message.message &&
        (
          <div>
            {message.message}
          </div>
        )
    }
    {
      extra || null
    }
  </Alert>
);

SingleMessage.displayName = 'SingleMessage';

export default SingleMessage;

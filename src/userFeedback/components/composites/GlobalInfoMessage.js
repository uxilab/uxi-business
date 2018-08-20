import React from 'react';
import { FormattedMessage } from 'react-intl';
import InfoMessage from './info/InfoMessage';
import AllMessageDetails from './message/AllMessageDetails';

const GlobalInfoMessage = ({
  messages = [],
  onClose,
}) => {
  const isEmpty = messages.length === 0;

  if (isEmpty) {
    return null;
  }

  const messagesWithDetails = messages.filter((m) => (m.message));

  return (
    <InfoMessage
      onClose={onClose}
      hasMultiple={messages.length > 1}
      moreDetails={
        (messagesWithDetails && messagesWithDetails.length > 0)
          ? (
            <AllMessageDetails
              messages={messagesWithDetails}
            />
          ) : null
      }
    />
  );
};

export default GlobalInfoMessage;

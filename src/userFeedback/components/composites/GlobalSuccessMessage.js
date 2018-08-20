import React from 'react';
import { FormattedMessage } from 'react-intl';
import SuccessMessage from './success/SuccessMessage'
import AllMessageDetails from './message/AllMessageDetails';

const findAppropriateSuccessMessage = (successMessage) => {
  if (successMessage.message) {
    return (
      <span>
        {successMessage.message}
      </span>
    );
  }

  return (
    <span>
      <FormattedMessage
        id="module-sucesss-defaultMessage"
        defaultMessage="Your operation has been completed successfuly"
      />
    </span>
  );
};

const GlobalSuccessMessage = ({
  messages = [],
  onClose,
}) => {
  const isEmpty = messages.length === 0;

  if (isEmpty) {
    return null;
  }

  const messagesWithDetails = messages.map(successMessage => ({
    ...successMessage,
    message: findAppropriateSuccessMessage(successMessage),
  }));

  return (
    <SuccessMessage
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

export default GlobalSuccessMessage;

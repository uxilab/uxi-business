import React from 'react';
import { FormattedMessage } from 'react-intl';
import WarningMessage from './warning/WarningMessage';
import AllMessageDetails from './message/AllMessageDetails';

const findAppropriateWarningMessage = (successMessage) => {
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
        defaultMessage="You operation has been completed successfuly"
      />
    </span>
  );
};

const GlobalWarningMessage = ({
  messages = [],
  onClose,
}) => {
  const isEmpty = messages.length === 0;

  if (isEmpty) {
    return null;
  }

  const messagesWithDetails = messages.map(warningMessage => ({
    ...warningMessage,
    message: findAppropriateWarningMessage(warningMessage),
  }));

  return (
    <WarningMessage
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

export default GlobalWarningMessage;

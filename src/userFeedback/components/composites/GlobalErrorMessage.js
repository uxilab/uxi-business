import React from 'react';
import { FormattedMessage } from 'react-intl';
import ErrorMessage from './error/ErrorMessage';
import AllMessageDetails from './message/AllMessageDetails';

const findAppropriateErrorMessage = (errorMessage) => {
  if (errorMessage.errorMessage) {
    return (
      <span>
        {errorMessage.errorMessage}
      </span>
    );
  }

  if (errorMessage.type === 'noFound') {
    return (
      <span>
        <FormattedMessage
          id="module-error-didNofoundError"
          defaultMessage="It seems we did not found the data"
        />
      </span>
    );
  }

  return (
    <span>
      <FormattedMessage
        id="module-error-unknownErrorOccured"
        defaultMessage="An unknown error occured"
      />
    </span>
  );
};

const GlobalErrorMessage = ({
  messages = [],
}) => {
  const isEmpty = messages.length === 0;

  if (isEmpty) {
    return null;
  }

  const messagesWithDetails = messages.filter(messageWithDetails => (
    messageWithDetails.status || messageWithDetails.url || messageWithDetails.errorMessage
  )).map(errorMessage => ({
    ...errorMessage,
    message: findAppropriateErrorMessage(errorMessage),
  }));

  return (
    <ErrorMessage
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

export default GlobalErrorMessage;

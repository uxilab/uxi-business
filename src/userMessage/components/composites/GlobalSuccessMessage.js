import React from 'react';
import { FormattedMessage } from 'react-intl';
import SingleMessage from './message/SingleMessage';
import MultipleMessage from './message/MultipleMessage';

const findAppropriateSuccessMessage = (successMessage) => {
  if (successMessage.message) {
    return (
      <span>
        {successMessage.message}
      </span>
    );
  }

  return (
    <FormattedMessage
      id="module-sucesss-defaultMessage"
      defaultMessage="Your operation has been completed successfuly"
    />
  );
};

const GlobalSuccessMessage = ({
  messages = [],
  clearMessageById,
  clearAllSuccesses,
}) => {
  const isEmpty = messages.length === 0;

  if (isEmpty) {
    return null;
  }

  const messagesWithDetails = messages.map(successMessage => ({
    ...successMessage,
    message: findAppropriateSuccessMessage(successMessage),
  }));

  if (messages.length === 1) {
    return (
      <SingleMessage
        type="success"
        message={messages[0]}
        clearMessageById={clearMessageById}
      />
    );
  }

  if (messages.length === 2) {
    return [
      <SingleMessage
        key="0"
        type="success"
        message={messages[0]}
        clearMessageById={clearMessageById}
      />,
      <SingleMessage
        key="1"
        type="success"
        message={messages[0]}
        clearMessageById={clearMessageById}
      />,
    ];
  }

  return (
    <MultipleMessage
      type="success"
      defaultTitle={
        <FormattedMessage
          id="module-sucess-defaultTitleMultiple"
          defaultMessage="Operations completed successfuly"
        />
      }
      defaultExplanation={
        <FormattedMessage
          id="module-sucess-defaultMultiple"
          defaultMessage="You have {value} success messages"
          values={{ value: messages.length }}
        />
      }
      messages={messagesWithDetails}
      onClose={clearAllSuccesses}
    />
  );
};

GlobalSuccessMessage.displayName = 'GlobalSuccessMessage';

export default GlobalSuccessMessage;

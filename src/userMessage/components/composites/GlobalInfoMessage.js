import React from 'react';
import { FormattedMessage } from 'react-intl';
import SingleMessage from './message/SingleMessage';
import MultipleMessage from './message/MultipleMessage';

const GlobalInfoMessage = ({
  messages = [],
  clearMessageById,
  clearAllInfos,
}) => {
  const isEmpty = messages.length === 0;

  if (isEmpty) {
    return null;
  }

  const messagesWithDetails = messages.filter(m => (m.message));

  if (messagesWithDetails.length === 1) {
    return (
      <SingleMessage
        type="info"
        message={messagesWithDetails[0]}
        clearMessageById={clearMessageById}
      />
    );
  }

  return (
    <MultipleMessage
      type="info"
      defaultTitle={
        <FormattedMessage
          id="module-info-defaultTitleMultiple"
          defaultMessage="Information"
        />
      }
      defaultExplanation={
        <FormattedMessage
          id="module-info-defaultMultiple"
          defaultMessage="You have {value} message"
          values={{ value: messagesWithDetails.length }}
        />
      }
      messages={messagesWithDetails}
      onClose={clearAllInfos}
    />
  );
};

GlobalInfoMessage.displayName = 'GlobalInfoMessage';

export default GlobalInfoMessage;

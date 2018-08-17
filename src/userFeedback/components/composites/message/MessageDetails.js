import React from 'react';
import { FormattedMessage } from 'react-intl';

const MessageDetails = ({ message }) => (
  <div style={{ marginTop: '6px' }}>
    <div style={{ fontSize: '12px', marginTop: '5px', marginBottom: '5px' }}>
      <FormattedMessage id="module-error-supportInformation" />
    </div>
    <div style={{ fontSize: '12px', fontStyle: 'italic' }}>
      {
        message.message ? <div>
          <FormattedMessage id="module-error-errorMessageTitle" />{message.message}
        </div> : null
      }
      {
        message.url ? <div>
          <FormattedMessage id="module-error-urlTitle" />{message.url}
        </div> : null
      }
      {
        message.status ? <div>
          <FormattedMessage id="module-error-statusTitle" />{message.status}
        </div> : null
      }
    </div>
  </div>
);

export default MessageDetails;

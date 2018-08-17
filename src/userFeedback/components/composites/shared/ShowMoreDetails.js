import React from 'react';
import {
  FormattedMessage,
} from 'react-intl';

const ShowMoreDetails = ({ toggle, showMore }) => (
  <div style={{ marginTop: '6px' }}>
    <a onClick={toggle}>
      {
        showMore ?
          (
            <FormattedMessage id="module-error-hideDetails" />
          ) :
          (
            <FormattedMessage id="module-error-showMoreDetails" />
          )
      }
    </a>
  </div>
);

export default ShowMoreDetails;

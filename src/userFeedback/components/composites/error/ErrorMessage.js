import React from 'react';
import {
  FormattedMessage,
} from 'react-intl';
import Alert from 'uxi/Alert';
import {
  compose,
  withStateHandlers,
} from 'recompose';
import ShowMoreDetails from '../shared/ShowMoreDetails';

const DefaultError = ({
  hasMultiple,
  moreDetails,
  showMore,
  toggle,
}) => (
  <Alert showClose style={{ margin: '15px', fontSize: '14px' }} type="error">
    <div style={{ fontSize: '16px', fontWeight: 'bold', paddingBottom: '6px' }} >
      {
        hasMultiple ? (
          <FormattedMessage id="module-error-defaultTitleMultiple" />
        ) : (
          <FormattedMessage id="module-error-defaultTitle" />
        )
      }
    </div>
    <div>
      {
        hasMultiple ? (
          <FormattedMessage id="module-error-defaultMultiple" />
        ) : (
          <FormattedMessage id="module-error-default" />
        )
      }
    </div>
    <div style={{ marginTop: '5px' }}>
      <FormattedMessage id="module-error-feelFreeTo" />
      <a
        style={{ color: '#fff', textDecoration: 'underline' }}
        href="mailto:support@cluedin.com"
      >
        <FormattedMessage id="module-error-contactSupport" />
      </a>&nbsp;<FormattedMessage id="module-core-toHaveImmediateAssistance" />
    </div>
    {
      moreDetails && (
        <ShowMoreDetails showMore={showMore} toggle={toggle} />
      )
    }
    {
      moreDetails && showMore ? (
        <div style={{ marginTop: '12px' }}>
          {moreDetails}
        </div>
      ) : null
    }
  </Alert>
);

export default compose(
  withStateHandlers(
    () => ({
      showMore: false,
    }),
    {
      toggle: ({ showMore }) => () => ({
        showMore: !showMore,
      }),
    },
  )
)(DefaultError);

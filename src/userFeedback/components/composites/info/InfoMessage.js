import React, { Component } from 'react';
import {
  FormattedMessage,
} from 'react-intl';
import Alert from 'uxi/Alert';
import ShowMoreDetails from '../shared/ShowMoreDetails';

class InfoMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: false,
    };
  }

  toggle() {
    const { showMore } = this.state;

    this.setState({
      showMore: !showMore,
    });
  }

  render() {
    const {
      hasMultiple,
      moreDetails,
      showMore,
      toggle,
      onClose,
    } = this.props;

    return (
      <Alert onClose={onClose} showClose style={{ margin: '15px', fontSize: '14px' }} type="info">
        <div style={{ fontSize: '16px', fontWeight: 'bold', paddingBottom: '6px' }} >
          {
            hasMultiple ? (
              <FormattedMessage id="module-info-defaultTitleMultiple" />
            ) : (
              <FormattedMessage id="module-info-defaultTitle" />
            )
          }
        </div>
        <div>
          {
            hasMultiple ? (
              <FormattedMessage id="module-info-defaultMultiple" />
            ) : (
              <FormattedMessage id="module-info-default" />
            )
          }
        </div>
        <div style={{ marginTop: '5px' }}>
          <FormattedMessage id="module-info-feelFreeTo" />
          <a
            style={{ color: '#fff', textDecoration: 'underline' }}
            href="mailto:support@cluedin.com"
          >
            <FormattedMessage id="module-info-contactSupport" />
          </a>&nbsp;<FormattedMessage id="module-info-toHaveImmediateAssistance" />
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
  }
}

export default InfoMessage;

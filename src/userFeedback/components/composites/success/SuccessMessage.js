import React, { Component } from 'react';
import {
  FormattedMessage,
} from 'react-intl';
import Alert from 'uxi/Alert';
import ShowMoreDetails from '../shared/ShowMoreDetails';

class SuccessMessage extends Component {
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
      <Alert onClose={onClose} showClose style={{ margin: '15px', fontSize: '14px' }} type="success">
        <div style={{ fontSize: '16px', fontWeight: 'bold', paddingBottom: '6px' }} >
          {
            hasMultiple ? (
              <FormattedMessage id="module-sucess-defaultTitleMultiple" />
            ) : (
              <FormattedMessage id="module-sucess-defaultTitle" />
            )
          }
        </div>
        <div>
          {
            hasMultiple ? (
              <FormattedMessage id="module-sucess-defaultMultiple" />
            ) : (
              <FormattedMessage id="module-sucess-default" />
            )
          }
        </div>
        <div style={{ marginTop: '5px' }}>
          <FormattedMessage id="module-sucess-feelFreeTo" />
          <a
            style={{ color: '#fff', textDecoration: 'underline' }}
            href="mailto:support@cluedin.com"
          >
            <FormattedMessage id="module-sucess-contactSupport" />
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
  }
}

export default SuccessMessage;

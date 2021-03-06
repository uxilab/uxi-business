import React, { Component } from 'react';
import Alert from 'uxi/Alert';
import ShowMoreDetails from './ShowMoreDetails';
import MessageTitle from './MessageTitle';
import AllMessageDetails from './AllMessageDetails';
import AlertStyles from './Alert.styles';

class MultipleMessage extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
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
      defaultTitle,
      defaultExplanation,
      onClose,
      extra,
      type,
      messages,
    } = this.props;
    const {
      showMore,
    } = this.state;

    return (
      <Alert
        onClose={onClose}
        showClose
        style={AlertStyles}
        type={type}
      >
        <MessageTitle>
          {defaultTitle}
        </MessageTitle>
        <div>
          {defaultExplanation}
        </div>
        {
          extra && (
            <div>
              {extra}
            </div>
          )
        }
        <ShowMoreDetails
          showMore={showMore}
          toggle={this.toggle}
        />
        {
          showMore ? (
            <div style={{ marginTop: '12px' }}>
              <AllMessageDetails
                messages={messages}
              />
            </div>
          ) : null
        }
      </Alert>
    );
  }
}

export default MultipleMessage;

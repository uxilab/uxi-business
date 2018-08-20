import React from 'react';
import DefaultErrorContainer from '../UserFeedbackProvider';

export default Comp => props => (
  <DefaultErrorContainer>
    <Comp {...props} />
  </DefaultErrorContainer>
);

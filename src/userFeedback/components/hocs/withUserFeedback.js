import React from 'react';
import DefaultErrorContainer from '../containers/DefaultErrorContainer';

export default Comp => props => (
  <DefaultErrorContainer>
    <Comp {...props} />
  </DefaultErrorContainer>
);

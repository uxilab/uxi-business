import React from 'react';
import Slide from 'uxi/internal/Slide';
import Flex from 'uxi/Layout/Flex';

const UserFeedbackContainer = ({ children }) => (
  <Slide
    anchor="top"
    direction="bottom"
    inAttr
  >
    <Flex style={{ maxWidth: '700px', minWidth: '700px', margin: '0 auto' }}>
      {children}
    </Flex>
  </Slide>
);

export default UserFeedbackContainer;

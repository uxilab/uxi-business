import React from 'react';
import CompactSlide from 'uxi/internal/CompactSlide';
import Flex from 'uxi/Layout/Flex';

const UserFeedbackContainer = ({ children }) => (
  <CompactSlide
    anchor="top"
    direction="bottom"
    inAttr={children && React.Children.count(children) > 0}
  >
    <Flex style={{ flexDirection: 'column' }}>
      <div>
        {children}
      </div>
    </Flex>
  </CompactSlide>
);

export default UserFeedbackContainer;

import React from 'react';
import CompactSlide from 'uxi/internal/CompactSlide';
import Flex from 'uxi/Layout/Flex';

const ExtendedFlex = Flex.extend`
  flex-direction: column;

  /* & > *:first-child:before {
    content: '';
    display: block;
    height: 16px;
  }

  & > *:after {
    content: '';
    display: block;
    height: 16px;
  } */
`;

const UserFeedbackWrapper = ({ children }) => {
  const cleanedChildren = React.Children.map(children, child => child);

  return (
    <CompactSlide
      anchor="top"
      direction="bottom"
      inAttr={React.Children.count(cleanedChildren) > 0}
      offsetTop={16}
      offsetBottom={16}
    >
      <ExtendedFlex>
        {cleanedChildren}
      </ExtendedFlex>
    </CompactSlide>
  );
};

UserFeedbackWrapper.displayName = 'UserFeedbackWrapper';

export default UserFeedbackWrapper;

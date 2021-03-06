import React from 'react';
import styled from 'styled-components';
import CompactSlide from 'uxi/internal/CompactSlide';
import { flexCSSString } from 'uxi/Layout/Flex';

const ExtendedFlex = styled.div`
  ${() => flexCSSString};
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

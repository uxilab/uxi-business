import React from 'react';

const DefaultErrorMessage = ({ error }) => {
  return (
    <span style={{color:'red'}}>
      {JSON.stringify(error)}
    </span>
  )
};

DefaultErrorMessage.displayName = 'DefaultErrorMessage'

export default DefaultErrorMessage;

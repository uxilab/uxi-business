import React from 'react';
import MessageDetails from './MessageDetails';

const AllMessageDetails = ({ messages = [] }) => (
  <div>
    {messages.map(message => (
      <MessageDetails message={message} />
    ))}
  </div>
);

AllMessageDetails.displayName = 'AllMessageDetails'

export default AllMessageDetails;

import React, { useState } from 'react';
import MessageForm from './MessageForm';

function MessageApp() {
  const [message, setMessage] = useState('');

  const handleMessage = (newMessage) => {
    setMessage(newMessage);
  };

  return (
    <div>
        <hr />
        <h2>Message App</h2>

        <MessageForm onSendMessage={handleMessage} />

        <h3>Received Message:</h3>
        <p>{message}</p>
    </div>
  );
}

export default MessageApp;
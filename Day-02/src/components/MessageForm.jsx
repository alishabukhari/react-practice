import React, { useState } from 'react';

function MessageForm({ onSendMessage }) {
  const [inputMessage, setInputMessage] = useState('');

  const sendMessage = () => {
    onSendMessage(inputMessage);
    setInputMessage('');
  };

  return (
    <div>
      <style>
        {`
          .message-input {
            background-color: crimson;
            color: white;
            padding: 8px;
            border-radius: 6px;
          }

          .message-input::placeholder {
            color: white;
          }

          .send-btn {
            background-color: green;
            color: white;
            padding: 8px 16px;
            margin-left: 8px;
            border-radius: 6px;
          }
        `}
      </style>

      <input
        className="message-input"
        placeholder="Enter message..."
        value={inputMessage}
        onChange={ e => setInputMessage(e.target.value)}
      />

      <button className="send-btn" onClick={sendMessage}>
        Send
      </button>
    </div>
  );
};

export default MessageForm;
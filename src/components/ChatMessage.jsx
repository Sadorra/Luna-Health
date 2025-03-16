// src/components/ChatMessage.jsx
import React from 'react';

function ChatMessage({ text, isUser }) {
    const messageClass = isUser ? 'bg-pink-100 self-end' : 'bg-gray-100 self-start';
    const textAlign = isUser ? 'text-right' : 'text-left';

    return (
        <div className={`max-w-xs p-2 rounded-lg mb-2 ${messageClass} ${textAlign}`}>
            {text}
        </div>
    );
}

export default ChatMessage;

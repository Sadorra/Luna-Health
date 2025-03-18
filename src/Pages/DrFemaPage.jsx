// src/pages/DrFemaPage.jsx
import React, { useState } from 'react';
import ChatMessage from '../components/ChatMessage';
import Button from '../components/Button';

function DrFemaPage() {
    const [messages, setMessages] = useState([
        { text: "Hi I am Fema your health care asisitant 😊", isUser: false },
    ]);
    const [inputText, setInputText] = useState('');

    const handleSend = () => {
        if (inputText.trim() !== '') {
            setMessages([...messages, { text: inputText, isUser: true }]);
            setInputText('');

            // Simulate a response from Dr. Fema (replace with actual AI logic)
            setTimeout(() => {
                setMessages(prevMessages => [...prevMessages, { text: "Thanks for your message! I'm processing it...", isUser: false }]);
            }, 500);
        }
    };

    return (
        <div className="container mx-auto p-4 ">
            <div className="h-64 overflow-y-auto flex flex-col">
                {messages.map((message, index) => (
                    <ChatMessage key={index} text={message.text} isUser={message.isUser} />
                ))}
            </div>
            <div className="flex mt-4 py-60 px-6">
                <input
                    type="text"
                    className=" shadow appearance-none border rounded w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Input text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                />
                <Button primary onClick={handleSend}>
                    Send
                </Button>
            </div>
        </div>
    );
}

export default DrFemaPage;




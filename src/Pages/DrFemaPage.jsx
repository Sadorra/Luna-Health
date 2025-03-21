// src/pages/DrFemaPage.jsx
import React, { useState } from 'react';
import ChatMessage from '../components/ChatMessage';
import Button from '../components/Button';

function DrFemaPage() {
    const [messages, setMessages] = useState([
        { text: "Hi, I am Dr. Fema, your healthcare assistant 😊", isUser: false },
    ]);
    const [inputText, setInputText] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSend = async () => {
        if (inputText.trim() === '') return;

        // Add user message to chat
        const newMessages = [...messages, { text: inputText, isUser: true }];
        setMessages(newMessages);
        setInputText('');
        setLoading(true);

        try {
            const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer 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', // Replace with your real API key
                    'HTTP-Referer': '<YOUR_SITE_URL>', // Optional
                    'X-Title': '<YOUR_SITE_NAME>',     // Optional
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    model: 'mistralai/mistral-small-3.1-24b-instruct:free',
                    messages: [
                        {
                            role: 'system',
                            content: 'You are Dr. Fema, a helpful female AI healthcare assistant. Your job is to assist users with health-related questions based on their symptoms and guide them toward treatments till they get doctor.'
                        },
                        {
                            role: 'user',
                            content: [
                                {
                                    type: 'text',
                                    text: inputText
                                }
                            ]
                        }
                    ]
                }),
            });

            const json = await response.json();

            const aiReply =
                json?.choices?.[0]?.message?.content ||
                "I'm sorry, I couldn't understand your message. Can you please try again?";

            // Add AI reply to chat
            setMessages(prev => [...prev, { text: aiReply, isUser: false }]);
        } catch (error) {
            console.error('Error communicating with Dr. Fema:', error);
            setMessages(prev => [...prev, { text: 'Oops! Something went wrong. Please try again later.', isUser: false }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <div className="h-[70vh] overflow-y-auto flex flex-col space-y-2 bg-gray-100 p-4 rounded-md shadow-md">
                {messages.map((message, index) => (
                    <ChatMessage key={index} text={message.text} isUser={message.isUser} />
                ))}
                {loading && (
                    <ChatMessage text="Dr. Fema is typing..." isUser={false} />
                )}
            </div>

            <div className="flex mt-4 gap-2">
                <input
                    type="text"
                    className="shadow appearance-none border rounded w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Type your symptoms or questions..."
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                />
                <Button primary onClick={handleSend} disabled={loading}>
                    {loading ? 'Sending...' : 'Send'}
                </Button>
            </div>
        </div>
    );
}

export default DrFemaPage;

import React, { useState } from 'react';

const OpenRouterChat = () => {
  const [userInput, setUserInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFetch = async () => {
    if (!userInput.trim()) {
      alert('Please enter your message.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer <OPENROUTER_API_KEY>', // Replace with your API Key
          'HTTP-Referer': '<YOUR_SITE_URL>', // Optional
          'X-Title': '<YOUR_SITE_NAME>',     // Optional
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'mistralai/mistral-small-3.1-24b-instruct:free',
          messages: [
            {
              role: 'system',
              content: 'You are a Doctor AI who helps users with symptom-based disease screening and health assistance.'
            },
            {
              role: 'user',
              content: [
                {
                  type: 'text',
                  text: userInput
                }
              ]
            }
          ]
        }),
      });

      const json = await res.json();
      console.log(json);

      if (json.choices && json.choices.length > 0) {
        setResponse(json.choices[0].message?.content || 'No response content.');
      } else {
        setResponse('No response received.');
      }
    } catch (error) {
      console.error('Error fetching from OpenRouter:', error);
      setResponse('Error fetching response.');
    }
    setLoading(false);
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Doctor AI Chat</h1>

      <textarea
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        rows={5}
        className="w-full p-3 border border-gray-300 rounded mb-4"
        placeholder="Enter symptoms or health questions..."
      />

      <button
        onClick={handleFetch}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Ask Doctor AI'}
      </button>

      {response && (
        <div className="mt-4 p-3 border border-gray-300 rounded bg-gray-100">
          <h2 className="font-semibold mb-2">AI Response:</h2>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default OpenRouterChat;

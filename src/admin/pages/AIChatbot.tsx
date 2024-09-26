import React, { useState } from 'react';
import axios from 'axios'; // For making API requests
import { useNavigate } from 'react-router-dom';
import { PaperAirplaneIcon } from '@heroicons/react/outline';

const AIChatbot: React.FC = () => {
  const [messages, setMessages] = useState<{ type: string; content: string }[]>([]);
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    // Add user message
    setMessages([...messages, { type: 'user', content: input }]);

    // Simulate bot response or use free API here (e.g., OpenAI, or mock API)
    try {
      const response = await axios.post('https://some-free-api.com/vulnerability-chat', { query: input });
      const botResponse = response.data.answer || 'Sorry, I didn’t understand that. Please ask about vulnerability scraping.';

      // Add bot response
      setMessages(prev => [...prev, { type: 'bot', content: botResponse }]);
    } catch (error) {
      setMessages(prev => [...prev, { type: 'bot', content: 'API error, please try again later.' }]);
    }

    setInput(''); // Clear input
  };

  const handlePrebuiltCommand = (command: string) => {
    setInput(command);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex items-center justify-center">
      <div className="max-w-lg w-full bg-white shadow-xl rounded-lg p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Cybersentinel Chatbot</h2>
          <ChipIcon className="h-6 w-6 text-blue-500" />
        </div>

        <div className="mt-4 h-96 overflow-y-auto border border-gray-300 rounded-lg p-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`${message.type === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded-lg p-2 m-1`}>
                {message.content}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center mt-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about vulnerabilities..."
            className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
          />
          <button
            onClick={handleSendMessage}
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            <PaperAirplaneIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-4 flex gap-2">
          {/* Prebuilt Commands */}
          <button
            onClick={() => handlePrebuiltCommand('What are common web vulnerabilities?')}
            className="px-3 py-1 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition"
          >
            Web Vulnerabilities
          </button>
          <button
            onClick={() => handlePrebuiltCommand('How does vulnerability scraping work?')}
            className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            Scraping Process
          </button>
          <button
            onClick={() => handlePrebuiltCommand('What are the best scraping tools?')}
            className="px-3 py-1 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
          >
            Scraping Tools
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIChatbot;

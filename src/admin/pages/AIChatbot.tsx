import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faRobot, faUser } from '@fortawesome/free-solid-svg-icons';

type Command = "/scan" | "/report" | "/check" | "/help" | "/clear";

const prebuiltCommands = [
  { command: "/scan", description: "Start a new vulnerability scan" },
  { command: "/report", description: "Generate a vulnerability report" },
  { command: "/check", description: "Check if an email has been pwned" },
  { command: "/help", description: "Show available commands" },
  { command: "/clear", description: "Clear chat history" },
];

const botResponses: Record<Command, string> = {
  "/scan": "Initiating vulnerability scan. Please specify the target URL or IP address.",
  "/report": "Generating vulnerability report. This may take a few moments.",
  "/check": "Please provide an email address to check if it has been involved in any known data breaches.",
  "/help": "Available commands:\n" + prebuiltCommands.map(cmd => `${cmd.command} - ${cmd.description}`).join('\n'),
  "/clear": "Chat history cleared.",
};

const Chatbot = () => {
  const [messages, setMessages] = useState<{ user: boolean, text: string }[]>([]);
  const [input, setInput] = useState('');
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = () => {
    if (input.trim() === '') return;

    const newMessage = { user: true, text: input };
    setMessages(prev => [...prev, newMessage]);

    // Bot response
    const command = input as Command;
    if (botResponses[command]) {
      const botReply = { user: false, text: botResponses[command] };
      setMessages(prev => [...prev, botReply]);
    }

    if (command === '/clear') {
      setMessages([]);
    }

    setInput('');
  };

  return (
    <>
      <button
        className="fixed bottom-4 right-4 inline-flex items-center justify-center text-sm font-medium disabled:pointer-events-none disabled:opacity-50 border rounded-full w-16 h-16 bg-black hover:bg-gray-700 m-0 cursor-pointer border-gray-200 p-0 normal-case leading-5 hover:text-gray-900"
        type="button" aria-haspopup="dialog" aria-expanded="false" data-state="closed">
        <FontAwesomeIcon icon={faRobot} className="text-white block border-gray-200" />
      </button>

      <div style={{ boxShadow: '0 0 #0000, 0 1px 2px 0 rgb(0 0 0 / 0.05)' }}
        className="fixed bottom-[calc(4rem+1.5rem)] right-0 mr-4 bg-white p-6 rounded-lg border border-[#e5e7eb] w-[440px] h-[634px]">

        {/* Heading */}
        <div className="flex flex-col space-y-1.5 pb-6">
          <h2 className="font-semibold text-lg tracking-tight">Chatbot</h2>
          <p className="text-sm text-[#6b7280] leading-3">Powered by CyberSentinel</p>
        </div>

        {/* Chat Container */}
        <div className="pr-4 h-[474px] overflow-y-auto" ref={chatContainerRef} style={{ display: 'table', minWidth: '100%' }}>
          {messages.map((msg, index) => (
            <div key={index} className={`flex gap-3 my-4 text-gray-600 text-sm flex-1 ${msg.user ? 'justify-end' : 'justify-start'}`}>
              <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                <div className={`rounded-full bg-gray-100 border p-1 ${msg.user ? 'bg-blue-500' : 'bg-gray-100'}`}>
                  <FontAwesomeIcon icon={msg.user ? faUser : faRobot} className="text-white" />
                </div>
              </span>
              <p className="leading-relaxed">
                <span className="block font-bold text-gray-700">{msg.user ? 'You' : 'AI'}</span>
                {msg.text}
              </p>
            </div>
          ))}
        </div>

        {/* Input box */}
        <div className="flex items-center pt-0">
          <form
            className="flex items-center justify-center w-full space-x-2"
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}>
            <input
              className="flex h-10 w-full rounded-md border border-[#e5e7eb] px-3 py-2 text-sm placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#9ca3af] disabled:cursor-not-allowed disabled:opacity-50 text-[#030712] focus-visible:ring-offset-2"
              placeholder="Type your message"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium text-[#f9fafb] disabled:pointer-events-none disabled:opacity-50 bg-black hover:bg-[#111827E6] h-10 px-4 py-2">
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Chatbot;

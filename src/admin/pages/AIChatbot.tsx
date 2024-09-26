import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faPaperPlane, faTrash, faRobot, faUser } from '@fortawesome/free-solid-svg-icons';

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

const CyberSentinelLogo = () => (
  <svg viewBox="0 0 100 100" className="w-10 h-10 mr-3">
    <circle cx="50" cy="50" r="45" fill="#3B82F6" />
    <path d="M50 25 L25 50 L50 75 L75 50 Z" fill="white" />
    <circle cx="50" cy="50" r="10" fill="#1D4ED8" />
  </svg>
);

const Alert = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start p-4 mb-4 bg-blue-100 border border-blue-200 rounded-lg">
    <FontAwesomeIcon icon={faShieldAlt} className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
    <div>{children}</div>
  </div>
);

const Button = ({
  onClick,
  children,
  variant = 'default',
  className = '',
}: {
  onClick: () => void;
  children: React.ReactNode;
  variant?: string;
  className?: string;
}) => {
  const baseClasses = "px-4 py-2 rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variantClasses =
    variant === 'danger'
      ? "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500"
      : "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500";

  return (
    <button onClick={onClick} className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
    </button>
  );
};

const Input = ({
  value,
  onChange,
  onKeyPress,
  placeholder,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress: (e: React.KeyboardEvent) => void;
  placeholder: string;
}) => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    onKeyPress={onKeyPress}
    placeholder={placeholder}
    className="flex-1 border-2 border-gray-300 p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
  />
);

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<{ text: string; sender: string }[]>([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = () => {
    if (input.trim()) {
      const newMessages = [...messages, { text: input, sender: 'user' }];
      setMessages(newMessages);
      handleBotResponse(input);
      setInput('');
    }
  };

  const handleBotResponse = async (userInput: string) => {
    const command = userInput.split(' ')[0].toLowerCase() as Command;
    let botReply = botResponses[command] || "I'm sorry, I don't understand that command. Type /help for a list of available commands.";

    if (command === '/check') {
      const email = userInput.split(' ')[1];
      if (email) {
        botReply = await checkEmailPwned(email);
      } else {
        botReply = "Please provide an email address after the /check command.";
      }
    }

    setTimeout(() => {
      setMessages(prev => [...prev, { text: botReply, sender: 'bot' }]);
    }, 500);
  };

  const checkEmailPwned = async (email: string): Promise<string> => {
    // Simulate an API call to check if the email is pwned
    // Replace this with your actual API logic
    const response = await fetch(`https://api.some-email-checker.com/check?email=${email}`);
    const data = await response.json();
    
    return data.isPwned ? "This email has been pwned." : "This email is safe.";
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const clearChat = () => {
    setMessages([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 flex items-center">
          <CyberSentinelLogo />
          <h1 className="text-2xl font-bold text-white">CyberSentinel Chatbot</h1>
        </div>
        <div className="h-[32rem] flex flex-col">
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[70%] p-3 rounded-2xl ${
                  message.sender === 'user'
                    ? 'bg-blue-500 text-white rounded-br-none'
                    : 'bg-gray-200 text-gray-800 rounded-bl-none'
                }`}>
                  <div className="flex items-center mb-1">
                    <FontAwesomeIcon 
                      icon={message.sender === 'user' ? faUser : faRobot} 
                      className={`h-4 w-4 ${message.sender === 'user' ? 'text-blue-200' : 'text-gray-500'} mr-2`}
                    />
                    <span className="font-semibold">{message.sender === 'user' ? 'You' : 'CyberSentinel'}</span>
                  </div>
                  <p>{message.text}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-4 bg-gray-50 border-t border-gray-200">
            <div className="flex items-center space-x-3">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type a command or message..."
              />
              <Button onClick={handleSend} className="px-4 py-3">
                <FontAwesomeIcon icon={faPaperPlane} />
              </Button>
              <Button onClick={clearChat} variant="danger" className="px-4 py-3">
                <FontAwesomeIcon icon={faTrash} />
              </Button>
            </div>
            <Alert>
              <div className="text-sm text-blue-800">
                <strong>Tip:</strong> Type /help to see available commands.
              </div>
            </Alert>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;

import React from 'react';
import { Shield, AlertTriangle, CheckCircle } from '@mui/icons-material';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const prebuiltCommands = [
  { command: "/scan", description: "Start a new vulnerability scan" },
  { command: "/report", description: "Generate a vulnerability report" },
  { command: "/check", description: "Check if an email has been pwned" },
  { command: "/help", description: "Show available commands" },
  { command: "/clear", description: "Clear chat history" },
];

const botResponses = {
  "/scan": "Initiating vulnerability scan. Please specify the target URL or IP address.",
  "/report": "Generating vulnerability report. This may take a few moments.",
  "/check": "Please provide an email address to check if it has been involved in any known data breaches.",
  "/help": "Available commands:\n" + prebuiltCommands.map(cmd => `${cmd.command} - ${cmd.description}`).join('\n'),
  "/clear": "Chat history cleared.",
};

const CyberSentinelLogo = () => (
  <svg viewBox="0 0 100 100" className="w-8 h-8 mr-2">
    <circle cx="50" cy="50" r="45" fill="#3B82F6" />
    <path d="M50 25 L25 50 L50 75 L75 50 Z" fill="white" />
    <circle cx="50" cy="50" r="10" fill="#1D4ED8" />
  </svg>
);

const Chatbot: React.FC = () => {
  const [messages, setMessages] = React.useState([]);
  const [input, setInput] = React.useState('');
  const messagesEndRef = React.useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(scrollToBottom, [messages]);

  const handleSend = () => {
    if (input.trim()) {
      const newMessages = [...messages, { text: input, sender: 'user' }];
      setMessages(newMessages);
      handleBotResponse(input);
      setInput('');
    }
  };

  const handleBotResponse = async (userInput: string) => {
    const command = userInput.split(' ')[0].toLowerCase();
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

  const checkEmailPwned = async (email: string) => {
    try {
      const response = await fetch(`https://haveibeenpwned.com/api/v3/breachedaccount/${email}`, {
        method: 'GET',
        headers: {
          'User-Agent': 'CyberSentinelChatbot'
        }
      });

      if (response.status === 200) {
        const data = await response.json();
        return `The email ${email} has been found in ${data.length} data breach(es). It's recommended to change your password and enable two-factor authentication where possible.`;
      } else if (response.status === 404) {
        return `Good news! The email ${email} has not been found in any known data breaches.`;
      } else {
        return "An error occurred while checking the email. Please try again later.";
      }
    } catch (error) {
      console.error("Error checking email:", error);
      return "An error occurred while checking the email. Please try again later.";
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const clearChat = () => {
    setMessages([]);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="bg-blue-600 text-white">
          <CardTitle className="text-xl font-bold flex items-center">
            <CyberSentinelLogo />
            CyberSentinel Chatbot
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="h-[400px] overflow-y-auto p-4 bg-gray-100">
            {messages.map((message, index) => (
              <div key={index} className={`mb-4 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <div className={`inline-block p-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-white text-black shadow'}`}>
                  {message.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-4 bg-white">
            <div className="flex items-center">
              <Input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type a command or message..."
                className="flex-1"
              />
              <Button onClick={handleSend} className="ml-2">
                Send
              </Button>
              <Button onClick={clearChat} variant="destructive" className="ml-2">
                Clear
              </Button>
            </div>
            <Alert className="mt-4">
              <Shield className="h-4 w-4" />
              <AlertTitle>Tip</AlertTitle>
              <AlertDescription>
                Type /help to see available commands
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Chatbot;

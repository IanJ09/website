'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { MessageCircle, Send, X, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import OpenAI from 'openai';

export default function AIanbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi there! I\'m AIan, your website assistant. How can I help you improve your website today?' },
  ]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [styles, setStyles] = useState({
    fontFamily: 'font-sans',
    textColor: 'text-white',
    backgroundColor: 'bg-black',
  });

  const [openai, setOpenai] = useState<OpenAI | null>(null);
  const [apiKeyMissing, setApiKeyMissing] = useState(false);

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
    if (apiKey) {
      setOpenai(new OpenAI({ apiKey }));
    } else {
      console.error('OpenAI API key is missing. Please set the NEXT_PUBLIC_OPENAI_API_KEY environment variable.');
      setApiKeyMissing(true);
      setMessages(prevMessages => [
        ...prevMessages,
        { sender: 'bot', text: 'I apologize, but I\'m currently unable to process commands due to a configuration issue. Please contact the website administrator for assistance.' }
      ]);
    }
  }, []);

  const processCommand = useCallback(async (command: string) => {
    if (!openai) {
      return "I'm sorry, but I can't process commands right now due to a configuration issue. Please try again later or contact the website administrator.";
    }

    try {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a helpful assistant that processes style commands for a website. Respond with a JSON object containing the Tailwind classes for the requested style changes. If the command is not recognized, respond with null." },
          { role: "user", content: command }
        ],
      });

      const result = JSON.parse(response.choices[0].message.content || "null");
      if (result) {
        setStyles(prevStyles => ({ ...prevStyles, ...result }));
        return `Styles updated: ${Object.keys(result).join(', ')}`;
      } else {
        return "Sorry, I didn't understand that command. Try something like 'change font to serif' or 'set background color to blue'.";
      }
    } catch (error) {
      console.error('Error processing command:', error);
      return "Sorry, there was an error processing your command. Please try again or contact the website administrator if the problem persists.";
    }
  }, [openai]);

  const handleSend = async (text: string) => {
    if (!text.trim()) return;
    setMessages(prevMessages => [...prevMessages, { sender: 'user', text }]);
    setInputText('');

    if (apiKeyMissing) {
      setMessages(prevMessages => [...prevMessages, { sender: 'bot', text: "I'm sorry, but I can't process your request due to a configuration issue. Please contact the website administrator." }]);
    } else {
      const response = await processCommand(text);
      setMessages(prevMessages => [...prevMessages, { sender: 'bot', text: response }]);
    }
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className={`fixed top-4 right-4 z-50 ${styles.fontFamily} ${styles.textColor}`}>
      <motion.button
        className="p-2 bg-[#a52a2a] text-white rounded-full hover:bg-[#841717] shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open AIanbot"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`absolute top-12 right-0 w-80 h-96 ${styles.backgroundColor} ${styles.textColor} p-4 rounded-lg shadow-lg flex flex-col`}
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-bold text-[#a52a2a]">AIan - Website Assistant</h2>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            {apiKeyMissing && (
              <div className="flex items-center bg-yellow-500/20 text-yellow-500 text-sm p-2 rounded mb-2">
                <AlertTriangle className="w-4 h-4 mr-2" />
                <span>AI features are currently unavailable.</span>
              </div>
            )}

            <div className="flex-1 overflow-y-auto space-y-2 pr-2">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${
                    msg.sender === 'bot' ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div
                    className={`max-w-[75%] px-4 py-2 rounded-lg ${
                      msg.sender === 'bot'
                        ? 'bg-[#a52a2a]/80 text-white'
                        : 'bg-gray-700 text-white'
                    }`}
                  >
                    <p>{msg.text}</p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <form
              className="mt-2 flex"
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(inputText);
              }}
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="flex-1 p-2 rounded-l-lg border-2 border-[#a52a2a] bg-gray-800 text-white focus:outline-none focus:border-[#841717]"
                placeholder={apiKeyMissing ? "AI features unavailable" : "Ask something..."}
                disabled={apiKeyMissing}
              />
              <button
                type="submit"
                className={`px-4 bg-[#a52a2a] text-white rounded-r-lg transition-colors duration-200 ${apiKeyMissing ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#841717]'}`}
                disabled={apiKeyMissing}
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


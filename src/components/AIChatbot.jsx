import React, { useState, useRef, useEffect } from "react";
import { chatWithAI } from "../services/aiChatbotService";
import "../styles/Chatbot.css";

const AIChatbot = ({ context = "general" }) => {
  // State for component
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "🤖 Gemini AI Assistant\n\nAsk me anything about programming, DSA, web development, backend, databases, DevOps, cloud platforms, system design, interviews, or any technical topic!\n\n💡 Tip: The more specific your question, the better my answer!",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const [error, setError] = useState(null);
  const [Renderer, setRenderer] = useState(null);
  const [remarkPlugins, setRemarkPlugins] = useState([]);

  // Load markdown dependencies on mount - only once
  useEffect(() => {
    let mounted = true;

    // Dynamic import with proper error handling
    Promise.all([
      import("react-markdown").catch(() => null),
      import("remark-gfm").catch(() => null),
    ]).then(([markdownModule, remarkGfmModule]) => {
      if (mounted) {
        if (markdownModule) {
          setRenderer(() => markdownModule.default);
        }
        if (remarkGfmModule) {
          setRemarkPlugins([remarkGfmModule.default || remarkGfmModule]);
        }
      }
    });

    return () => {
      mounted = false;
    };
  }, []); // Empty dependency array - run only once on mount

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (!inputValue.trim()) return;

    // Add user message to chat
    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);
    setError(null);

    try {
      // Use knowledge base AI
      const aiResponse = await chatWithAI(inputValue);

      const botMessage = {
        id: messages.length + 2,
        text: aiResponse,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      setError(err.message || "Failed to get response");
      const errorMessage = {
        id: messages.length + 2,
        text: `Sorry, I encountered an error: ${err.message}. Please try again or check your API key configuration.`,
        sender: "bot",
        timestamp: new Date(),
        isError: true,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: 1,
        text: "🤖 Gemini AI Assistant\n\nAsk me anything about programming, DSA, web development, backend, databases, DevOps, cloud platforms, system design, interviews, or any technical topic!\n\n💡 Tip: The more specific your question, the better my answer!",
        sender: "bot",
        timestamp: new Date(),
      },
    ]);
    setError(null);
  };

  return (
    <div className="ai-chatbot-container">
      {/* Chatbot Toggle Button */}
      <button
        className="chatbot-toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
        title="Open AI Assistant"
      >
        <span className="chatbot-icon">💬</span>
        {!isOpen && <span className="chatbot-label">AI Assistant</span>}
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="chatbot-window">
          {/* Header */}
          <div className="chatbot-header">
            <h3>AI Assistant</h3>
            <div className="chatbot-controls">
              <button
                className="chatbot-clear-btn"
                onClick={handleClearChat}
                title="Clear chat"
              >
                🔄
              </button>
              <button
                className="chatbot-close-btn"
                onClick={() => setIsOpen(false)}
                title="Close"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Messages Display */}
          <div className="chatbot-messages">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`message ${msg.sender} ${msg.isError ? "error" : ""}`}
              >
                <div className="message-content">
                  {msg.sender === "bot" && <span className="bot-avatar">🤖</span>}
                  {msg.sender === "bot" ? (
                    <div className="bot-message-body">
                      {Renderer ? (
                        <Renderer remarkPlugins={remarkPlugins}>{msg.text}</Renderer>
                      ) : (
                        <p>{msg.text}</p>
                      )}
                    </div>
                  ) : (
                    <p>{msg.text}</p>
                  )}
                  {msg.sender === "user" && <span className="user-avatar">👤</span>}
                </div>
                <span className="message-time">
                  {msg.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
            ))}

            {isLoading && (
              <div className="message bot loading">
                <div className="message-content">
                  <span className="bot-avatar">🤖</span>
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Field */}
          <form onSubmit={handleSendMessage} className="chatbot-input-form">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask me anything..."
              disabled={isLoading}
              className="chatbot-input"
            />
            <button
              type="submit"
              disabled={isLoading || !inputValue.trim()}
              className="chatbot-send-btn"
            >
              {isLoading ? "..." : "Send"}
            </button>
          </form>

          {error && <div className="chatbot-error">{error}</div>}
        </div>
      )}
    </div>
  );
};

export default AIChatbot;

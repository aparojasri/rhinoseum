"use client";
import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, User, Bot, Phone } from "lucide-react";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hello! Welcome to Arks Academy. I can help you find art, track orders, or book therapy. How can I assist you today?", isUser: false }
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const faqs = [
    "Track my order",
    "How do I sell art?",
    "Book Art Therapy",
    "Contact Support"
  ];

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    
    // 1. Add User Message
    setMessages((prev) => [...prev, { text, isUser: true }]);
    setInputValue("");

    // 2. Simulate AI Response (Logic)
    setTimeout(() => {
      let response = "Thanks for reaching out! Our team is reviewing your request.";
      
      const lowerText = text.toLowerCase();
      if (lowerText.includes("track") || lowerText.includes("order")) {
        response = "You can track your order in your Profile > Order History section. Would you like the link?";
      } else if (lowerText.includes("sell") || lowerText.includes("artist")) {
        response = "To sell your art, click 'Teach & Sell' in the navigation bar and register as an artist. We take 15% commission.";
      } else if (lowerText.includes("therapy") || lowerText.includes("heal")) {
        response = "Our Art Therapy sessions are available under the 'Therapy' tab. We offer Mandala and Clay sessions.";
      } else if (lowerText.includes("contact") || lowerText.includes("help")) {
        response = "You can reach us directly via WhatsApp at +91 98765 43210 or email arksacademy@gmail.com.";
      }

      setMessages((prev) => [...prev, { text: response, isUser: false }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      {/* TOGGLE BUTTON */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:bg-blue-700 transition-all hover:scale-110 flex items-center gap-2 font-bold animate-bounce-slow"
        >
          <MessageCircle size={28} />
          <span className="hidden md:block">Chat with us</span>
        </button>
      )}

      {/* CHAT WINDOW */}
      {isOpen && (
        <div className="bg-white w-[360px] h-[550px] rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-fade-in-up ring-1 ring-black/5">
          
          {/* HEADER */}
          <div className="bg-slate-900 p-4 flex justify-between items-center text-white shadow-md">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <Bot size={24} />
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-slate-900"></div>
              </div>
              <div>
                <span className="font-bold block">Arks Assistant</span>
                <span className="text-xs text-blue-200">Online Now</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-slate-800 p-2 rounded-full transition">
              <X size={20} />
            </button>
          </div>

          {/* MESSAGES AREA */}
          <div className="flex-1 p-4 bg-slate-50 overflow-y-auto space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm shadow-sm ${msg.isUser ? 'bg-blue-600 text-white rounded-br-none' : 'bg-white border border-slate-200 text-slate-700 rounded-bl-none'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* FAQ BUTTONS */}
          <div className="px-4 py-2 bg-white border-t border-slate-100">
            <p className="text-xs text-slate-400 mb-2 font-bold uppercase">Quick Questions</p>
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {faqs.map(faq => (
                <button 
                  key={faq} 
                  onClick={() => handleSend(faq)}
                  className="whitespace-nowrap text-xs bg-slate-100 hover:bg-blue-50 hover:text-blue-600 text-slate-600 px-3 py-1.5 rounded-full border border-slate-200 transition"
                >
                  {faq}
                </button>
              ))}
            </div>
          </div>

          {/* INPUT AREA */}
          <div className="p-4 bg-white border-t border-slate-100 relative">
            <input 
              type="text" 
              placeholder="Type a message..." 
              className="w-full pl-4 pr-12 py-3 border border-slate-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend(inputValue)}
            />
            <button 
              onClick={() => handleSend(inputValue)}
              className="absolute right-5 top-1/2 -translate-y-1/2 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
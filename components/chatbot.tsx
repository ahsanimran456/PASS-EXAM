"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, Bot, User, ExternalLink, Sparkles } from "lucide-react"

// Static FAQ data
const faqData = [
  {
    keywords: ["price", "cost", "how much", "pricing", "fee", "charge", "rate"],
    answer:
      "Our pricing varies based on the exam type and complexity. Generally, prices start from $50 for basic assignments. For a personalized quote, please contact us on WhatsApp or fill out our consultation form.",
  },
  {
    keywords: ["service", "what do you", "offer", "help with", "do you do"],
    answer:
      "We offer professional exam help services including: Online Proctored Exams, GED & HiSET Tests, Professional Certifications (CompTIA, PMP, AWS), College Entrance Exams, Academic Assignments, and Live Class Support. Our US-based tutors have doctorate-level expertise.",
  },
  {
    keywords: ["how it work", "process", "how does", "steps", "procedure"],
    answer:
      "It's simple! 1) Fill out our Quick Consult form or message us on WhatsApp. 2) Share your exam details. 3) We match you with an expert tutor. 4) Our tutor helps you prepare or takes the exam on your behalf. 5) You get your results!",
  },
  {
    keywords: ["safe", "secure", "privacy", "confidential", "caught", "detect"],
    answer:
      "We prioritize your privacy and security. All communications are encrypted, and we use advanced techniques to ensure undetectable assistance. Your personal information is never shared with third parties.",
  },
  {
    keywords: ["guarantee", "pass", "success", "money back", "refund"],
    answer:
      "We have a 98% success rate! We offer a satisfaction guarantee - if we don't deliver as promised, you're eligible for a refund. Our expert tutors are committed to your success.",
  },
  {
    keywords: ["contact", "reach", "phone", "email", "whatsapp", "talk"],
    answer:
      "You can reach us via: WhatsApp: +1 (312) 680-2390, Email: support@passmyexamnow.com, or use our Quick Consult form on the homepage. We respond within minutes!",
  },
  {
    keywords: ["tutor", "expert", "who", "qualified", "teacher"],
    answer:
      "Our tutors are highly qualified US-based professionals, including doctorate-level experts in various fields. They have years of experience helping students with exams and certifications.",
  },
  {
    keywords: ["time", "how long", "duration", "fast", "quick", "urgent", "deadline"],
    answer:
      "We handle both scheduled and urgent requests! For last-minute exams, contact us immediately on WhatsApp. We can often accommodate same-day requests depending on availability.",
  },
  {
    keywords: ["payment", "pay", "method", "card", "paypal"],
    answer:
      "We accept multiple payment methods including credit/debit cards, PayPal, and other secure options. Payment details are shared after consultation to ensure transparency.",
  },
  {
    keywords: ["proctored", "proctor", "lockdown", "webcam", "monitored"],
    answer:
      "Yes! We specialize in proctored exams including those with webcam monitoring, lockdown browsers, and AI proctoring. Our experts use proven methods to provide discreet assistance.",
  },
  {
    keywords: ["ged", "hiset", "high school", "equivalency"],
    answer:
      "We offer comprehensive GED and HiSET exam support. Our tutors can help you prepare or provide direct exam assistance. These are among our most popular services!",
  },
  {
    keywords: ["certification", "comptia", "aws", "pmp", "cisco", "professional"],
    answer:
      "We help with various professional certifications including CompTIA (A+, Network+, Security+), AWS, PMP, CISCO, and more. Our certified experts ensure you pass on your first attempt.",
  },
  {
    keywords: ["hello", "hi", "hey", "good morning", "good evening"],
    answer:
      "Hello! Welcome to Pass My Exam Now. I'm here to answer your questions about our exam help services. How can I assist you today?",
  },
  {
    keywords: ["thank", "thanks", "appreciate"],
    answer:
      "You're welcome! If you have any more questions, feel free to ask. For personalized assistance, you can always reach us on WhatsApp!",
  },
]

// Suggested quick questions
const quickQuestions = [
  "What services do you offer?",
  "How does it work?",
  "What are your prices?",
  "Is it safe and secure?",
  "How can I contact you?",
]

interface Message {
  id: number
  text: string
  isBot: boolean
  timestamp: Date
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi there! 👋 I'm your virtual assistant. Ask me anything about our exam help services, or choose a quick question below!",
      isBot: true,
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const findAnswer = (question: string): string => {
    const lowerQuestion = question.toLowerCase()

    for (const faq of faqData) {
      for (const keyword of faq.keywords) {
        if (lowerQuestion.includes(keyword)) {
          return faq.answer
        }
      }
    }

    // Default response for unrecognized questions
    return "I'm not sure about that specific question. For detailed assistance, please contact our team on WhatsApp - they'll be happy to help you personally!"
  }

  const handleSend = (text?: string) => {
    const messageText = text || inputValue.trim()
    if (!messageText) return

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: messageText,
      isBot: false,
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(() => {
      const answer = findAnswer(messageText)
      const botMessage: Message = {
        id: messages.length + 2,
        text: answer,
        isBot: true,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 800)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-300 group bg-gradient-to-br from-[#FF6B35] via-[#FF8C5A] to-[#FF6B35] hover:scale-110 hover:shadow-[0_0_30px_rgba(255,107,53,0.5)]"
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:scale-110 transition-transform" />
          <span className="absolute inset-0 rounded-2xl border-2 border-white/30 animate-ping opacity-75" />
          <span className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse" />
          </span>
        </button>
      )}

      {/* Chat Window */}
      <div
        className={`fixed z-50 flex flex-col overflow-hidden transition-all duration-300 border border-[#1E3A5F] bg-[#0A192F] rounded-2xl sm:rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.4)]
          bottom-4 right-4 left-4
          sm:bottom-6 sm:right-6 sm:left-auto
          sm:w-[360px] md:w-[400px]
          h-[calc(100vh-2rem)] max-h-[550px]
          sm:h-[520px] sm:max-h-[520px] md:h-[560px] md:max-h-[560px]
          ${isOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95 pointer-events-none"}`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0A192F] via-[#112240] to-[#0A192F] p-4 sm:p-5 text-white relative overflow-hidden flex-shrink-0">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6B35]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#FF6B35]/5 rounded-full blur-2xl" />

          <div className="flex items-center gap-3 sm:gap-4 relative z-10">
            <div className="relative flex-shrink-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#FF6B35] to-[#FF8C5A] rounded-xl flex items-center justify-center shadow-lg shadow-[#FF6B35]/30">
                <Bot className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <span className="absolute -bottom-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full border-2 border-[#0A192F] flex items-center justify-center">
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full" />
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-sm sm:text-base truncate">Top Exam Helpers</h3>
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-[#FF6B35] flex-shrink-0" />
              </div>
              <p className="text-xs sm:text-sm text-gray-400 flex items-center gap-2">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0" />
                <span className="truncate">Online - Replies instantly</span>
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/10 hover:bg-[#FF6B35] flex items-center justify-center transition-all flex-shrink-0 active:scale-95 hover:scale-105 hover:shadow-lg hover:shadow-[#FF6B35]/30"
              aria-label="Close chat"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-gradient-to-b from-[#0A192F] to-[#0D1F3C]">
          {messages.map((message) => (
            <div key={message.id} className={`flex gap-2 sm:gap-3 ${message.isBot ? "justify-start" : "justify-end"}`}>
              {message.isBot && (
                <div className="w-7 h-7 sm:w-9 sm:h-9 bg-gradient-to-br from-[#FF6B35] to-[#FF8C5A] rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#FF6B35]/20">
                  <Bot className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                </div>
              )}
              <div
                className={`max-w-[80%] sm:max-w-[75%] p-3 sm:p-4 text-xs sm:text-sm leading-relaxed ${
                  message.isBot
                    ? "bg-[#112240] text-gray-200 rounded-2xl rounded-tl-md border border-[#1E3A5F] shadow-lg"
                    : "bg-gradient-to-br from-[#FF6B35] to-[#FF8C5A] text-white rounded-2xl rounded-tr-md shadow-lg shadow-[#FF6B35]/20"
                }`}
              >
                {message.text}
              </div>
              {!message.isBot && (
                <div className="w-7 h-7 sm:w-9 sm:h-9 bg-[#1E3A5F] rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 border border-[#2E4A6F]">
                  <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF6B35]" />
                </div>
              )}
            </div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <div className="flex gap-2 sm:gap-3 justify-start">
              <div className="w-7 h-7 sm:w-9 sm:h-9 bg-gradient-to-br from-[#FF6B35] to-[#FF8C5A] rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#FF6B35]/20">
                <Bot className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
              </div>
              <div className="bg-[#112240] p-3 sm:p-4 rounded-2xl rounded-tl-md border border-[#1E3A5F]">
                <div className="flex gap-1 sm:gap-1.5">
                  <span
                    className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#FF6B35] rounded-full animate-bounce"
                    style={{ animationDelay: "0ms" }}
                  />
                  <span
                    className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#FF6B35] rounded-full animate-bounce"
                    style={{ animationDelay: "150ms" }}
                  />
                  <span
                    className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#FF6B35] rounded-full animate-bounce"
                    style={{ animationDelay: "300ms" }}
                  />
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Questions */}
        {messages.length <= 2 && (
          <div className="px-3 sm:px-4 py-2 sm:py-3 bg-[#0A192F] border-t border-[#1E3A5F] flex-shrink-0">
            <p className="text-[10px] sm:text-xs text-gray-500 mb-2 font-medium">Quick questions:</p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {quickQuestions.map((question, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(question)}
                  className="text-[10px] sm:text-xs bg-[#112240] border border-[#1E3A5F] text-gray-300 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl hover:border-[#FF6B35] hover:text-[#FF6B35] hover:bg-[#FF6B35]/10 transition-all duration-200"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* WhatsApp redirect */}
        <a
          href="https://wa.me/13126802390"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white text-xs sm:text-sm font-semibold hover:from-[#1fb855] hover:to-[#0d7a6e] transition-all group flex-shrink-0"
        >
          <span>Need more help? Chat on WhatsApp</span>
          <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
        </a>

        {/* Input */}
        <div className="p-3 sm:p-4 bg-[#0A192F] border-t border-[#1E3A5F] flex-shrink-0">
          <div className="flex gap-2 sm:gap-3">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your question..."
              className="flex-1 px-3 sm:px-5 py-2.5 sm:py-3 bg-[#112240] border border-[#1E3A5F] rounded-xl text-xs sm:text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/50 focus:border-[#FF6B35] transition-all"
            />
            <button
              onClick={() => handleSend()}
              disabled={!inputValue.trim()}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#FF6B35] to-[#FF8C5A] rounded-xl flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-[#FF6B35]/30 hover:scale-105 transition-all flex-shrink-0"
            >
              <Send className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

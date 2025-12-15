"use client"

import { MessageCircle } from "lucide-react"

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/14795626268"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </a>
  )
}

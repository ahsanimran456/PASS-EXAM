"use client"

import { useState, useEffect } from "react"
import { X, CheckCircle, Gift } from "lucide-react"
import Link from "next/link"

export default function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("welcomePopupSeen")
    
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 2000)
      
      return () => clearTimeout(timer)
    }
  }, [])

  const closeModal = () => {
    setIsOpen(false)
    sessionStorage.setItem("welcomePopupSeen", "true")
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={closeModal}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-sm bg-[#0d1b2a] rounded-xl shadow-2xl border border-orange-500/30 overflow-hidden">
        {/* Top Gradient Bar */}
        <div className="h-1.5 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500" />
        
        {/* Close Button */}
        <button
          type="button"
          onClick={closeModal}
          className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/10 hover:bg-orange-500 flex items-center justify-center transition-colors z-50 cursor-pointer"
        >
          <X className="w-4 h-4 text-white" />
        </button>
        
        {/* Content */}
        <div className="p-5 pt-4">
          {/* Header with Icon */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg">
              <Gift className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-orange-400 text-xs font-semibold uppercase tracking-wide">Special Offer</p>
              <h2 className="text-white text-lg font-bold">Pay After Success!</h2>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-gray-400 text-sm mb-4">
            No upfront fees! Pay <span className="text-orange-400 font-semibold">only after your exam is completed</span> successfully.
          </p>
          
          {/* Features */}
          <div className="space-y-2 mb-5">
            {["99% Success Rate", "No Upfront Payment", "24/7 Expert Support"].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          
          {/* Buttons */}
          <div className="flex gap-3">
            <Link
              href="/contact-us"
              onClick={closeModal}
              className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-bold py-2.5 rounded-lg text-center hover:opacity-90 transition-opacity"
            >
              Get Started
            </Link>
            <button
              type="button"
              onClick={closeModal}
              className="flex-1 bg-white/5 text-gray-300 text-sm font-medium py-2.5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import type React from "react"
import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHero from "@/components/page-hero"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, User, MessageSquare, CheckCircle, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
import WhatsAppButton from "@/components/whatsapp-button"
import Chatbot from "@/components/chatbot"

const contactInfo = [
  {
    icon: Mail,
    title: "support@passmyexamnow.com",
    description: "Drop us a message anytime, we'll get back to you within 24 hours",
  },
  {
    icon: Phone,
    title: "+1 (312) 680-2390",
    description: "Available Mon-Sun, 24/7",
  },
  {
    icon: MapPin,
    title: "PassMyExamNow HQ",
    description: "2158 Madison Avenue Montgomery, AL 36107, United States",
  },
]

function EnhancedInput({
  icon: Icon,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { icon: React.ElementType }) {
  return (
    <div className="relative group">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors">
        <Icon className="w-5 h-5" />
      </div>
      <input
        {...props}
        className="w-full bg-background border-2 border-border text-foreground placeholder:text-muted-foreground rounded-xl pl-12 pr-4 py-4 outline-none transition-all duration-300 focus:border-primary focus:ring-4 focus:ring-primary/10 hover:border-primary/50"
      />
    </div>
  )
}

function EnhancedTextarea({
  icon: Icon,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { icon: React.ElementType }) {
  return (
    <div className="relative group">
      <div className="absolute left-4 top-4 text-muted-foreground group-focus-within:text-primary transition-colors">
        <Icon className="w-5 h-5" />
      </div>
      <textarea
        {...props}
        className="w-full bg-background border-2 border-border text-foreground placeholder:text-muted-foreground rounded-xl pl-12 pr-4 py-4 outline-none transition-all duration-300 focus:border-primary focus:ring-4 focus:ring-primary/10 hover:border-primary/50 min-h-[140px] resize-none"
      />
    </div>
  )
}

export default function ContactUsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSuccess(true)
    setTimeout(() => setIsSuccess(false), 3000)
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <PageHero
        title="CONTACT US"
        description="Have a question, idea, or just want to say hello? We're here and happy to chat. Drop us a message and let's connect!"
        primaryButton={{ label: "Visit Home For More", href: "/" }}
      />

      {/* Contact Info Cards */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <div
                  key={index}
                  className="bg-background rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{info.title}</h3>
                  <p className="text-muted-foreground text-sm">{info.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Image & Text */}
            <div>
              <div className="rounded-2xl overflow-hidden mb-8 h-80">
                <img
                  src="/diverse-team-professionals-smiling-happy.jpg"
                  alt="Our Team"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 uppercase">We're Here To Help, Always</h3>
              <p className="text-muted-foreground leading-relaxed">
                Behind every message is a friendly face from our team, ready to support you. Whether you have questions,
                ideas, or challenges. Our passionate experts are just one message away from helping you move forward
                with confidence.
              </p>
            </div>

            {/* Right Side - Form */}
            <div className="bg-background rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-foreground mb-6 uppercase">Send Us A Message</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <EnhancedInput icon={User} type="text" placeholder="Name" required />
                <EnhancedInput icon={Mail} type="email" placeholder="Email" required />
                <EnhancedInput icon={Phone} type="tel" placeholder="Phone" />
                <EnhancedTextarea icon={MessageSquare} placeholder="Message" required />

                <Button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className={cn(
                    "w-full rounded-xl py-6 text-lg font-semibold transition-all duration-300",
                    isSuccess
                      ? "bg-green-500 hover:bg-green-500"
                      : "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
                  )}
                >
                  {isSubmitting ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : isSuccess ? (
                    <>
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Message Sent!
                    </>
                  ) : (
                    "Send"
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <Chatbot />
    </main>
  )
}

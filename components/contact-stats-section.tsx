"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  CheckCircle,
  Users,
  BookOpen,
  Loader2,
  User,
  Mail,
  Phone,
  MessageSquare,
  ChevronDown,
  GraduationCap,
  Sparkles,
} from "lucide-react"
import { cn } from "@/lib/utils"

function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let start = 0
          const increment = end / (duration / 16)
          const timer = setInterval(() => {
            start += increment
            if (start >= end) {
              setCount(end)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, 16)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, duration, hasAnimated])

  return (
    <span
      ref={ref}
      className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent whitespace-nowrap block"
    >
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

function EnhancedInput({
  icon: Icon,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { icon: React.ElementType }) {
  return (
    <div className="relative group">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">
        <Icon className="w-5 h-5" />
      </div>
      <input
        {...props}
        className="w-full bg-slate-50 border-2 border-slate-200 text-slate-900 placeholder:text-slate-400 rounded-xl pl-12 pr-4 py-4 outline-none transition-all duration-300 focus:border-primary focus:ring-4 focus:ring-primary/10 hover:border-primary/50 focus:bg-white"
      />
    </div>
  )
}

const examOptions = [
  { value: "", label: "Select Exam/Subject", icon: "📋" },
  { value: "math", label: "Mathematics", icon: "📐" },
  { value: "science", label: "Science", icon: "🔬" },
  { value: "english", label: "English", icon: "📚" },
  { value: "business", label: "Business", icon: "💼" },
  { value: "it", label: "IT & Computer Science", icon: "💻" },
  { value: "nursing", label: "Nursing & Healthcare", icon: "🏥" },
  { value: "accounting", label: "Accounting & Finance", icon: "📊" },
  { value: "law", label: "Law & Legal Studies", icon: "⚖️" },
  { value: "engineering", label: "Engineering", icon: "⚙️" },
  { value: "other", label: "Other", icon: "📝" },
]

function CustomDropdown({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const selectedOption = examOptions.find((opt) => opt.value === value) || examOptions[0]

  return (
    <div ref={dropdownRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full bg-slate-50 border-2 text-left rounded-xl pl-12 pr-12 py-4 outline-none transition-all duration-300 flex items-center justify-between group",
          isOpen ? "border-primary ring-4 ring-primary/10 bg-white" : "border-slate-200 hover:border-primary/50",
          value ? "text-slate-900" : "text-slate-400",
        )}
      >
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus:text-primary transition-colors">
          <GraduationCap className="w-5 h-5" />
        </div>
        <span className="flex items-center gap-3">
          {value && <span className="text-lg">{selectedOption.icon}</span>}
          {selectedOption.label}
        </span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-slate-400 transition-transform duration-300 absolute right-4 top-1/2 -translate-y-1/2",
            isOpen && "rotate-180",
          )}
        />
      </button>

      {/* Dropdown Menu */}
      <div
        className={cn(
          "absolute z-50 w-full mt-2 bg-white border-2 border-slate-200 rounded-2xl shadow-2xl shadow-slate-200/50 overflow-hidden transition-all duration-300 origin-top",
          isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none",
        )}
      >
        <div className="p-2 max-h-72 overflow-y-auto custom-scrollbar">
          {examOptions.slice(1).map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                onChange(option.value)
                setIsOpen(false)
              }}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200",
                value === option.value ? "bg-primary/10 text-primary" : "hover:bg-slate-100 text-slate-700",
              )}
            >
              <span className="text-xl w-8 h-8 flex items-center justify-center bg-slate-100 rounded-lg">
                {option.icon}
              </span>
              <span className="font-medium">{option.label}</span>
              {value === option.value && <CheckCircle className="w-4 h-4 ml-auto text-primary" />}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

function EnhancedTextarea({
  icon: Icon,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { icon: React.ElementType }) {
  return (
    <div className="relative group">
      <div className="absolute left-4 top-4 text-slate-400 group-focus-within:text-primary transition-colors">
        <Icon className="w-5 h-5" />
      </div>
      <textarea
        {...props}
        className="w-full bg-slate-50 border-2 border-slate-200 text-slate-900 placeholder:text-slate-400 rounded-xl pl-12 pr-4 py-4 outline-none transition-all duration-300 focus:border-primary focus:ring-4 focus:ring-primary/10 hover:border-primary/50 min-h-[120px] resize-none focus:bg-white"
      />
    </div>
  )
}

export default function ContactStatsSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [selectedExam, setSelectedExam] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          examType: examOptions.find((opt) => opt.value === selectedExam)?.label || "",
        }),
      })

      const data = await response.json()

      if (data.success) {
        setIsSuccess(true)
        setFormData({ name: "", email: "", phone: "", message: "" })
        setSelectedExam("")
        setTimeout(() => setIsSuccess(false), 3000)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Decorative backgrounds */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-orange-500/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
            <Sparkles className="w-4 h-4" />
            Get Started Today
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-900 text-center mb-4">
          Achieve Your{" "}
          <span className="bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent">
            A-Grade Goal
          </span>{" "}
          Now
        </h2>
        <p className="text-slate-600 text-center max-w-2xl mx-auto mb-16 text-pretty text-lg">
          Connect with our expert tutors and take the first step towards academic excellence.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Get Started — Quick Consult</h3>
            <p className="text-slate-500 text-sm mb-6">Fill out the form and we'll get back to you within 24 hours.</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <EnhancedInput icon={User} type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} required />
              <EnhancedInput icon={Mail} type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} required />
              <EnhancedInput icon={Phone} type="tel" name="phone" placeholder="Phone Number (Optional)" value={formData.phone} onChange={handleInputChange} />
              <CustomDropdown value={selectedExam} onChange={setSelectedExam} />
              <EnhancedTextarea icon={MessageSquare} name="message" placeholder="Your Message" value={formData.message} onChange={handleInputChange} required />

              <Button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className={cn(
                  "w-full rounded-xl py-6 text-lg font-semibold transition-all duration-300 shadow-lg",
                  isSuccess
                    ? "bg-green-500 hover:bg-green-500 shadow-green-500/30"
                    : "bg-gradient-to-r from-primary to-orange-600 hover:from-primary/90 hover:to-orange-600/90 shadow-primary/30 hover:shadow-xl hover:shadow-primary/40",
                )}
              >
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : isSuccess ? (
                  <>
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Request Sent!
                  </>
                ) : (
                  "Request Help"
                )}
              </Button>

              <p className="text-xs text-slate-500 text-center flex items-center justify-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Your information is secure and will never be shared.
              </p>
            </form>
          </div>

          {/* Stats */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-[#0A192F] to-[#112240] rounded-3xl p-4 sm:p-6 md:p-8 border border-white/10 relative overflow-hidden">
              {/* Glow effects */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/30 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/30 rounded-full blur-3xl" />

              <p className="text-slate-300 leading-relaxed mb-6 sm:mb-8 text-pretty text-sm sm:text-base relative z-10">
                Our mission is to connect students with highly qualified, US-based tutors — including doctorate-level
                experts — who provide personalized support for online exams, classes, assignments, and certification
                tests. We have helped thousands of students achieve their academic goals.
              </p>

              <div className="grid grid-cols-3 gap-1.5 xs:gap-2 sm:gap-4 md:gap-6 relative z-10">
                <div className="text-center p-2 xs:p-3 sm:p-4 md:p-6 bg-white/5 backdrop-blur-sm rounded-lg xs:rounded-xl sm:rounded-2xl border border-white/10 hover:border-primary/30 transition-colors flex flex-col items-center justify-center min-h-[100px] sm:min-h-[140px]">
                  <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-primary/30 to-orange-500/30 rounded-lg xs:rounded-xl sm:rounded-2xl flex items-center justify-center mb-1.5 xs:mb-2 sm:mb-4">
                    <CheckCircle className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary" />
                  </div>
                  <AnimatedCounter end={99} suffix="%" />
                  <p className="text-slate-400 text-[10px] xs:text-xs sm:text-sm mt-1 sm:mt-2 font-medium leading-tight">
                    Success Rate
                  </p>
                </div>

                <div className="text-center p-2 xs:p-3 sm:p-4 md:p-6 bg-white/5 backdrop-blur-sm rounded-lg xs:rounded-xl sm:rounded-2xl border border-white/10 hover:border-primary/30 transition-colors flex flex-col items-center justify-center min-h-[100px] sm:min-h-[140px]">
                  <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-primary/30 to-orange-500/30 rounded-lg xs:rounded-xl sm:rounded-2xl flex items-center justify-center mb-1.5 xs:mb-2 sm:mb-4">
                    <Users className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary" />
                  </div>
                  <AnimatedCounter end={500} suffix="+" />
                  <p className="text-slate-400 text-[10px] xs:text-xs sm:text-sm mt-1 sm:mt-2 font-medium leading-tight">
                    Exam Experts
                  </p>
                </div>

                <div className="text-center p-2 xs:p-3 sm:p-4 md:p-6 bg-white/5 backdrop-blur-sm rounded-lg xs:rounded-xl sm:rounded-2xl border border-white/10 hover:border-primary/30 transition-colors flex flex-col items-center justify-center min-h-[100px] sm:min-h-[140px]">
                  <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-primary/30 to-orange-500/30 rounded-lg xs:rounded-xl sm:rounded-2xl flex items-center justify-center mb-1.5 xs:mb-2 sm:mb-4">
                    <BookOpen className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary" />
                  </div>
                  <AnimatedCounter end={15000} suffix="+" />
                  <p className="text-slate-400 text-[10px] xs:text-xs sm:text-sm mt-1 sm:mt-2 font-medium leading-tight">
                    Exams Done
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

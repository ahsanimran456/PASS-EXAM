"use client"

import { useEffect, useRef, useState } from "react"
import { Star, Quote, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Medical Student",
    image: "/professional-woman-portrait.png",
    quote: "Pass My Exam Now helped me ace my MCAT prep. Their tutors are incredibly knowledgeable and patient!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Business Graduate",
    image: "/professional-asian-man.png",
    quote: "The support I received for my MBA finals was exceptional. Highly recommend their services!",
    rating: 5,
  },
  {
    name: "Emily Davis",
    role: "Law Student",
    image: "/professional-blonde-woman.png",
    quote: "Confidential, reliable, and effective. They helped me pass my bar exam on the first try.",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "Engineering Student",
    image: "/professional-man-casual-portrait.png",
    quote: "Their 24/7 support was a lifesaver during finals week. Best decision I ever made!",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"))
            setVisibleCards((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.2 },
    )

    const cards = sectionRef.current?.querySelectorAll(".testimonial-card")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-orange-500/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
            <Sparkles className="w-4 h-4" />
            Student Success Stories
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 text-center mb-6">
          What Do They Say{" "}
          <span className="bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent">About Us?</span>
        </h2>
        <p className="text-slate-600 text-center max-w-2xl mx-auto mb-16 text-pretty text-lg leading-relaxed">
          Join thousands of satisfied students who have achieved their academic goals with our help.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              data-index={index}
              className={cn(
                "testimonial-card bg-white rounded-3xl p-7 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/15 hover:-translate-y-2 border border-slate-200 shadow-lg shadow-slate-200/50 relative group",
                visibleCards.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Quote icon with gradient background */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-primary to-orange-500 rounded-full flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform z-10">
                <Quote className="w-5 h-5 text-white fill-white" />
              </div>

              <p className="text-slate-700 leading-relaxed mb-6 italic font-serif text-lg">{testimonial.quote}</p>

              {/* Rating with gradient stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-primary/30"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-r from-primary to-orange-600 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-slate-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

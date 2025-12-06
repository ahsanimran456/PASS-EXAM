"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { ArrowRight, Shield, Clock, Award, Users, DollarSign, Zap, Sparkles } from "lucide-react"
import Link from "next/link"

const features = [
  {
    title: "Expert Tutors",
    description:
      "Access doctorate-level experts across all subjects who provide personalized guidance tailored to your learning style and academic needs.",
    image: "/expert-tutor-teaching.jpg",
    icon: Users,
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "24/7 Support",
    description: "Get help whenever you need it with our round-the-clock support team ready to assist you at any time.",
    image: "/customer-support-headset.jpg",
    icon: Clock,
    color: "from-green-500 to-green-600",
  },
  {
    title: "Guaranteed Results",
    description:
      "We stand behind our work with a money-back guarantee. You only pay when you're satisfied with the results.",
    image: "/success-celebration-graduate.jpg",
    icon: Award,
    color: "from-primary to-orange-600",
  },
  {
    title: "Secure & Confidential",
    description:
      "Your privacy is our priority. All interactions are encrypted and your information stays strictly confidential.",
    image: "/secure-lock-data-protection.jpg",
    icon: Shield,
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "Affordable Pricing",
    description:
      "Quality education support shouldn't break the bank. We offer competitive rates with flexible payment options for all budgets.",
    image: "/affordable-pricing-value.jpg",
    icon: DollarSign,
    color: "from-emerald-500 to-emerald-600",
  },
  {
    title: "Quick Turnaround",
    description: "Tight deadline? No problem. Our experts work efficiently to deliver results when you need them most.",
    image: "/fast-delivery-speed-clock.jpg",
    icon: Zap,
    color: "from-amber-500 to-amber-600",
  },
]

export default function FeatureCardsSection() {
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

    const cards = sectionRef.current?.querySelectorAll(".feature-card")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-[#0A192F] via-[#0d1f3c] to-[#0A192F] relative overflow-hidden"
    >
      {/* Glowing orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/20">
            <Sparkles className="w-4 h-4 text-primary" />
            Why Choose Us
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white text-center mb-4">
          Why Choose{" "}
          <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
            Pass My Exam Now?
          </span>
        </h2>
        <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16 text-pretty text-lg">
          We deliver excellence in every aspect of academic support with our premium services.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                data-index={index}
                className={cn(
                  "feature-card group relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden transition-all duration-500 hover:bg-white/10 hover:shadow-2xl hover:shadow-primary/20 cursor-pointer flex flex-col border border-white/10 hover:border-primary/30",
                  visibleCards.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon with gradient background */}
                <div
                  className={cn(
                    "absolute top-4 right-4 w-12 h-12 rounded-xl flex items-center justify-center z-10 transition-all duration-300 bg-gradient-to-br shadow-lg",
                    feature.color,
                    "group-hover:scale-110 group-hover:shadow-xl",
                  )}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <div className="relative p-6 flex flex-col flex-grow">
                  <div className="relative h-44 mb-5 rounded-xl overflow-hidden">
                    <img
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/50 to-transparent" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed flex-grow mb-5">{feature.description}</p>

                  <Link
                    href="/services"
                    className="inline-flex items-center text-primary font-semibold text-sm group-hover:gap-3 transition-all mt-auto"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

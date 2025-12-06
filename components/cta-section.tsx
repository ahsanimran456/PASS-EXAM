"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-28 relative overflow-hidden bg-gradient-to-br from-primary via-orange-500 to-orange-600">
      {/* Glowing orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-300/20 rounded-full blur-[100px]" />

      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating decorative elements */}
      <div className="absolute left-10 top-1/4 animate-float opacity-30 hidden lg:block">
        <div className="w-16 h-16 bg-white/30 rounded-full backdrop-blur-sm" />
      </div>
      <div className="absolute right-20 top-1/3 animate-float animation-delay-200 opacity-30 hidden lg:block">
        <div className="w-12 h-12 bg-white/30 rounded-full backdrop-blur-sm" />
      </div>
      <div className="absolute left-1/4 bottom-1/4 animate-float animation-delay-400 opacity-30 hidden lg:block">
        <div className="w-10 h-10 bg-white/30 rounded-full backdrop-blur-sm" />
      </div>
      <div className="absolute right-1/4 bottom-1/3 animate-float animation-delay-300 opacity-30 hidden lg:block">
        <div className="w-14 h-14 bg-white/30 rounded-full backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-white/30">
          <Sparkles className="w-4 h-4" />
          Start Your Journey
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-8 text-balance leading-tight drop-shadow-lg">
          Elevate Your Grades,
          <br />
          Secure Your Future.
        </h2>
        <p className="text-white/90 max-w-xl mx-auto mb-10 text-pretty leading-relaxed text-lg">
          Take the first step towards academic excellence. Our expert tutors are ready to help you achieve your goals
          and unlock your full potential.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-white text-primary hover:bg-white/90 rounded-full px-12 py-7 text-lg font-bold shadow-xl shadow-black/20 hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
        >
          <Link href="/contact-us" className="flex items-center gap-2">
            Start Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </section>
  )
}

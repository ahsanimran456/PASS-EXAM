"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY
        const bgElement = heroRef.current.querySelector(".parallax-bg") as HTMLElement
        if (bgElement) {
          bgElement.style.transform = `translateY(${scrollY * 0.3}px)`
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={heroRef} id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with parallax */}
      <div
        className="parallax-bg absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/student-studying-laptop-exam-education-professiona.jpg')`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-foreground mb-6 animate-fade-in-up text-balance leading-tight">
          HIRE OUR BEST PROFESSIONALS
          <br />
          <span className="text-primary">TO TAKE MY ONLINE EXAM FOR ME!</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-200 text-pretty leading-relaxed font-medium">
          Avail the best Proctored Online Exam Help Services with the aim of achieving your academic goals with top
          scores!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-300">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 py-7 text-lg font-bold shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 hover:scale-105 transition-all duration-300"
          >
            <Link href="/about">About Us</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-foreground/30 text-foreground hover:bg-foreground/10 hover:border-foreground/50 rounded-full px-10 py-7 text-lg font-bold transition-all duration-300 bg-transparent backdrop-blur-sm"
          >
            <Link href="/contact-us">Contact Us</Link>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <ChevronDown className="w-8 h-8 text-primary" />
      </div>
    </section>
  )
}

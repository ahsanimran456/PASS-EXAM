"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, Mail, Clock, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact-us", label: "Contact Us" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <div className="bg-gradient-to-r from-background via-card to-background border-b border-primary/20 text-foreground py-3 px-4 hidden md:block relative overflow-hidden">
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-[10%] w-2 h-2 bg-primary/30 rounded-full animate-ping" />
          <div className="absolute top-1/2 left-[30%] w-1.5 h-1.5 bg-primary/20 rounded-full animate-ping animation-delay-300" />
          <div className="absolute top-1/2 right-[20%] w-2 h-2 bg-primary/25 rounded-full animate-ping animation-delay-500" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 animate-pulse" />
        </div>

        <div className="container mx-auto flex justify-between items-center text-sm relative z-10">
          <div className="flex items-center gap-8">
            <a
              href="tel:+14795626268"
              className="flex items-center gap-2.5 hover:text-primary transition-all duration-300 group"
            >
              <div className="w-8 h-8 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Phone className="w-4 h-4 text-primary group-hover:animate-bounce" />
              </div>
              <span className="font-semibold tracking-wide">+1 (479) 562-6268</span>
            </a>
            <a
              href="mailto:info@topexamhelpers.com"
              className="flex items-center gap-2.5 hover:text-primary transition-all duration-300 group"
            >
              <div className="w-8 h-8 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3">
                <Mail className="w-4 h-4 text-primary" />
              </div>
              <span className="font-semibold tracking-wide">info@topexamhelpers.com</span>
            </a>
          </div>
          <div className="flex items-center gap-2.5 bg-gradient-to-r from-primary/15 to-primary/5 px-5 py-2 rounded-full border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
            <Clock className="w-4 h-4 text-primary animate-pulse" />
            <span className="font-semibold">24/7 Chat Support</span>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
          </div>
        </div>
      </div>

      <nav
        className={cn(
          "sticky top-0 z-50 transition-all duration-700 ease-out",
          isScrolled
            ? "bg-background/70 backdrop-blur-2xl shadow-2xl shadow-primary/5 py-3 border-b border-primary/10"
            : "bg-background/90 backdrop-blur-sm py-5",
        )}
      >
        {/* Animated gradient line under navbar */}
        <div
          className={cn(
            "absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-500",
            isScrolled ? "w-full opacity-100" : "w-0 opacity-0",
          )}
        />

        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
              <Image
                src="/logo.png"
                alt="Top Exam Helpers Logo"
                width={70}
                height={70}
                className="relative z-10 transition-all duration-500 group-hover:scale-110 drop-shadow-lg"
              />
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-2 bg-card/50 rounded-full p-1.5 border border-border/50">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 overflow-hidden group",
                    isActive
                      ? "text-primary-foreground bg-gradient-to-r from-primary to-primary/80 shadow-lg shadow-primary/30"
                      : "text-foreground hover:text-primary",
                  )}
                >
                  {/* Hover background animation */}
                  {!isActive && (
                    <span className="absolute inset-0 bg-primary/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                  )}
                  <span className="relative z-10">{link.label}</span>
                  {/* Active indicator dot */}
                  {isActive && (
                    <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-6 h-1 bg-primary-foreground/50 rounded-full" />
                  )}
                </Link>
              )
            })}
          </div>

          <div className="flex items-center gap-4">
            <Button
              asChild
              className="relative bg-gradient-to-r from-primary via-primary to-primary/80 hover:from-primary/90 hover:via-primary hover:to-primary text-primary-foreground rounded-full px-7 py-6 hidden sm:flex items-center gap-2.5 shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-500 hover:scale-105 overflow-hidden group"
            >
              <a href="https://wa.me/14795626268" target="_blank" rel="noopener noreferrer">
                {/* Shine animation */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <MessageCircle className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                <span className="relative z-10 font-bold">WhatsApp Us</span>
                {/* Pulse ring */}
                <span className="absolute inset-0 rounded-full border-2 border-primary-foreground/30 animate-ping opacity-20" />
              </a>
            </Button>

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-foreground p-3 rounded-2xl hover:bg-primary/10 transition-all duration-300 hover:scale-105 active:scale-95"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <Menu
                  className={cn(
                    "w-6 h-6 absolute inset-0 transition-all duration-300",
                    isMobileMenuOpen ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100",
                  )}
                />
                <X
                  className={cn(
                    "w-6 h-6 absolute inset-0 transition-all duration-300",
                    isMobileMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0",
                  )}
                />
              </div>
            </button>
          </div>
        </div>

        <div
          className={cn(
            "lg:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-2xl border-b border-primary/20 shadow-2xl transition-all duration-500 overflow-hidden",
            isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <div className="container mx-auto px-4 py-8 flex flex-col gap-3">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-5 py-4 rounded-2xl transition-all duration-300 transform font-bold",
                    isActive
                      ? "text-primary-foreground bg-gradient-to-r from-primary to-primary/80 shadow-lg"
                      : "text-foreground hover:text-primary hover:bg-primary/10",
                    isMobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0",
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ transitionDelay: isMobileMenuOpen ? `${index * 75}ms` : "0ms" }}
                >
                  {link.label}
                </Link>
              )
            })}
            <Button
              asChild
              className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-2xl w-full mt-4 py-7 font-bold text-base shadow-xl shadow-primary/30"
            >
              <a href="https://wa.me/14795626268" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </nav>
    </>
  )
}

import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, Youtube, ArrowRight, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact-us", label: "Contact Us" },
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/dark-abstract-geometric-pattern-with-subtle-orange.jpg"
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 pt-20 pb-8">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-card/80 to-card/60 backdrop-blur-xl rounded-3xl p-8 md:p-12 mb-16 border border-primary/20 shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Stay Updated</h3>
                <p className="text-muted-foreground">Subscribe for exam tips and special offers</p>
              </div>
              <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-3">
                <div className="relative flex-1 lg:w-80">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-6 py-4 bg-background/50 border border-border/50 rounded-2xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                  />
                </div>
                <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground rounded-2xl px-6 sm:px-8 py-4 h-auto shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 font-semibold">
                  <span>Subscribe</span>
                  <Send className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* About */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <Image src="/logo.png" alt="Top Exam Helpers Logo" width={80} height={80} className="drop-shadow-lg" />
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8 text-pretty">
                Avail the best Proctored Online Exam Help Services with the aim of achieving your academic goals with
                top scores!
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-11 h-11 bg-card/80 rounded-2xl flex items-center justify-center text-muted-foreground hover:text-primary-foreground hover:bg-gradient-to-br hover:from-primary hover:to-primary/80 transition-all duration-300 hover:scale-110 hover:-rotate-3 border border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-foreground font-bold text-lg mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
                Quick Links
              </h3>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-all duration-300 flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-foreground font-bold text-lg mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
                Our Services
              </h3>
              <ul className="space-y-4">
                {["Online Exam Help", "Proctored Exam Help", "GED Exam Help", "TEAS Exam Help", "ATI Exam Help"].map(
                  (service) => (
                    <li key={service}>
                      <Link
                        href="/services"
                        className="text-muted-foreground hover:text-primary transition-all duration-300 flex items-center gap-2 group"
                      >
                        <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary" />
                        <span className="group-hover:translate-x-1 transition-transform duration-300">{service}</span>
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-foreground font-bold text-lg mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
                Contact Us
              </h3>
              <ul className="space-y-5">
                <li>
                  <a
                    href="tel:+13126802390"
                    className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300 group-hover:scale-110 border border-primary/20">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium">+1 (312) 680-2390</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:support@passmyexamnow.com"
                    className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300 group-hover:scale-110 border border-primary/20">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium break-all">support@passmyexamnow.com</span>
                  </a>
                </li>
                <li className="flex items-start gap-4 text-muted-foreground">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center flex-shrink-0 border border-primary/20">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium">
                    2158 Madison Avenue
                    <br />
                    Montgomery, AL 36107, United States
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-border/30 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-muted-foreground text-sm">
                © {new Date().getFullYear()} Top Exam Helpers. All rights reserved.
              </p>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <Link href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="hover:text-primary transition-colors">
                  Terms of Service
                </Link>
                <Link href="#" className="hover:text-primary transition-colors">
                  Refund Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

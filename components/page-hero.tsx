"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

interface PageHeroProps {
  title: string
  description: string
  primaryButton?: {
    label: string
    href: string
  }
  secondaryButton?: {
    label: string
    href: string
  }
}

export default function PageHero({ title, description, primaryButton, secondaryButton }: PageHeroProps) {
  return (
    <section className="relative py-36 md:py-48 lg:py-56 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src="/modern-office-workspace-professional.jpg" alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-8 text-balance leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 text-pretty leading-relaxed">{description}</p>

          {(primaryButton || secondaryButton) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {primaryButton && (
                <Button
                  asChild
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 py-7 text-lg font-bold shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all"
                >
                  <Link href={primaryButton.href}>{primaryButton.label}</Link>
                </Button>
              )}
              {secondaryButton && (
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-foreground/20 text-foreground hover:bg-foreground hover:text-background rounded-full px-10 py-7 text-lg font-bold transition-all bg-transparent"
                >
                  <Link href={secondaryButton.href}>{secondaryButton.label}</Link>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

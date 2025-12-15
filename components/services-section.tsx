"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

const services = [
  {
    title: "Online Exam Help",
    slug: "online-exam-help",
    description:
      "Looking for reliable online exam help? Our expert tutors help students through exams with a proven 99% success rate — GED, TEAS, HESI, Praxis, CLEP and more.",
    image: "/classroom-teaching-students-learning.jpg",
  },
  {
    title: "Online Classes",
    slug: "online-classes",
    description:
      "Stay on track with your online classes and improve your grades with personalized tutoring — Study.com, Sophia Learning, Straighterline and more.",
    image: "/students-group-study-collaboration.jpg",
  },
  {
    title: "Assignment Help",
    slug: "assignment-help",
    description:
      "Get professional assignment help from qualified experts who ensure high-quality work delivered on time. Our team handles complex assignments.",
    image: "/student-writing-assignment-desk.jpg",
  },
  {
    title: "Certification Exams",
    slug: "certification-tests",
    description:
      "Prepare for certification exams with our specialized tutors who know exactly what it takes to succeed — PMP, CompTIA, Microsoft certification and more.",
    image: "/professional-certification-exam-computer.jpg",
  },
  {
    title: "Proctored Exams",
    slug: "proctored-exams",
    description:
      "Navigate proctored exams with confidence. Our experts provide comprehensive support for all exam types and formats — Lockdown Browser, Honorlock, ETS, Proctor U and more.",
    image: "/online-proctored-exam-setup.jpg",
  },
]

export default function ServicesSection() {
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

    const cards = sectionRef.current?.querySelectorAll(".service-card")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-24 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-blue-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4" />
              Our Premium Services
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
              PASS MY EXAM NOW
              <br />
              <span className="bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent">
                SERVICES
              </span>
            </h2>
            <Button
              asChild
              className="bg-gradient-to-r from-primary to-orange-600 hover:from-primary/90 hover:to-orange-600/90 text-white rounded-full px-8 py-6 font-bold shadow-lg shadow-primary/30 hover:shadow-xl transition-all"
            >
              <Link href="/contact-us">Contact Us Now</Link>
            </Button>
          </div>
          <p className="text-slate-600 max-w-xl text-pretty leading-relaxed text-lg">
            Pass My Exam Now is a trusted academic support platform, reckoned among the top-rated online exam help
            services in the USA. We are one of the largest and most reliable platforms for students seeking guidance to
            excel in their online exams and boost their academic performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-index={index}
              className={cn(
                "service-card bg-white rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 group flex flex-col border border-slate-200 shadow-lg shadow-slate-200/50",
                visibleCards.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image with overlay gradient */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                {/* Floating badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-orange-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                  99% Success
                </div>
              </div>

              <div className="p-7 flex flex-col flex-grow">
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-grow mb-6">{service.description}</p>
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-primary to-orange-600 text-white hover:from-primary/90 hover:to-orange-600/90 rounded-full transition-all duration-300 font-bold py-6 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 group/btn"
                >
                  <Link href={`/services/${service.slug}`} className="flex items-center justify-center gap-2">
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

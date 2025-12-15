import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHero from "@/components/page-hero"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import WhatsAppButton from "@/components/whatsapp-button"
import Chatbot from "@/components/chatbot"
import { ArrowRight, CheckCircle, Star } from "lucide-react"

const services = [
  {
    title: "Online Exam Help",
    slug: "online-exam-help",
    description:
      "Looking for reliable online exam help? Our expert tutors help students through exams with a proven 99% success rate — GED, TEAS, HESI, Praxis, CLEP and more. Unlike others, we never ask for upfront charges, you only pay after your exam is successfully completed.",
    image: "/classroom-teaching-students-learning.jpg",
    features: ["24/7 Support", "Expert Tutors", "Money-back Guarantee"],
  },
  {
    title: "Online Classes",
    slug: "online-classes",
    description:
      "Stay on track with your online classes and improve your grades with personalized tutoring — Study.com, Sophia Learning, Straighterline and more. We help students learn smarter, manage deadlines, and succeed online. With a 99% success rate, you only pay after your class is successfully completed.",
    image: "/students-group-study-collaboration.jpg",
    features: ["Live Sessions", "Course Support", "Deadline Management"],
  },
  {
    title: "Assignment Help",
    slug: "assignment-help",
    description:
      "Get professional assignment help from qualified experts who ensure high-quality work delivered on time. Our team handles complex assignments across all subjects with precision and care. We guarantee original work and provide revision support until you're satisfied.",
    image: "/student-writing-assignment-desk.jpg",
    features: ["Original Work", "On-time Delivery", "Free Revisions"],
  },
  {
    title: "Certification Exams",
    slug: "certification-tests",
    description:
      "Prepare for certification exams with our specialized tutors who know exactly what it takes to succeed — PMP, CompTIA, Microsoft certification and more. Our experts provide comprehensive preparation and support throughout your journey.",
    image: "/professional-certification-exam-computer.jpg",
    features: ["IT Certifications", "Professional Licenses", "Full Preparation"],
  },
  {
    title: "Proctored Exams",
    slug: "proctored-exams",
    description:
      "Navigate proctored exams with confidence. Our experts provide comprehensive support for all exam types and formats — Lockdown Browser, Honorlock, ETS, Proctor U and more. We offer specialized assistance to ensure you perform at your best.",
    image: "/online-proctored-exam-setup.jpg",
    features: ["All Formats", "Specialized Support", "Exam Strategies"],
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <PageHero
        title="OUR SERVICES"
        description="Avail the best Proctored Online Exam & Classes Help Services with the aim of achieving your academic goals with top scores!"
        primaryButton={{ label: "About Us", href: "/about" }}
        secondaryButton={{ label: "Contact Us", href: "/contact-us" }}
      />

      {/* Services Intro */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 uppercase">
                Pass My Exam Now Services
              </h2>
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 mb-6">
                <Link href="/contact-us">Contact Us Now</Link>
              </Button>
            </div>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Pass My Exam Now is a trusted academic support platform, reckoned among the top-rated online exam help
              services in the USA. We are one of the largest and most reliable platforms for students seeking guidance
              to excel in their online exams and boost their academic performance. Our mission is to connect students
              with highly qualified, US-based tutors — including doctorate-level experts — who provide personalized
              support for online exams, classes, assignments, and certification tests.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid - Improved cards with better buttons */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group flex flex-col border border-border/50"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  {/* Rating badge */}
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-bold text-foreground">4.9</span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-foreground mb-4 uppercase group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed flex-grow mb-6">{service.description}</p>

                  {/* Feature chips */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-xs font-medium px-3 py-1.5 rounded-full"
                      >
                        <CheckCircle className="w-3 h-3" />
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-primary via-primary to-primary/80 text-primary-foreground hover:from-primary/90 hover:via-primary/90 hover:to-primary rounded-full transition-all duration-300 font-bold py-6 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 group/btn mt-auto"
                  >
                    <Link href={`/services/${service.slug}`} className="flex items-center justify-center gap-2">
                      Learn More
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <Chatbot />
    </main>
  )
}

import type React from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHero from "@/components/page-hero"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import WhatsAppButton from "@/components/whatsapp-button"
import { CheckCircle, ArrowRight, Star, Users, Clock, Shield, Award, MessageCircle } from "lucide-react"
import { notFound } from "next/navigation"

const servicesData: Record<
  string,
  {
    title: string
    heroDescription: string
    fullDescription: string
    image: string
    features: string[]
    benefits: { icon: React.ElementType; title: string; description: string }[]
    faqs: { question: string; answer: string }[]
  }
> = {
  "online-exam-help": {
    title: "Online Exam Help",
    heroDescription:
      "Get expert assistance for your online exams with a proven 99% success rate. Pay only after successful completion!",
    fullDescription:
      "Looking for reliable online exam help? Our expert tutors help students through exams with a proven 99% success rate. We specialize in helping students pass online tests with confidence. Unlike others, we never ask for upfront charges — you only pay after your exam is successfully completed. Our team of experienced professionals understands the pressure of online examinations and provides comprehensive support to ensure your success.",
    image: "/classroom-teaching-students-learning.jpg",
    features: [
      "24/7 Expert Support Available",
      "99% Success Rate Guaranteed",
      "No Upfront Payment Required",
      "All Subjects & Exam Types Covered",
      "Confidential & Secure Service",
      "Money-back Guarantee",
    ],
    benefits: [
      {
        icon: Shield,
        title: "100% Secure",
        description: "Your privacy and academic integrity are our top priorities.",
      },
      { icon: Clock, title: "24/7 Availability", description: "Round-the-clock support for exams at any time." },
      { icon: Award, title: "Expert Tutors", description: "PhD-level experts across all subjects and disciplines." },
      { icon: Users, title: "15,000+ Students", description: "Trusted by thousands of students nationwide." },
    ],
    faqs: [
      {
        question: "How does the online exam help work?",
        answer:
          "Simply contact us with your exam details, and we'll match you with an expert in your subject. They'll guide you through the exam process and ensure your success.",
      },
      {
        question: "Is my information kept confidential?",
        answer:
          "Absolutely. We use secure, encrypted systems and never share your personal information with third parties.",
      },
      {
        question: "What if I don't pass my exam?",
        answer:
          "We offer a money-back guarantee. If you don't achieve the agreed-upon grade, you receive a full refund.",
      },
    ],
  },
  "online-classes": {
    title: "Online Classes",
    heroDescription:
      "Stay on track with personalized tutoring and live expert assistance. Achieve better grades with our dedicated support!",
    fullDescription:
      "Stay on track with your online classes and improve your grades with personalized tutoring. From live expert assistance to course support, we help students learn smarter, manage deadlines, and succeed online. With a 99% success rate, we ensure real results, and you only pay after your class is successfully completed. Our tutors work with you throughout the semester to ensure consistent academic improvement.",
    image: "/students-group-study-collaboration.jpg",
    features: [
      "Live One-on-One Sessions",
      "Complete Course Support",
      "Deadline Management",
      "Assignment Assistance",
      "Quiz & Test Preparation",
      "Progress Tracking",
    ],
    benefits: [
      {
        icon: MessageCircle,
        title: "Live Support",
        description: "Real-time assistance during your classes and assignments.",
      },
      { icon: Clock, title: "Flexible Scheduling", description: "Work with tutors on your own schedule." },
      { icon: Award, title: "Grade Improvement", description: "Average grade improvement of 2 letter grades." },
      { icon: Users, title: "Dedicated Tutors", description: "Same tutor throughout your course for consistency." },
    ],
    faqs: [
      {
        question: "Can you help with my entire online course?",
        answer: "Yes! We provide full course support including lectures, assignments, quizzes, and exams.",
      },
      {
        question: "How do live sessions work?",
        answer:
          "We use secure video conferencing and screen sharing to provide real-time assistance during your classes.",
      },
      {
        question: "What subjects do you cover?",
        answer: "We cover all subjects including Math, Science, Business, IT, Nursing, and more.",
      },
    ],
  },
  "assignment-help": {
    title: "Assignment Help",
    heroDescription:
      "Professional assignment assistance from qualified experts. High-quality, original work delivered on time!",
    fullDescription:
      "Get professional assignment help from qualified experts who ensure high-quality work delivered on time. Our team handles complex assignments across all subjects with precision and care. We guarantee original work and provide revision support until you're satisfied. From essays to research papers, case studies to lab reports, our experts deliver exceptional results that meet your academic standards.",
    image: "/student-writing-assignment-desk.jpg",
    features: [
      "100% Original Content",
      "On-Time Delivery Guaranteed",
      "Free Unlimited Revisions",
      "All Academic Levels",
      "Plagiarism-Free Reports",
      "Direct Expert Communication",
    ],
    benefits: [
      {
        icon: Shield,
        title: "Plagiarism Free",
        description: "Every assignment is checked for originality before delivery.",
      },
      { icon: Clock, title: "On-Time Delivery", description: "Never miss a deadline with our punctual service." },
      { icon: Award, title: "Quality Guaranteed", description: "Well-researched, professionally written content." },
      {
        icon: MessageCircle,
        title: "Free Revisions",
        description: "Unlimited revisions until you're completely satisfied.",
      },
    ],
    faqs: [
      {
        question: "What types of assignments do you help with?",
        answer:
          "We handle all types including essays, research papers, case studies, lab reports, presentations, and more.",
      },
      {
        question: "How do you ensure originality?",
        answer: "Every assignment goes through multiple plagiarism checks and is written from scratch by our experts.",
      },
      {
        question: "Can I communicate with the expert?",
        answer: "Yes, you have direct communication with your assigned expert throughout the process.",
      },
    ],
  },
  "certification-tests": {
    title: "Certification Tests",
    heroDescription:
      "Expert preparation for IT certifications, professional licenses, and academic tests. Succeed with our specialized support!",
    fullDescription:
      "Prepare for certification tests with our specialized tutors who know exactly what it takes to succeed. Whether it's IT certifications, professional licenses, or academic tests, our experts provide comprehensive preparation and support throughout your journey. We understand the specific requirements of various certification exams and tailor our approach to maximize your chances of success.",
    image: "/professional-certification-exam-computer.jpg",
    features: [
      "IT Certification Expertise",
      "Professional License Prep",
      "Practice Tests & Materials",
      "Study Plan Development",
      "Exam Strategy Coaching",
      "Post-Exam Support",
    ],
    benefits: [
      { icon: Award, title: "Certified Experts", description: "Tutors who hold the certifications they teach." },
      { icon: Clock, title: "Flexible Prep Time", description: "Study at your own pace with our guidance." },
      { icon: Shield, title: "Updated Materials", description: "Current exam content and practice questions." },
      { icon: Users, title: "High Pass Rates", description: "Our students achieve above-average pass rates." },
    ],
    faqs: [
      {
        question: "Which certifications do you support?",
        answer:
          "We support a wide range including AWS, Azure, CompTIA, Cisco, PMP, CPA, and many more professional certifications.",
      },
      {
        question: "Do you provide study materials?",
        answer:
          "Yes, we provide comprehensive study guides, practice tests, and exam tips specific to your certification.",
      },
      {
        question: "How long does preparation take?",
        answer:
          "Preparation time varies by certification, but we create a customized study plan based on your current knowledge and exam date.",
      },
    ],
  },
  "proctored-exams": {
    title: "Proctored Exams",
    heroDescription: "Navigate proctored exams with confidence. Comprehensive support for all exam types and formats!",
    fullDescription:
      "Navigate proctored exams with confidence. Our experts provide comprehensive support for all exam types and formats. We understand the unique challenges of proctored testing and offer specialized assistance to ensure you perform at your best. Whether it's camera-monitored, browser-locked, or live-proctored exams, we have strategies and support to help you succeed.",
    image: "/online-proctored-exam-setup.jpg",
    features: [
      "All Proctoring Platforms",
      "Technical Setup Assistance",
      "Exam Environment Preparation",
      "Stress Management Tips",
      "Time Management Strategies",
      "Post-Exam Review",
    ],
    benefits: [
      { icon: Shield, title: "Platform Expertise", description: "Experience with all major proctoring software." },
      { icon: Clock, title: "Pre-Exam Prep", description: "Complete technical and mental preparation." },
      { icon: Award, title: "Proven Strategies", description: "Techniques that work for proctored environments." },
      { icon: MessageCircle, title: "Real-Time Support", description: "Assistance available during your exam window." },
    ],
    faqs: [
      {
        question: "Which proctoring platforms do you support?",
        answer: "We support Proctorio, Respondus, ExamSoft, ProctorU, and all other major proctoring platforms.",
      },
      {
        question: "How do you help with proctored exams?",
        answer:
          "We provide comprehensive preparation including technical setup, study support, and strategies for managing the proctored environment.",
      },
      {
        question: "Is your service compliant with exam rules?",
        answer:
          "We focus on legitimate preparation and study support that helps you perform your best within exam guidelines.",
      },
    ],
  },
  "academic-consulting": {
    title: "Academic Consulting",
    heroDescription:
      "Personalized academic guidance from experienced consultants. Make informed decisions for your future!",
    fullDescription:
      "Receive personalized academic guidance from experienced consultants who understand your goals. From course selection to career planning, we help you make informed decisions that align with your aspirations and set you up for long-term success. Our consultants have years of experience in higher education and can help you navigate complex academic decisions.",
    image: "/academic-advisor-consultation-meeting.jpg",
    features: [
      "Career Path Planning",
      "Course Selection Guidance",
      "Graduate School Prep",
      "Academic Strategy Development",
      "Time Management Coaching",
      "Goal Setting & Achievement",
    ],
    benefits: [
      {
        icon: Award,
        title: "Expert Advisors",
        description: "Consultants with advanced degrees and industry experience.",
      },
      { icon: Users, title: "Personalized Plans", description: "Customized guidance based on your unique goals." },
      { icon: Clock, title: "Long-Term Support", description: "Ongoing guidance throughout your academic journey." },
      {
        icon: MessageCircle,
        title: "Regular Check-ins",
        description: "Scheduled sessions to track progress and adjust plans.",
      },
    ],
    faqs: [
      {
        question: "What does academic consulting include?",
        answer:
          "Our consulting covers course selection, major/minor decisions, graduate school preparation, career planning, and overall academic strategy.",
      },
      {
        question: "How often do I meet with my consultant?",
        answer: "Meeting frequency is customized to your needs, typically ranging from weekly to monthly sessions.",
      },
      {
        question: "Can you help with graduate school applications?",
        answer:
          "Yes, we provide comprehensive support including school selection, application strategy, essay review, and interview preparation.",
      },
    ],
  },
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = servicesData[slug]

  if (!service) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <PageHero
        title={service.title.toUpperCase()}
        description={service.heroDescription}
        primaryButton={{ label: "Get Started", href: "/contact-us" }}
        secondaryButton={{ label: "View All Services", href: "/services" }}
      />

      {/* Main Content */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
              {/* Floating stats card */}
              <div className="absolute -bottom-6 -right-6 bg-background rounded-2xl p-6 shadow-xl border border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Star className="w-6 h-6 text-primary fill-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">99%</p>
                    <p className="text-sm text-muted-foreground">Success Rate</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">{service.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-8 text-lg">{service.fullDescription}</p>

              {/* Features list */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                asChild
                className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-full px-8 py-6 font-bold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-all group"
              >
                <Link href="/contact-us" className="flex items-center gap-2">
                  Get Started Now
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">Why Choose Us</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Experience the difference with our dedicated team of experts committed to your success.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Find answers to common questions about our {service.title.toLowerCase()} services.
          </p>

          <div className="max-w-3xl mx-auto space-y-6">
            {service.faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-background rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-colors"
              >
                <h3 className="text-lg font-bold text-foreground mb-3">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-black/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Ready to Get Started?</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
            Contact us today and take the first step towards academic success. Our team is ready to help you achieve
            your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-background text-foreground hover:bg-background/90 rounded-full px-8 py-6 font-bold shadow-lg transition-all"
            >
              <Link href="/contact-us">Contact Us Now</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground/10 rounded-full px-8 py-6 font-bold transition-all"
            >
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}

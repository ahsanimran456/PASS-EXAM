import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHero from "@/components/page-hero"
import WhatsAppButton from "@/components/whatsapp-button"
import Chatbot from "@/components/chatbot"
import { CheckCircle, Users, Target, Award } from "lucide-react"

const stats = [
  { label: "Success Rate", value: "99%", icon: CheckCircle },
  { label: "Expert Tutors", value: "500+", icon: Users },
  { label: "Exams Completed", value: "15,000+", icon: Target },
  { label: "Years Experience", value: "10+", icon: Award },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <PageHero
        title="ABOUT US"
        description="At Pass My Exam Now, We provide expert online, exam help, and academic support to help students succeed. With a proven 99% success rate, we specialize in online classes, proctored exams, assignments, and certification tests. Our legitimacy is built on trust — no upfront fees, you only pay after your exam or task is successfully completed."
        primaryButton={{ label: "All Services", href: "/services" }}
        secondaryButton={{ label: "Contact Us", href: "/contact-us" }}
      />

      {/* Boosting Up Grades Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center uppercase">
            Boosting Up Student's Grades With US Best Online Exam Help!
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative rounded-2xl overflow-hidden h-80">
              <img
                src="/student-with-lightbulb-idea-creative-thinking.jpg"
                alt="Boosting Up Grades"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4 uppercase">Our Agenda</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ever since the trend of extra exams have started in the US, it has become more challenging for students
                to pursue their dream careers because of high scores restrictions and merit issues. Earlier it was only
                high percentages that got student admission in higher educational programs but now the various caliber
                test and exams have made the criteria more challenging.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4 uppercase">Boosting Up Grades</h3>
              <p className="text-muted-foreground leading-relaxed">
                Exams are the crucial part of academic careers. From evaluating student's critical, analytical and
                creative thinking skills to polishing up their general knowledge, exams play a vital role in refining
                and enhancing student transcripts. Take Online Exam Help believes in assisting students to take a step
                further and achieve better scores and grades in exams.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-80">
              <img
                src="/students-group-studying-together-collaboration.jpg"
                alt="Students Studying"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden h-80">
              <img
                src="/online-learning-laptop-education-digital.jpg"
                alt="We Offer More"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4 uppercase">We Offer More</h3>
              <p className="text-muted-foreground leading-relaxed">
                Take Online Exam Help is not limited to online exam help only. Our vision makes us stronger, better and
                optimistic towards our future goals. We make sure to not struck at a single position only rather we work
                harder to get to our goals and achieve them like we do achieve high grades for your exams. So what is it
                that we offer more than just exam assistance? We offer comprehensive academic support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center p-6 bg-background rounded-2xl">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <p className="text-muted-foreground text-sm font-medium">{stat.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <Chatbot />
    </main>
  )
}

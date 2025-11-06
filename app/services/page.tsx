"use client"

import { useState } from "react"

interface Service {
  id: number
  icon: string
  title: string
  description: string
  benefits: string[]
}

const services: Service[] = [
  {
    id: 1,
    icon: "🧘",
    title: "Hatha Yoga",
    description:
      "A foundational yoga practice that focuses on balance, flexibility, and strength through carefully sequenced asanas.",
    benefits: [
      "Improved flexibility and posture",
      "Enhanced core strength",
      "Better body awareness",
      "Reduced stress and tension",
    ],
  },
  {
    id: 2,
    icon: "💪",
    title: "Power Yoga",
    description:
      "A dynamic and challenging practice that builds strength, endurance, and confidence through vigorous movement.",
    benefits: [
      "Increased muscle strength",
      "Enhanced cardiovascular health",
      "Boosted metabolism",
      "Greater endurance",
    ],
  },
  {
    id: 3,
    icon: "🏃",
    title: "Aerobics",
    description: "High-energy fitness classes combining cardio exercises with dance movements for overall fitness.",
    benefits: [
      "Improved cardiovascular health",
      "Increased energy levels",
      "Weight management",
      "Fun group experience",
    ],
  },
  {
    id: 4,
    icon: "🧠",
    title: "Meditation",
    description: "Guided meditation practices to calm the mind, reduce anxiety, and cultivate inner peace and clarity.",
    benefits: ["Reduced anxiety and stress", "Improved focus", "Better sleep quality", "Emotional balance"],
  },
  {
    id: 5,
    icon: "✨",
    title: "Reiki & Energy Healing",
    description:
      "Ancient energy healing technique to balance your chakras, remove blockages, and promote holistic wellness.",
    benefits: ["Deep relaxation", "Pain relief", "Energy restoration", "Spiritual alignment"],
  },
  {
    id: 6,
    icon: "🎯",
    title: "Hypnotherapy",
    description:
      "Therapeutic sessions using hypnosis to overcome limiting beliefs, habits, and achieve your wellness goals.",
    benefits: ["Break limiting beliefs", "Overcome anxiety", "Improve confidence", "Personal transformation"],
  },
]

export default function Services() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-b from-muted-green/40 to-muted-green/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-josefin text-5xl font-bold text-deep-green mb-4">Our Services</h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Choose from our comprehensive range of yoga and wellness offerings designed for your transformation
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                onClick={() => setExpandedId(expandedId === service.id ? null : service.id)}
                className="cursor-pointer group"
              >
                <div
                  className={`p-8 rounded-xl transition-all duration-300 h-full flex flex-col ${
                    expandedId === service.id
                      ? "bg-gradient-to-br from-golden-light to-muted-green shadow-xl scale-105"
                      : "bg-gradient-to-br from-muted-green/40 to-muted-green/30 hover:shadow-lg"
                  } border ${expandedId === service.id ? "border-golden" : "border-muted-green/30"}`}
                >
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition">{service.icon}</div>

                  <h3 className="font-josefin text-2xl font-bold text-deep-green mb-2">{service.title}</h3>

                  <p className="text-foreground/80 mb-4 leading-relaxed">{service.description}</p>



                  {expandedId === service.id && (
                    <div className="mt-4 pt-4 border-t border-deep-purple/20 animate-in fade-in">
                      <h4 className="font-josefin font-bold text-deep-green mb-3">Key Benefits:</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex gap-2 text-foreground/80">
                            <span className="text-golden">•</span> {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weight Management Section */}
      <section className="py-20 bg-gradient-to-b from-soft-white to-muted-green/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 bg-gradient-to-br from-muted-green to-muted-green rounded-xl flex items-center justify-center">
              <div className="text-6xl animate-float">⚖️</div>
            </div>

            <div>
              <h2 className="font-josefin text-4xl font-bold text-deep-green mb-6">
                Weight Loss / Weight Gain Counseling
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Achieve your ideal body weight through personalized guidance combining yoga, nutrition, and lifestyle
                modifications.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-8">
                Our holistic approach addresses the root causes of weight imbalances, whether you seek to lose excess
                weight or gain healthy body mass, with sustainable methods that transform your relationship with food
                and fitness.
              </p>

              <div className="space-y-3">
                {[
                  "Personalized nutrition guidance",
                  "Customized yoga routines",
                  "Lifestyle coaching and support",
                  "Progress tracking and adjustments",
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <span className="text-golden font-bold">✓</span>
                    <span className="text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r bg-dark-green text-white rounded-xl p-12 text-soft-white">
            <h2 className="font-josefin text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-lg mb-8 text-soft-white/90">
              Join Mishthy Yog Sadhna and experience the transformative power of yoga and holistic wellness.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 rounded-lg bg-green-300 text-green-900  font-semibold hover:shadow-lg hover:scale-105 transition"
            >
              Book Your First Session
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

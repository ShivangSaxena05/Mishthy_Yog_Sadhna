"use client"

import { useEffect, useState } from "react"
import { Leaf, Star, User } from "lucide-react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 pt-30 bg-gradient-to-b from-muted-green/40 to-muted-green/20">
        <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-josefin text-5xl font-bold text-deep-green mb-4">About Our Center</h1>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Discover the journey and philosophy behind Mishthy Yog Sadhna
            </p>
          </div>
        </div>
      </section>

      {/* Instructor Profile */}
      <section className="pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Instructor Image */}
            <div
              className={`relative h-96 bg-gradient-to-br from-muted-green to-muted-green rounded-xl shadow-lg overflow-hidden transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <img
                src="/SapnaKulshreshtha.jpg"
                alt="Mrs. Sapna Kulshreshtha"
                className="w-full h-[800] object-cover"
              />
            </div>

            {/* Content */}
            <div
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <h2 className="font-josefin text-4xl font-bold text-deep-green mb-4">Mrs. Sapna Kulshreshtha</h2>
              <p className="text-lg font-semibold text-golden mb-6">Founder & Lead Instructor</p>

              <div className="space-y-4 mb-8">
                <div>
                  <h3 className="font-josefin text-xl font-bold text-deep-purple mb-2">Certifications & Expertise</h3>
                  <ul className="space-y-2 text-foreground/80">
                    <li className="flex gap-3">
                      <span className="text-deep-green">✓</span> Yoga Teacher
                    </li>
                    <li className="flex gap-3">
                      <span className="text-deep-green">✓</span> Reiki Grand Master
                    </li>
                    <li className="flex gap-3">
                      <span className="text-deep-green">✓</span> Energy Healing Expert
                    </li>
                    <li className="flex gap-3">
                      <span className="text-deep-green">✓</span> Certified Hypnotherapist
                    </li>
                    <li className="flex gap-3">
                      <span className="text-deep-green">✓</span> Wellness Counselor
                    </li>
                    <li className="flex gap-3">
                      <span className="text-deep-green">✓</span> Sound Healing Expert
                    </li>
                    <li className="flex gap-3">
                      <span className="text-deep-green">✓</span> Two Times Josh Talks Speaker
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-foreground/80 leading-relaxed mb-6">
                With over a decade of experience in holistic wellness, Mrs. Sapna is dedicated to helping individuals
                transform their lives through authentic yoga practice, energy healing, and spiritual guidance. Her
                compassionate approach combines ancient yogic wisdom with modern understanding of human wellness.
              </p>

              <p className="text-foreground/80 leading-relaxed">
                At Mishthy Yog Sadhna, we believe that true wellness comes from balancing the mind, body, and spirit.
                Mrs. Sapna's mission is to create a sacred space where every individual can discover their inner
                potential and awaken to their highest self.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-muted-green/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-josefin text-4xl font-bold text-center text-deep-green mb-16">Our Philosophy</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: "Holistic Wellness",
                desc: "We address physical, mental, emotional, and spiritual well-being as interconnected aspects of health.",
              },
              {
                icon: Star,
                title: "Ancient Wisdom",
                desc: "Drawing from thousands of years of yogic tradition, we offer time-tested practices for transformation.",
              },
              {
                icon: User,
                title: "Personal Growth",
                desc: "Every individual is unique. We tailor our approach to support your personal journey and goals.",
              },
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-lg border bg-white shadow-inner hover:shadow-lg transition">
                <div className="w-16 h-16 mb-4 mx-auto text-deep-green">
                  <item.icon />
                </div>
                <h3 className="font-josefin text-xl font-bold text-deep-green mb-3">{item.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-josefin text-4xl font-bold text-center text-deep-green mb-16">Why Choose Mishthy Yog</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Certified and experienced instructors with genuine expertise",
              "Personalized attention and customized wellness programs",
              "Safe, welcoming environment for all experience levels",
              "Integration of traditional and modern wellness approaches",
              "Focus on sustainable transformation and long-term wellness",
              "Community support and continuous guidance",
            ].map((reason, idx) => (
              <div key={idx} className="flex gap-4 p-6 rounded-lg bg-gradient-to-r from-muted-green/20 to-muted-green/20">
                <div className="text-2xl text-deep-green flex-shrink-0">✨</div>
                <p className="text-foreground/80 leading-relaxed">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* Team Carousel */}
<section className="py-20 bg-gradient-to-b from-muted-green/10 to-soft-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="font-josefin text-4xl font-bold text-center text-deep-green mb-16">Our Team</h2>

    <div className="relative">
      {/* Team Members Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">

        {/* Mrs. Sapna Kulshreshtha */}
        <div className="group relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300">
          <div className="h-64 bg-gradient-to-br from-muted-green to-muted-green overflow-hidden">
            <img
              src="/SapnaKulshreshtha.jpg"
              alt="Mrs. Sapna Kulshreshtha"
              className="w-full h-[370px] object-top object-cover group-hover:scale-105 transition-transform duration-500" // Reverted objectPosition, adjusted h-[370px]
              style={{ objectPosition: "center" }} // Reverted objectPosition
            />
          </div>
          <div className="p-4 sm:p-6 text-center">
            <h3 className="font-josefin text-xl font-bold text-deep-green mb-1">Mrs. Sapna Kulshreshtha</h3>
            {/* Designation with white text, deep green background, slightly larger font */}
            <span className="bg-deep-green text-white px-3 py-1 rounded-full text-md font-semibold inline-block mb-3">Founder & Lead Instructor</span>
            <p className="text-foreground/70 text-sm leading-relaxed mt-2">Yoga Teacher, Reiki Grand Master, Sound Healer, Energy Healing Expert, and Hypnotherapist</p>
          </div>
          {/* Removed the conflicting absolute badge as the inline span now serves the purpose */}
        </div>

        {/* Manju Singh */}
        <div className="group relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300">
          <div className="h-64 bg-gradient-to-br from-muted-green to-muted-green overflow-hidden">
            <img
              src="/team/ManjuSingh.jpg"
              alt="Manju Singh"
              className="w-full h-[375px] object-cover group-hover:scale-105 transition-transform duration-500" // Reverted h-[375px]
              style={{ objectPosition: "center" }} // Reverted objectPosition
            />
          </div>
          <div className="p-4 sm:p-6 text-center">
            <h3 className="font-josefin text-xl font-bold text-deep-green mb-1">Manju Singh</h3>
            {/* Designation with white text, deep green background, slightly larger font */}
            <span className="bg-deep-green text-white px-3 py-1 rounded-full text-md font-semibold inline-block mb-3">Yoga Instructor</span>
            <p className="text-foreground/70 text-sm leading-relaxed invisible h-0">Placeholder for consistent card height</p> {/* Removed description */}
          </div>
        </div>

        {/* Nisha Aswani */}
        <div className="group relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300">
          <div className="h-64 bg-gradient-to-br from-muted-green to-muted-green overflow-hidden">
            <img
              src="/team/NishaAswani.jpg"
              alt="Nisha Aswani"
              className="w-full h-[550px] object-top group-hover:scale-105 transition-transform duration-500" // Reverted h-[550px]
              style={{ objectPosition: "center" }} // Reverted objectPosition
            />
          </div>
          <div className="p-4 sm:p-6 text-center">
            <h3 className="font-josefin text-xl font-bold text-deep-green mb-1">Nisha Aswani</h3>
            {/* Designation with white text, deep green background, slightly larger font */}
            <span className="bg-deep-green text-white px-3 py-1 rounded-full text-md font-semibold inline-block mb-3">Counsellor & Reiki Master</span>
            <p className="text-foreground/70 text-sm leading-relaxed invisible h-0">Placeholder for consistent card height</p> {/* Removed description */}
          </div>
        </div>

        {/* Archana Batra */}
        <div className="group relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300">
          <div className="h-64 bg-gradient-to-br from-muted-green to-muted-green overflow-hidden">
            <img
              src="/team/ArchanaBatra.jpg"
              alt="Archana Batra"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              style={{ objectPosition: "center" }} // Reverted objectPosition
            />
          </div>
          <div className="p-4 sm:p-6 text-center">
            <h3 className="font-josefin text-xl font-bold text-deep-green mb-1">Archana Batra</h3>
            {/* Designation with white text, deep green background, slightly larger font */}
            <span className="bg-deep-green text-white px-3 py-1 rounded-full text-md font-semibold inline-block mb-3">Numerologist</span>
            <p className="text-foreground/70 text-sm leading-relaxed invisible h-0">Placeholder for consistent card height</p> {/* Removed description */}
          </div>
        </div>

        {/* Honey Prajapati */}
        <div className="group relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 md:col-start-2 xl:col-start-auto">
          <div className="h-64 bg-gradient-to-br from-muted-green to-muted-green overflow-hidden">
            <img
              src="/team/Honey.jpg"
              alt="Honey Prajapati"
              className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500" // Reverted h-[400px]
              style={{ objectPosition: "center" }} // Reverted objectPosition
            />
          </div>
          <div className="p-4 sm:p-6 text-center">
            <h3 className="font-josefin text-xl font-bold text-deep-green mb-1">Honey Prajapati</h3>
            {/* Designation with white text, deep green background, slightly larger font */}
            <span className="bg-deep-green text-white px-3 py-1 rounded-full text-md font-semibold inline-block mb-3">Advanced Yoga Instructor</span>
            <p className="text-foreground/70 text-sm leading-relaxed invisible h-0">Placeholder for consistent card height</p> {/* Removed description */}
          </div>
        </div>

        {/* Pooja Tyagi */}
        <div className="group relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300">
          <div className="h-64 bg-gradient-to-br from-muted-green to-muted-green overflow-hidden">
            <img
              src="/team/pooja.jpg"
              alt="Pooja Tyagi"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              style={{ objectPosition: "center" }} // Reverted objectPosition
            />
          </div>
          <div className="p-4 sm:p-6 text-center">
            <h3 className="font-josefin text-xl font-bold text-deep-green mb-1">Pooja Tyagi</h3>
            {/* Designation with white text, deep green background, slightly larger font */}
            <span className="bg-deep-green text-white px-3 py-1 rounded-full text-md font-semibold inline-block mb-3">Advanced Yoga Instructor</span>
            <p className="text-foreground/70 text-sm leading-relaxed invisible h-0">Placeholder for consistent card height</p> {/* Removed description */}
          </div>
        </div>
        </div>


            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {[0, 1].map((dot) => (
                <button
                  key={dot}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    dot === 0 ? 'bg-deep-green' : 'bg-muted-green'
                  }`}
                  onClick={() => {
                    // Carousel navigation logic would go here
                    console.log(`Navigate to slide ${dot + 1}`)
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import emailjs from '@emailjs/browser'
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      // Send email using EmailJS
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone || 'Not provided',
          subject: formData.subject,
          message: formData.message, // Replace with your email
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      // Show success message
      setSubmitted(true)
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
      setTimeout(() => setSubmitted(false), 3000)
    } catch (error) {
      console.error('Error sending email:', error)
      // You could add error state here
    }
  }

  return (
    <div className="min-h-screen ">
      {/* Header */}
      <section className="py-20 bg-gradient-to-b from-muted-green/40 to-muted-green/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-josefin text-5xl font-bold text-deep-green mb-4">Get In Touch</h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Contact us anytime.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-josefin text-3xl font-bold text-deep-green mb-8">Contact Information</h2>

              <div className="space-y-8">
                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-golden to-golden-light">
                      <Phone className="h-6 w-6 text-deep-purple" />
                    </div>
                  </div>
                  <div>
                <h3 className="font-josefin font-bold text-deep-green mb-1">Phone</h3>
                    <a href="tel:+918193935267" className="text-foreground/80 hover:text-deep-purple transition">
                      +91 8193935267
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-golden to-golden-light">
                      <Mail className="h-6 w-6 text-deep-purple" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-josefin font-bold text-deep-green mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/918193935267"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-deep-purple transition"
                    >
                      Message us on WhatsApp
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-golden to-golden-light">
                      <MapPin className="h-6 w-6 text-deep-purple" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-josefin font-bold text-deep-green mb-1">Address</h3>
                    <address className="text-foreground/80 not-italic leading-relaxed">
                      23 A, Maruti Estate Rd
                      <br />
                      near Simpkins School
                      <br />
                      Maruti Estate, Kala Kunj
                      <br />
                      Agra, Uttar Pradesh 282010
                      <br />
                      India
                    </address>
                  </div>
                </div>

                {/* Map Link */}
                <div>
                  <a
                    href="https://www.google.com/maps/place/Mishthy+Yog+Sadhna+II/@27.1821581,77.9640482,17z/data=!4m6!3m5!1s0x397477dea686b719:0x48d4da21d690655d!8m2!3d27.1826258!4d77.9662905!16s%2Fg%2F11wc1wzgvy?entry=ttu&g_ep=EgoyMDI1MTEwMi4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-6 py-2 rounded-lg bg-deep-green text-white font-semibold hover:shadow-lg transition"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-muted-green/30 to-muted-green/20 p-8 rounded-xl border border-muted-green/30">
              <h2 className="font-josefin text-3xl font-bold text-deep-green mb-8">Send us a Message</h2>

              {submitted && (
                <div className="mb-6 p-4 rounded-lg bg-green-100 text-green-800 border border-green-300">
                  <p className="font-semibold">Thank you! Your message has been sent successfully.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block font-semibold text-deep-green mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-muted-green/50 bg-white focus:outline-none focus:ring-2 focus:ring-golden"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block font-semibold text-deep-green mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-muted-green/50 bg-white focus:outline-none focus:ring-2 focus:ring-golden"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block font-semibold text-deep-green mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-muted-green/50 bg-white focus:outline-none focus:ring-2 focus:ring-golden"
                    placeholder="+91"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block font-semibold text-deep-green mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-muted-green/50 bg-white focus:outline-none focus:ring-2 focus:ring-golden"
                  >
                    <option value="">Select a subject</option>
                    <option value="class-inquiry">Class Inquiry</option>
                    <option value="personal-session">Personal Session</option>
                    <option value="workshop">Workshop</option>
                    <option value="corporate-training">Corporate Training</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block font-semibold text-deep-green mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-muted-green/50 bg-white focus:outline-none focus:ring-2 focus:ring-golden resize-none"
                    placeholder="Tell us about your wellness goals..."
                  />
                </div>

                {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-golden to-golden-light text-deep-green font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:scale-105 transition"
                  >
                    <Send size={18} />
                    Send Message
                  </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-b from-soft-white to-muted-green/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-josefin text-4xl font-bold text-center text-deep-green mb-12">Our Location</h2>
          <div className="rounded-xl overflow-hidden shadow-lg h-96">
            <iframe
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD1VnYC6EugmolDY9RjsZ77TeXstyj0288&q=Mishthy+Yog+Sadhna+II&center=27.1821581,77.9640482&zoom=17"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

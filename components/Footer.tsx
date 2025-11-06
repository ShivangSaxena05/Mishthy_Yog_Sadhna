"use client"

import Link from "next/link"
import { Phone, MapPin, Mail, Instagram, Youtube, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-dark-gray text-soft-gray py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-josefin text-xl font-bold mb-4">Mishthy Yog Sadhna</h3>
            <p className="text-soft-gray/80 leading-relaxed">
              Awaken your inner energy through yoga, meditation, and holistic wellness practices led by certified
              experts.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-josefin text-xl font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {[
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/gallery", label: "Gallery" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-soft-gray/80 hover:text-white transition"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-josefin text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a
                href="tel:+918193935267"
                className="flex items-center gap-2 text-soft-gray/80 hover:text-white transition"
              >
                <Phone size={18} />
                +91 8193935267
              </a>
              <a
                href="https://wa.me/918193935267"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-soft-gray/80 hover:text-white transition"
              >
                <Mail size={18} />
                WhatsApp
              </a>
              <a
                href="https://www.google.com/maps/place/Mishthy+Yog+Sadhna+II/@27.1826258,77.9637156,17z/data=!3m1!4b1!4m6!3m5!1s0x397477dea686b719:0x48d4da21d690655d!8m2!3d27.1826258!4d77.9662905!16s%2Fg%2F11wc1wzgvy?entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 text-soft-gray/80 hover:text-white transition not-italic"
              >
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <span>23 A,Mishthy Yog Sadhna, Maruti Estate Rd, Near Simpkins School, Agra, UP 282010</span>
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-josefin text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/mishthy_yog_sadhna_?igsh=eWw0MzMwMG81ODdw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-soft-gray/80 hover:text-white transition"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://youtube.com/@mishthyyogsadhna4347?si=Ln81Q1aZ0OoOghPF"
                target="_blank"
                rel="noopener noreferrer"
                className="text-soft-gray/80 hover:text-white transition"
                aria-label="YouTube"
              >
                <Youtube size={24} />
              </a>
              <a
                href="https://www.facebook.com/mishthy.yogsadhna"
                target="_blank"
                rel="noopener noreferrer"
                className="text-soft-gray/80 hover:text-white transition"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-soft-gray/20 pt-8">
          <p className="text-center text-soft-gray/60">
            © 2025 Mishthy Yog Sadhna. All rights reserved. | Led by Mrs. Sapna Kulshreshtha
          </p>
        </div>
      </div>
    </footer>
  )
}

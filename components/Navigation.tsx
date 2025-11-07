"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ]

  // Function to close the menu on link click
  const handleLinkClick = () => {
    setIsOpen(false)
  }

  // Trigger animation on mount
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <>
      {/* Desktop Dynamic Island Navbar - Always Expanded */}
      <nav className={`hidden md:flex fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-background/80 backdrop-blur-md border border-muted-green/20 rounded-full px-6 py-2 shadow-lg transition-all duration-700 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="flex items-center space-x-6">
          {/* Logo/Brand Name */}
          <Link href="/" className="flex items-center gap-2 font-josefin text-lg font-bold text-deep-green hover:text-golden transition">
            <img src="/gallery/logo.jpg" alt="Mishthy Yog Sadhna Logo" className="h-8 w-8 rounded-full object-cover" />
            Mishthy Yog SADHNA
          </Link>

          {/* Navigation Links - Always Visible */}
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground font-medium transition hover:text-deep-green"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Floating Island - Logo on Left, Hamburger on Right */}
      <div className={`md:hidden fixed top-4 left-4 right-4 z-50 flex items-center justify-between transition-all duration-700 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        {/* Logo on Left */}
        <Link href="/" className="flex items-center gap-2 font-josefin text-lg font-bold text-deep-green hover:text-golden transition">
          <div className="bg-white rounded-full p-2">
            <img src="/gallery/logo.jpg" alt="Mishthy Yog Sadhna Logo" className="h-12 w-12 rounded-full object-cover" />
          </div>
        </Link>

        {/* Hamburger Button on Right */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-background/80 backdrop-blur-md border border-muted-green/20 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-105"
        >
          {isOpen ? <X size={24} className="text-deep-green" /> : <Menu size={24} className="text-deep-green" />}
        </button>
      </div>

      {/* Mobile Menu - Collapsible Drawer from Right */}
      <div className={`md:hidden fixed top-16 right-0 h-[calc(100vh-4rem)] w-64 bg-background/95 backdrop-blur-md border-l border-muted-green/20 transition-transform duration-300 ease-in-out z-40 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col p-6 pt-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-green-900 hover:text-deep-green font-medium transition py-3 border-b border-muted-green/10 last:border-b-0"
              onClick={handleLinkClick}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Optional: Overlay to close menu when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 md:hidden z-30"
          onClick={handleLinkClick}
        />
      )}
    </>
  )
}

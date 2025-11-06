"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ]

  // Function to close the menu on link click
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-muted-green/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand Name */}
          <Link href="/" className="flex items-center gap-3 font-josefin text-2xl font-bold text-deep-green hover:text-golden transition">
            <img src="/gallery/logo.jpg" alt="Mishthy Yog Sadhna Logo" className="h-10 w-10 rounded-full object-cover" />
            Mishthy Yog SADHNA
          </Link>

          {/* Desktop Menu - Horizontal Tabs */}
          <div className="hidden md:flex space-x-6 lg:space-x-10"> {/* Changed from absolute/circular to flex/horizontal */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-foreground font-medium transition hover:text-deep-green group py-2" // Added relative for the underline
              >
                {link.label}
                {/* Underline on hover effect */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-golden group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-lg text-deep-green hover:bg-muted-green/20 z-50">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Collapsible Drawer */}
      {/* Use conditional classes for a smooth slide-in/out effect */}
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
    </nav>
  )
}
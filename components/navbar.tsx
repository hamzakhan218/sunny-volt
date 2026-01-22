"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Sun, ArrowRight } from "lucide-react"
import Image from "next/image"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("Home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Update active section based on scroll position
      const sections = ["contact", "about", "services"]
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section.charAt(0).toUpperCase() + section.slice(1))
            return
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection("Home")
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-card/80 backdrop-blur-xl shadow-lg shadow-black/5 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div
              className={`relative p-2.5 rounded-xl transition-all duration-300 ${
                isScrolled ? "" : ""
              } group-hover:scale-110 group-hover:rotate-12`}
            >
              {/* <Sun className="h-6 w-6 text-accent-foreground transition-transform group-hover:rotate-180 duration-500" /> */}
              <Image src="/Logo.jpeg" alt="SunnyVolt Logo" width={65} height={65} className="rounded" />
              <div className="absolute inset-0 rounded-xl bg-accent animate-ping opacity-0 group-hover:opacity-30" />
            </div>
            <div className="flex flex-col">
              <span
                className={`text-xl font-bold transition-colors duration-300 ${
                  isScrolled ? "text-foreground" : "text-card"
                }`}
              >
                SunnyVolt
              </span>
              <span
                className={`text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                  isScrolled ? "text-muted-foreground" : "text-card/60"
                }`}
              >
                Solar Energy
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 font-medium transition-all duration-300 rounded-full ${
                  activeSection === link.name
                    ? isScrolled
                      ? "text-accent"
                      : "text-accent"
                    : isScrolled
                      ? "text-muted-foreground hover:text-foreground"
                      : "text-card/80 hover:text-card"
                }`}
              >
                {link.name}
                {activeSection === link.name && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="#contact"
              className="group relative inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5 overflow-hidden"
            >
              <span className="relative z-10">Get Quote</span>
              <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-accent via-amber-400 to-accent bg-[length:200%_100%] opacity-0 group-hover:opacity-100 animate-gradient transition-opacity" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2.5 rounded-xl transition-all duration-300 ${
              isScrolled
                ? "text-foreground bg-secondary hover:bg-secondary/80"
                : "text-card bg-white/10 hover:bg-white/20"
            }`}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <div className="relative w-6 h-6">
              <Menu
                className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                  isOpen ? "opacity-0 rotate-180" : "opacity-100 rotate-0"
                }`}
              />
              <X
                className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                  isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-180"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-card/95 backdrop-blur-xl shadow-2xl transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-6 space-y-2">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block text-foreground font-medium hover:text-accent hover:bg-accent/10 transition-all py-3 px-4 rounded-xl ${
                isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
              }`}
              style={{
                transitionDelay: isOpen ? `${index * 75}ms` : "0ms",
              }}
            >
              {link.name}
            </Link>
          ))}
          <div
            className={`pt-4 transition-all duration-500 ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: isOpen ? "300ms" : "0ms" }}
          >
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 bg-accent text-accent-foreground text-center py-4 rounded-xl font-bold shadow-lg"
            >
              Get Free Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

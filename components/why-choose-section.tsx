"use client"

import { useEffect, useRef, useState } from "react"
import {
  ShieldCheck,
  Diamond,
  Banknote,
  Globe,
  Check,
  Zap,
  Clock,
  HeartHandshake,
} from "lucide-react"

const features = [
  { icon: ShieldCheck, label: "Certified Installers", description: "Factory-trained experts" },
  { icon: Diamond, label: "Premium Equipment", description: "Top-tier components only" },
  { icon: Banknote, label: "Competitive Pricing", description: "Best value guaranteed" },
  { icon: Globe, label: "Nationwide Support", description: "Service across Pakistan" },
]

const benefits = [
  { icon: Zap, text: "25-year Performance Warranties" },
  { icon: Clock, text: "Real-time Smartphone Monitoring" },
  { icon: Banknote, text: "Zero-down Financing Options" },
  { icon: HeartHandshake, text: "24/7 Customer Support" },
]

export function WhyChooseSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-primary text-primary-foreground overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl animate-blob animation-delay-300" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-foreground/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Features Grid */}
          <div
            className={`order-2 lg:order-1 grid grid-cols-2 gap-4 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-16"
            }`}
          >
            {features.map((item, index) => (
              <div
                key={item.label}
                className={`group relative bg-primary-foreground/5 backdrop-blur-sm p-6 rounded-3xl border border-primary-foreground/10 transition-all duration-500 cursor-default overflow-hidden ${
                  hoveredFeature === index 
                    ? "bg-primary-foreground/10 border-accent/50 scale-105 shadow-2xl shadow-accent/10" 
                    : "hover:bg-primary-foreground/10 hover:border-accent/30"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                {/* Gradient glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-3xl transition-opacity duration-500 ${
                  hoveredFeature === index ? "opacity-100" : "opacity-0"
                }`} />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <item.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <span className="font-bold text-lg block mb-1">{item.label}</span>
                  <span className="text-sm text-primary-foreground/60">{item.description}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Content */}
          <div
            className={`order-1 lg:order-2 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-16"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 mb-6">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-accent font-bold tracking-widest uppercase text-sm">
                Why Choose Us
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6 text-balance leading-tight">
              Why Choose <span className="text-accent">SunnyVolt</span>?
            </h2>
            
            <p className="text-primary-foreground/70 text-lg mb-10 leading-relaxed">
              We don&apos;t just sell panels; we deliver peace of mind. Our
              engineering-first approach ensures that every system is optimized
              for its unique environment.
            </p>

            {/* Benefits List */}
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li
                  key={benefit.text}
                  className={`group flex items-center gap-4 p-4 rounded-2xl bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-all duration-500 cursor-default ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    <Check className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div className="flex items-center gap-3">
                    <benefit.icon className="w-5 h-5 text-accent opacity-70" />
                    <span className="font-medium text-primary-foreground">{benefit.text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

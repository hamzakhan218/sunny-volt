"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Zap, Shield, Award, Play, Sparkles } from "lucide-react"

const stats = [
  { icon: Zap, value: 500, suffix: "+", label: "Installations" },
  { icon: Shield, value: 25, suffix: "yr", label: "Warranty" },
  { icon: Award, value: 10, suffix: "+", label: "Years Experience" },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, value])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-solar.jpg"
          alt="Solar panels at sunset"
          fill
          className="object-cover scale-110 transition-transform duration-1000"
          style={{
            transform: `scale(1.1) translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
          }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/30" />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      {/* Animated Blobs */}
      <div 
        className="absolute top-1/4 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-blob"
        style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
      />
      <div 
        className="absolute bottom-1/4 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-blob animation-delay-300"
        style={{ transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)` }}
      />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl animate-float-slow" />

      {/* Floating Particles */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-accent/30 rounded-full animate-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass mb-8 transition-all duration-700 hover:scale-105 cursor-default ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Sparkles className="w-4 h-4 text-accent animate-pulse" />
            <span className="text-primary-foreground/90 text-sm font-medium">
              Leading Solar Provider in Pakistan
            </span>
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          </div>

          {/* Heading with Gradient Text */}
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] mb-6 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="block text-primary-foreground text-balance">
              Affordable & Reliable
            </span>
            <span className="gradient-text">Solar Solutions</span>
          </h1>

          {/* Description with fade line */}
          <p
            className={`text-lg sm:text-xl text-primary-foreground/80 max-w-xl mb-10 leading-relaxed transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Harness the power of the sun to eliminate electricity bills and build
            a sustainable future for your family and business.
          </p>

          {/* CTAs with magnetic effect */}
          <div
            className={`flex flex-col sm:flex-row gap-4 mb-16 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Link
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:shadow-accent/30 hover:-translate-y-1 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Free Quote
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent via-amber-400 to-accent bg-[length:200%_100%] animate-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            {/* <Link
              href="#services"
              className="group inline-flex items-center justify-center gap-3 glass text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg transition-all hover:bg-white/20 hover:scale-105"
            >
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <Play className="w-4 h-4 ml-0.5 text-primary-foreground" />
              </div>
              Watch Video
            </Link> */}
          </div>

          {/* Stats with animated counters */}
          <div
            className={`grid grid-cols-3 gap-6 sm:gap-10 transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="group text-center sm:text-left cursor-default"
                style={{ animationDelay: `${400 + index * 100}ms` }}
              >
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                  <div className="p-2 rounded-lg bg-accent/20 group-hover:bg-accent/30 transition-colors hidden sm:block">
                    <stat.icon className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-2xl sm:text-4xl font-bold text-primary-foreground">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </span>
                </div>
                <span className="text-primary-foreground/60 text-sm font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator with enhanced animation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2">
          <span className="text-primary-foreground/50 text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-accent rounded-full animate-bounce" />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[5]" />
    </section>
  )
}

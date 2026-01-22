"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { CheckCircle2, TrendingUp, Users, Leaf, Award } from "lucide-react"

const highlights = [
  { icon: Award, text: "Tier-1 A-Grade Solar Panels" },
  { icon: TrendingUp, text: "Advanced Inverter Technology" },
  { icon: CheckCircle2, text: "Industry-Leading Warranties" },
  { icon: Users, text: "Professional Installation" },
]

const stats = [
  { value: "10+", label: "Years", sublabel: "of Excellence" },
  { value: "500+", label: "Happy", sublabel: "Customers" },
  { value: "98%", label: "Client", sublabel: "Satisfaction" },
]

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
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
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 bg-background overflow-hidden relative"
    >
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Side */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-16"
            }`}
          >
            {/* Main image container */}
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl blur-xl opacity-50" />
              
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/about-solar.jpg"
                  alt="SunnyVolt team at work"
                  fill
                  className={`object-cover transition-all duration-700 ${
                    imageLoaded ? "scale-100 blur-0" : "scale-110 blur-md"
                  }`}
                  onLoad={() => setImageLoaded(true)}
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
              </div>

              {/* Floating eco badge */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-card rounded-2xl shadow-xl flex items-center justify-center animate-float border border-border">
                <Leaf className="w-10 h-10 text-emerald-500" />
              </div>
            </div>
            
            {/* Stats row below image */}
            <div className="flex justify-between mt-6 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`flex-1 bg-card p-4 rounded-2xl shadow-lg border border-border text-center transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <p className="text-2xl sm:text-3xl font-bold text-accent">{stat.value}</p>
                  <p className="text-xs text-muted-foreground font-medium">
                    {stat.label} <br className="hidden sm:block" />{stat.sublabel}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Content Side */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-16"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 mb-6">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-accent font-bold tracking-widest uppercase text-sm">
                About SunnyVolt
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground text-balance leading-tight">
              Powering a <span className="gradient-text">Brighter</span> Tomorrow
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              We are the premier solar company delivering exceptional clean energy
              solutions. We provide Tier-1 A-Grade solar panels and advanced
              inverters, backed by the best warranties, fast after-sales support,
              and installation by highly skilled engineers.
            </p>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We pride ourselves on being more than just installers - we are your
              partners in energy independence.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.text}
                  className={`group flex items-center gap-4 p-4 rounded-2xl bg-secondary/50 hover:bg-secondary transition-all duration-500 hover:shadow-md cursor-default ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <item.icon className="w-5 h-5 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <span className="text-foreground font-medium text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

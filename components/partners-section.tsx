"use client"

import { useEffect, useRef, useState } from "react"
import { Star } from "lucide-react"

const partners = [
  { name: "JA Solar", rating: 4.9 },
  { name: "Jinko Solar", rating: 4.8 },
  { name: "LONGi Green", rating: 4.9 },
  { name: "Canadian Solar", rating: 4.7 },
  { name: "Trina Solar", rating: 4.8 },
  { name: "SunPower", rating: 4.9 },
  { name: "Huawei", rating: 4.8 },
  { name: "Sungrow", rating: 4.7 },
]

export function PartnersSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-background border-y border-border overflow-hidden relative"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[200px] bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 mb-4">
            <Star className="w-4 h-4 text-accent fill-accent" />
            <span className="text-accent font-bold tracking-widest uppercase text-sm">
              Our Partners
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
            Trusted by Leading Brands
          </h3>
        </div>

        {/* Marquee container */}
        <div className="relative">
          <div className="flex overflow-hidden">
            <div className="flex animate-marquee gap-6 pr-6">
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className={`group relative flex flex-col items-center justify-center min-w-[180px] h-24 px-6 bg-card rounded-2xl border border-border transition-all duration-300 cursor-default ${
                    hoveredIndex === index % partners.length
                      ? "scale-105 shadow-xl border-accent/50 bg-accent/5"
                      : "hover:border-accent/30 hover:shadow-lg"
                  }`}
                  onMouseEnter={() => setHoveredIndex(index % partners.length)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <span className="text-foreground font-bold text-lg whitespace-nowrap mb-1">
                    {partner.name}
                  </span>
                  <div className="flex items-center gap-1 opacity-70 group-hover:opacity-100 transition-opacity">
                    <Star className="w-3 h-3 text-accent fill-accent" />
                    <span className="text-xs text-muted-foreground font-medium">{partner.rating}</span>
                  </div>
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
        </div>

        {/* Stats below marquee */}
        <div
          className={`flex flex-wrap justify-center gap-8 md:gap-16 mt-12 pt-12 border-t border-border transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {[
            { value: "8+", label: "Partner Brands" },
            { value: "100%", label: "Certified Products" },
            { value: "A-Grade", label: "Quality Standard" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center group cursor-default"
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <p className="text-3xl md:text-4xl font-bold text-accent group-hover:scale-110 transition-transform">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground font-medium mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { useEffect, useRef, useState } from "react"
import { Home, Building2, Wrench, BarChart3, ArrowUpRight, Sparkles } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Residential Solar",
    description:
      "Complete home solar solutions designed to maximize energy savings and reduce your carbon footprint.",
    color: "from-amber-500/20 to-orange-500/20",
    iconBg: "bg-amber-500/10 group-hover:bg-amber-500",
  },
  {
    icon: Building2,
    title: "Commercial Projects",
    description:
      "Large-scale solar installations for businesses, warehouses, and industrial facilities.",
    color: "from-blue-500/20 to-cyan-500/20",
    iconBg: "bg-blue-500/10 group-hover:bg-blue-500",
  },
  {
    icon: Wrench,
    title: "Maintenance & Repairs",
    description:
      "Expert maintenance services and quick repairs to keep your solar system running at peak efficiency.",
    color: "from-emerald-500/20 to-green-500/20",
    iconBg: "bg-emerald-500/10 group-hover:bg-emerald-500",
  },
  {
    icon: BarChart3,
    title: "Energy Audits",
    description:
      "Comprehensive energy assessments to optimize your power consumption and identify savings.",
    color: "from-violet-500/20 to-purple-500/20",
    iconBg: "bg-violet-500/10 group-hover:bg-violet-500",
  },
]

export function ServicesSection() {
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
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-accent font-bold tracking-widest uppercase text-sm">
              What We Offer
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground text-balance">
            Our Premium Services
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive solar solutions tailored to meet your specific energy needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative bg-card p-8 rounded-3xl border border-border transition-all duration-500 hover:border-transparent card-shine ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              } ${hoveredIndex === index ? "scale-105 shadow-2xl z-10" : "hover:shadow-xl"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                  <service.icon className="w-8 h-8 text-accent group-hover:text-white transition-colors duration-500" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-foreground transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 group-hover:text-muted-foreground/90">
                  {service.description}
                </p>

                {/* Arrow */}
                <div className="flex items-center gap-2 text-accent font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <span>Learn more</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>

              {/* Number badge */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-secondary flex items-center justify-center opacity-50 group-hover:opacity-100 group-hover:bg-accent/20 transition-all">
                <span className="text-sm font-bold text-muted-foreground group-hover:text-accent">
                  0{index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

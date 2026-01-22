"use client";

import React from "react";
import { useEffect, useRef, useState } from "react";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Send,
  CheckCircle,
  Sparkles,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+92 305 9865325",
    href: "tel:+923059865325",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+92 305 9865325",
    href: "https://wa.me/923059865325",
  },
  {
    icon: Mail,
    label: "Email",
    value: "sunnyvolt17@gmail.com",
    href: "mailto:sunnyvolt17@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Office#8 Lower ground Square plaza gate no 1 B17 Islamabad",
    href: "#",
  },
];

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Residential Inquiry",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset after showing success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "Residential Inquiry",
        message: "",
      });
    }, 3000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

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
              Get In Touch
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground text-balance">
            Ready to Go <span className="gradient-text">Solar</span>?
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Take the first step towards energy independence. Our experts are
            here to help.
          </p>
        </div>

        {/* Contact Card */}
        <div
          className={`bg-card rounded-3xl shadow-2xl overflow-hidden border border-border transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Info Side */}
            <div className="bg-primary p-8 md:p-12 text-primary-foreground relative overflow-hidden">
              {/* Animated background */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-blob" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-blob animation-delay-300" />
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                  Let&apos;s Start Your Solar Journey
                </h3>
                <p className="text-primary-foreground/70 text-lg mb-10 leading-relaxed">
                  Have questions? Our experts are here to help you navigate your
                  path to clean, affordable energy.
                </p>

                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className={`group flex items-center gap-4 p-4 rounded-2xl bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-all duration-500 ${
                        isVisible
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-8"
                      }`}
                      style={{ transitionDelay: `${300 + index * 100}ms` }}
                    >
                      <div className="w-12 h-12 shrink-0 bg-accent/20 rounded-xl flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                        <item.icon className="w-5 h-5 text-accent group-hover:text-accent-foreground transition-colors" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-primary-foreground/60 text-sm">
                          {item.label}
                        </p>
                        <p
  className={`font-semibold group-hover:text-accent transition-colors ${
    item.breakAll ? "break-all" : "break-words"
  }`}
>
  {item.value}
</p>

                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form Side */}
            <form onSubmit={handleSubmit} className="p-8 md:p-12 relative">
              {/* Success overlay */}
              <div
                className={`absolute inset-0 bg-card flex flex-col items-center justify-center z-20 transition-all duration-500 ${
                  isSubmitted
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mb-6 animate-bounce-subtle">
                  <CheckCircle className="w-10 h-10 text-emerald-500" />
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-2">
                  Message Sent!
                </h4>
                <p className="text-muted-foreground">
                  We will get back to you shortly.
                </p>
              </div>

              <div className="space-y-6">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focusedField === "name" || formData.name
                        ? "-top-2.5 text-xs bg-card px-2 text-accent font-bold"
                        : "top-3.5 text-muted-foreground"
                    }`}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-border bg-background focus:border-accent outline-none transition-all duration-300"
                    required
                  />
                </div>

                <div className="relative">
                  <label
                    htmlFor="email"
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focusedField === "email" || formData.email
                        ? "-top-2.5 text-xs bg-card px-2 text-accent font-bold"
                        : "top-3.5 text-muted-foreground"
                    }`}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-border bg-background focus:border-accent outline-none transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-bold text-foreground mb-2"
                  >
                    Subject
                  </label>
                  <div className="relative">
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-4 py-3.5 rounded-xl border-2 border-border bg-background focus:border-accent outline-none transition-all duration-300 appearance-none cursor-pointer"
                    >
                      <option>Residential Inquiry</option>
                      <option>Commercial Project</option>
                      <option>Maintenance Request</option>
                      <option>General Question</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-muted-foreground"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <label
                    htmlFor="message"
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focusedField === "message" || formData.message
                        ? "-top-2.5 text-xs bg-card px-2 text-accent font-bold"
                        : "top-3.5 text-muted-foreground"
                    }`}
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-border bg-background focus:border-accent outline-none transition-all duration-300 resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-0.5 flex items-center justify-center gap-2 overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent via-amber-400 to-accent bg-[length:200%_100%] opacity-0 group-hover:opacity-100 animate-gradient transition-opacity" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";

import { useState } from "react";
import Link from "next/link";
import {
  Sun,
  MapPin,
  Phone,
  Mail,
  ArrowUp,
  Send,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";
import Image from "next/image";

const footerLinks = {
  services: [
    { name: "Residential Solar", href: "#services" },
    { name: "Commercial Projects", href: "#services" },
    { name: "Inverter Repairs", href: "#services" },
    { name: "Energy Audits", href: "#services" },
  ],
  support: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Warranty Info", href: "#" },
    { name: "FAQs", href: "#" },
  ],
};

const socialLinks = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/share/1KR1kGwJMb/?mibextid=wwXIfr",
    label: "Facebook",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/sunnyvolt6?igsh=ZmoxZ3l3ZjIyMjQy&utm_source=qr",
    label: "Instagram",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/sunny-volt-9573853a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    label: "LinkedIn",
  },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-foreground/5 rounded-full blur-3xl" />
      </div>

      {/* Newsletter Section */}
      <div className="relative z-10 border-b border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-2">
                Stay Updated
              </h3>
              <p className="text-primary-foreground/70">
                Subscribe to our newsletter for solar tips and exclusive offers.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex w-full max-w-md">
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-5 py-4 rounded-l-xl bg-primary-foreground/10 border border-primary-foreground/20 border-r-0 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-accent transition-colors"
                  required
                />
              </div>
              <button
                type="submit"
                className="group px-6 py-4 bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-r-xl transition-all flex items-center gap-2"
              >
                {isSubscribed ? (
                  "Subscribed!"
                ) : (
                  <>
                    Subscribe
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="group inline-flex items-center gap-3 mb-6"
            >
              <div className="p-2.5 rounded-xl group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                <Image
                  src="/Logo.jpeg"
                  alt="SunnyVolt Logo"
                  width={56}
                  height={56}
                  className="rounded"
                />
                {/* <Sun className="h-6 w-6 text-accent-foreground transition-transform group-hover:rotate-180 duration-500" /> */}
              </div>
              <div>
                <span className="text-xl font-bold block">SunnyVolt</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-primary-foreground/60">
                  Solar Energy
                </span>
              </div>
            </Link>
            <p className="text-primary-foreground/70 leading-relaxed mb-6">
              Powering a Brighter Tomorrow with affordable, reliable, and
              sustainable solar energy solutions.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="group w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-all duration-300"
                >
                  <social.icon className="w-5 h-5 text-primary-foreground/70 group-hover:text-accent-foreground group-hover:scale-110 transition-all" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full" />
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent hover:translate-x-2 transition-all inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full" />
              Support
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent hover:translate-x-2 transition-all inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full" />
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="group flex items-start gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <span className="pt-2">
                    Office#8 Lower ground Square plaza gate no 1 B17 Islamabad
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+923059865325"
                  className="group flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <span>+92 305 9865325</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:sunnyvolt17@gmail.com"
                  className="group flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <span>sunnyvolt17@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} SunnyVolt. All rights reserved.
              Powered by Clean Energy.
            </p>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-3 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              aria-label="Scroll to top"
            >
              <span className="text-sm font-medium">Back to top</span>
              <div className="w-10 h-10 bg-primary-foreground/10 rounded-xl flex items-center justify-center group-hover:bg-accent group-hover:-translate-y-1 transition-all duration-300">
                <ArrowUp className="w-5 h-5 group-hover:text-accent-foreground transition-colors" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

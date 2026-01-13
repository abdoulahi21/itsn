"use client"

import Link from "next/link"
import { Phone, MessageCircle, Facebook, Linkedin, Instagram } from "lucide-react"
import { useApp } from "@/components/providers"
import { getTranslations } from "@/lib/i18n"

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://facebook.com/aldtech" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/aldtech" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/aldtech" },
]

export function Footer() {
  const { locale } = useApp()
  const t = getTranslations(locale)

  const quickLinks = [
    { name: t.nav.home, href: "#accueil" },
    { name: t.nav.services, href: "#services" },
    { name: t.nav.projects, href: "#projets" },
    { name: t.nav.contact, href: "#contact" },
  ]

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Contact Bar */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between py-6 gap-4">
            <a href="tel:+212720538011" className="flex items-center gap-3 hover:text-accent transition-colors">
              <Phone className="w-5 h-5" />
              <span>{t.footer.callUs} +212 720 538 011</span>
            </a>
            <a
              href="https://wa.me/212720538011"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-accent transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{t.footer.whatsappContact}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">

                <img src="/logo.png" alt="Logo" className="w-22 h-20 object-contain" />

              <span className="text-xl font-bold">
                ALD <span className="text-accent">TECH</span>
              </span>
            </Link>
            <p className="text-primary-foreground/70 mb-6 max-w-sm">{t.footer.description}</p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-primary-foreground/70 hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">{t.footer.servicesTitle}</h3>
            <ul className="space-y-3 text-primary-foreground/70">
              {t.footer.servicesList.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p>
              © {new Date().getFullYear()} ALD TECH. {t.footer.copyright}
            </p>
            <p>{t.footer.madeWith} 🇲🇦</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

"use client"

import { useState } from "react"
import { ExternalLink } from "lucide-react"
import { useApp } from "@/components/providers"
import { getTranslations } from "@/lib/i18n"

const projectImages = [
  "/modern-ecommerce-fashion-website-design-mockup.jpg",
  "/fintech-mobile-app-dashboard-design-mockup.jpg",
  "/corporate-business-website-design-mockup.jpg",
  "/startup-brand-identity-logo-design-mockup.jpg",
  "/saas-platform-dashboard-web-design-mockup.jpg",
  "/digital-marketing-campaign-social-media-design.jpg",
]

export function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const { locale } = useApp()
  const t = getTranslations(locale)

  return (
    <section id="projets" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary text-sm font-medium rounded-full mb-4">
            {t.portfolio.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t.portfolio.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t.portfolio.subtitle}</p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.portfolio.projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={projectImages[index] || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-primary/90 flex flex-col items-center justify-center transition-opacity duration-300 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <span className="text-accent text-sm font-medium mb-2">{project.category}</span>
                <h3 className="text-xl font-bold text-primary-foreground mb-4">{project.title}</h3>
                <button className="flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors">
                  <span className="text-sm font-medium">{t.portfolio.viewProject}</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

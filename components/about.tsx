"use client"

import { CheckCircle2 } from "lucide-react"
import { useApp } from "@/components/providers"
import { getTranslations } from "@/lib/i18n"

export function About() {
  const { locale } = useApp()
  const t = getTranslations(locale)

  return (
    <section id="apropos" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden">
              <img
                src="/creative-digital-agency-team-working-together-mode.jpg"
                alt="L'équipe ALD TECH"
                className="w-full h-auto"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-secondary rounded-2xl -z-0" />
            <div className="absolute top-8 -left-8 w-24 h-24 bg-accent/20 rounded-full blur-xl" />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary text-sm font-medium rounded-full mb-4">
                {t.about.badge}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">{t.about.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{t.about.description1}</p>
              <p className="text-muted-foreground leading-relaxed">{t.about.description2}</p>
            </div>

            {/* Values */}
            <div className="space-y-4">
              {t.about.values.map((value, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

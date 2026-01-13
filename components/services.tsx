"use client"

import { Globe, Smartphone, RefreshCw, Code2, Palette, TrendingUp, Shield, PenTool, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useApp } from "@/components/providers"
import { getTranslations } from "@/lib/i18n"

const serviceIcons = [Globe, Smartphone, RefreshCw, Code2, Palette, TrendingUp, Shield, PenTool]

export function Services() {
  const { locale } = useApp()
  const t = getTranslations(locale)

  return (
    <section id="services" className="py-20 lg:py-32">
      {/* Blue Banner */}
      <div className="bg-primary py-12 mb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">{t.services.title}</h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">{t.services.subtitle}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.services.items.map((service, index) => {
            const Icon = serviceIcons[index]
            return (
              <Card
                key={index}
                className="group bg-card hover:bg-primary transition-all duration-300 cursor-pointer border-border hover:border-primary"
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-secondary/10 group-hover:bg-primary-foreground/20 flex items-center justify-center mb-4 transition-colors">
                    <Icon className="w-7 h-7 text-secondary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground group-hover:text-primary-foreground mb-2 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/80 mb-4 transition-colors">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-secondary group-hover:text-accent transition-colors">
                    <span className="text-sm font-medium">{t.services.learnMore}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

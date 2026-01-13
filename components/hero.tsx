"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useApp } from "@/components/providers"
import { getTranslations } from "@/lib/i18n"

export function Hero() {
  const { locale } = useApp()
  const t = getTranslations(locale)

  return (
    <section id="accueil" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-medium text-secondary">{t.hero.badge}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight text-balance">
              {t.hero.title}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">{t.hero.description}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground group">
                <Link href="#contact">
                  {t.hero.cta}
                  <ArrowRight className="ml-2 w-5 h-5 text-secondary group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <Link href="#projets">{t.hero.secondary}</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">{t.hero.stats.projects}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">30+</div>
                <div className="text-sm text-muted-foreground">{t.hero.stats.clients}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">{t.hero.stats.experience}</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/image-acc.jpg"
                alt="Développeur au travail avec interfaces UI/UX"
                className="w-full h-auto"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent rounded-2xl -z-0" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/20 rounded-2xl -z-0" />
          </div>
        </div>
      </div>
    </section>
  )
}

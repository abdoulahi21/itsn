"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import type { Locale } from "@/lib/i18n"

type Theme = "light" | "dark"

interface AppContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  locale: Locale
  setLocale: (locale: Locale) => void
}

const AppContext = createContext<AppContextType>({
  theme: "light",
  setTheme: () => {},
  locale: "fr",
  setLocale: () => {},
})

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light")
  const [locale, setLocaleState] = useState<Locale>("fr")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Check for saved preferences
    const savedTheme = localStorage.getItem("theme") as Theme | null
    const savedLocale = localStorage.getItem("locale") as Locale | null
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"

    setThemeState(savedTheme || systemTheme)
    setLocaleState(savedLocale || "fr")
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    // Apply theme to document
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
    localStorage.setItem("theme", theme)
  }, [theme, mounted])

  useEffect(() => {
    if (!mounted) return
    localStorage.setItem("locale", locale)
  }, [locale, mounted])

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
  }

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
  }

  return <AppContext.Provider value={{ theme, setTheme, locale, setLocale }}>{children}</AppContext.Provider>
}

export function useApp() {
  return useContext(AppContext)
}

"use client"

import { useState, useEffect } from "react"
import { ChartLine } from 'lucide-react';
import { Leaf } from 'lucide-react';

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm"
          : "bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="py-4">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="bg-gradient-to-r from-theme-dark_compliment/80 to-theme-dark_compliment/90 rounded-full p-2">
              <Leaf className="h-5 w-5 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-50">Mildew Risk Forecast</h1>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-1">
              Predicts mildew development likelihood based on environmental conditions
            </p>

            <div className="flex items-center justify-center text-md text-gray-500 dark:text-gray-400">
              <span>Range: 1-16 days</span>
              <span className="mx-3 text-gray-300 dark:text-gray-600">•</span>
              <span>Scale: 0-100 (Low-High Risk)</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import BMWScene from "@/components/bmw-scene"
import Hero from "@/components/shared/hero"
import Features from "@/components/features"
import Specifications from "@/components/specifications"
import Footer from "@/components/shared/footer"
import Mainnav from "@/components/layout/mainnav"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Home() {
  useEffect(() => {
    // Refresh ScrollTrigger on mount
    ScrollTrigger.refresh()
  }, [])

  return (
    <main className="relative">
      {/* Fixed 3D Scene */}
      <div className="fixed inset-0 z-0 bg-[#111817]">
        <BMWScene />
      </div>

      {/* Scrollable Content */}
      <div className="relative z-10">
        <Mainnav/>
        <Hero />
        <Features />
        <Specifications />
        <Footer />
      </div>

    </main>
  )
}

"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

const specs = [
  { label: "Engine", value: "3.0L TwinPower Turbo I6", unit: "" },
  { label: "Power Output", value: "382", unit: "HP" },
  { label: "Peak Torque", value: "369", unit: "lb-ft" },
  { label: "0-60 mph", value: "4.1", unit: "seconds" },
  { label: "Top Speed", value: "155", unit: "mph" },
  { label: "Fuel Economy", value: "26/36", unit: "mpg" },
]

export default function Specifications() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const specsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    if (!titleRef.current) return

    gsap.fromTo(
      titleRef.current,
      { opacity: 0, x: -60 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      },
    )

    specsRef.current.forEach((spec, index) => {
      if (spec) {
        gsap.fromTo(
          spec,
          { opacity: 0, x: 40, scale: 0.95 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: spec,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          },
        )
      }
    })
  }, [])

  return (
    <section ref={sectionRef} className="min-h-screen ">
      
    </section>
  )
}

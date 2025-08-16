"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!titleRef.current || !subtitleRef.current || !ctaRef.current) return

    const tl = gsap.timeline({ delay: 0.8 })

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 60, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out" }
    )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        "-=0.6"
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.4"
      )
  }, [])

  return (
    <section
      ref={heroRef}
      className="h-screen mt-16 flex flex-col items-center justify-center relative overflow-hidden bg-transparent"
    >
      <div className="w-full h-full flex p-4 text-center font-orbitron">
<h1 className="text-7xl montserrat-Q ">The new BMW M4</h1>
      </div>
<div className="w-full h-full">

</div>
    </section>
  )
}

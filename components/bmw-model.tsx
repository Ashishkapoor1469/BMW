"use client"

import { useRef, useEffect } from "react"
import { useFrame } from "@react-three/fiber"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import * as THREE from "three"
import { useGLTF, useTexture } from "@react-three/drei"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function BMWModel() {
  const groupRef = useRef<THREE.Group>(null)
  const { scene } = useGLTF("/car.glb") // Replace with BMW model path
const texture = useTexture("/road4.png")// Replace with actual texture path
  
texture.wrapS = texture.wrapT = THREE.RepeatWrapping
texture.repeat.set(5, 20)


useEffect(() => {
    if (!groupRef.current) return

    const group = groupRef.current

    // Start close to camera for bonnet view
    group.position.set(0, -0.2, 1) // closer to camera
    group.rotation.set(0.1, -1, 0) // face directly forward
    group.scale.set(4, 4, 4)

    console.log("[v3] Setting up BMW model animations")

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        pin: false,
      },
    })

    // Step 1: Bonnet close-up (already set in initial state)
    // Step 2: Zoom out to show full car
    tl.to(group.position, {
      z: -5, // move far back
      y: 0, // center height
      duration: 0.6,
      ease: "power2.inOut",
    })
      .to(
        group.rotation,
        {
          y: Math.PI * 2, // full spin
          duration: 1.2,
          ease: "power1.inOut",
        },
        "<",
      )

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  // Slight floating motion
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y += Math.sin(state.clock.elapsedTime * 0.5) * 0.002
    }
  })

  return (
    <group ref={groupRef} >
      <primitive object={scene}  />
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
      <planeGeometry args={[50, 200]} />
      <meshStandardMaterial map={texture} />
    </mesh>
    </group>
  )
}

// useGLTF.preload("/car.glb")

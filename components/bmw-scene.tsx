"use client"

import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { Environment, PerspectiveCamera } from "@react-three/drei"
import BMWModel from "./bmw-model"
import SceneLoader from "./scene-loader"

export default function BMWScene() {
  return (
    <Canvas className="w-full h-screen">
      <PerspectiveCamera makeDefault position={[0, 3, 15]} fov={60} />

      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1}  />
      <pointLight position={[-10, -10, -5]} intensity={0.5}  />

      {/* Environment for reflections */}
      <Environment preset="studio" />

      <Suspense fallback={<SceneLoader />}>
        <BMWModel />
      </Suspense>
    </Canvas>
  )
}

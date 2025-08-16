"use client"

import { Html, useProgress } from "@react-three/drei"

export default function SceneLoader() {
  const { progress } = useProgress()

  return (
    <Html center>
      <div className="flex flex-col items-center justify-center text-white">
        <div className="w-32 h-1 bg-gray-700 rounded-full overflow-hidden mb-4">
          <div className="h-full bg-blue-500 transition-all duration-300 ease-out" style={{ width: `${progress}%` }} />
        </div>
        <p className="text-sm font-medium">Loading BMW Experience...</p>
        <p className="text-xs text-gray-400">{Math.round(progress)}%</p>
      </div>
    </Html>
  )
}

import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { PerspectiveCamera, OrbitControls, Environment } from "@react-three/drei"

export function Scene() {
  const coneRefs = useRef([]) // Array to hold references for all main cones
  const [clones, setClones] = useState([]) // State to manage all clones
  const colors = ["#1b3b6f", "#2a52be", "#0047ab"] // Random colors

  // Generate positions and fixed colors for all main cones
  const cones = useRef(
    Array.from({ length: 10 * 10 }, (_, index) => {
      const rowIndex = Math.floor(index / 10) // Row number
      const colIndex = index % 10 // Column in the row
      const angle = rowIndex * (360 / 10) * (Math.PI / 180) // Convert degrees to radians
      const distanceFromCenter = colIndex === 0 ? 10 : colIndex * 5 + 20 // First cone closer to center
      return {
        position: [
          Math.cos(angle) * distanceFromCenter,
          0,
          Math.sin(angle) * distanceFromCenter,
        ],
        color: colors[Math.floor(Math.random() * colors.length)], // Assign a random color once
      }
    })
  ).current

  useFrame((state) => {
    const t = state.clock.getElapsedTime()

    // Rotate all main cones around the center axis of the screen
    coneRefs.current.forEach((ref, index) => {
      if (ref) {
        const { position } = cones[index]
        const radius = Math.sqrt(position[0] ** 2 + position[2] ** 2)
        const angle = Math.atan2(position[2], position[0]) + t * 0.5 // Add rotation
        ref.position.x = Math.cos(angle) * radius
        ref.position.z = Math.sin(angle) * radius
        ref.position.y = position[1]
      }
    })

    // Clone the cones every 30 frames (~0.5 seconds at 60 FPS)
    if (Math.floor(state.clock.elapsedTime * 60) % 1 === 0) {
      setClones((prev) => [
        ...prev,
        ...coneRefs.current.map((ref, index) => ({
          id: Math.random(),
          position: ref ? [...ref.position] : [0, 0, 0],
          scale: 1,
          color: cones[index].color, // Use the locked color of the main cone
        })),
      ])
    }

    // Shrink clones over time
    setClones((prev) =>
      prev
        .map((clone) => ({
          ...clone,
          scale: clone.scale * 0.9, // Shrink Effect
        }))
        .filter((clone) => clone.scale > 0.05) // Remove Tiny Clones
    )
  })

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 175, 0]} rotation={[-Math.PI / 6, 0, 0]} />
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      <Environment preset="night" background />

      {/* Render all main cones */}
      {cones.map((cone, index) => (
        <mesh
          key={index}
          ref={(el) => (coneRefs.current[index] = el)}
          position={cone.position}
        >
          <coneGeometry args={[3, 2, 90]} />
          <meshStandardMaterial color={cone.color} emissive={cone.color} emissiveIntensity={0.5} />
        </mesh>
      ))}

      {/* Render Clones */}
      {clones.map((clone) => (
        <mesh
          key={clone.id}
          position={clone.position}
          scale={[clone.scale, clone.scale, clone.scale]}
        >
          <coneGeometry args={[3, 2, 90]} />
          <meshStandardMaterial color={clone.color} emissive={clone.color} emissiveIntensity={0.5} />
        </mesh>
      ))}
    </>
  )
}


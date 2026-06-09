import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// Simple 3D Drone Model
function Drone() {
  const droneRef = useRef();
  const groupRef = useRef();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      // Gentle rotation
      groupRef.current.rotation.y += 0.003;

      // Mouse parallax
      groupRef.current.rotation.x = mousePosition.y * 0.3;
      groupRef.current.rotation.z = mousePosition.x * 0.2;
    }

    if (droneRef.current) {
      // Floating animation
      droneRef.current.position.y = Math.sin(Date.now() * 0.001) * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      <group ref={droneRef}>
        {/* Drone Body */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.8, 0.2, 0.8]} />
          <meshStandardMaterial color="#F97316" metalness={0.7} roughness={0.2} />
        </mesh>

        {/* Drone Arms */}
        {[
          [1, 1],
          [1, -1],
          [-1, 1],
          [-1, -1],
        ].map((pos, idx) => (
          <group key={idx}>
            {/* Arm */}
            <mesh position={[pos[0] * 0.6, 0.1, pos[1] * 0.6]}>
              <boxGeometry args={[0.2, 0.1, 0.5]} />
              <meshStandardMaterial color="#0F172A" metalness={0.5} roughness={0.3} />
            </mesh>

            {/* Motor Housing */}
            <mesh position={[pos[0] * 1, 0.1, pos[1] * 1]}>
              <cylinderGeometry args={[0.15, 0.15, 0.1, 32]} />
              <meshStandardMaterial color="#F97316" metalness={0.8} roughness={0.1} />
            </mesh>

            {/* Propeller */}
            <mesh position={[pos[0] * 1, 0.25, pos[1] * 1]}>
              <boxGeometry args={[1.2, 0.05, 0.15]} />
              <meshStandardMaterial color="#F97316" metalness={0.6} roughness={0.2} />
            </mesh>
          </group>
        ))}

        {/* Camera/Sensor */}
        <mesh position={[0, -0.15, 0.4]}>
          <cylinderGeometry args={[0.1, 0.1, 0.15, 32]} />
          <meshStandardMaterial color="#F97316" metalness={0.9} roughness={0.1} />
        </mesh>

        {/* LED Lights */}
        {[
          [0.3, 0, 0.4],
          [-0.3, 0, 0.4],
        ].map((pos, idx) => (
          <mesh key={`led-${idx}`} position={pos}>
            <sphereGeometry args={[0.08, 32, 32]} />
            <meshStandardMaterial color="#ff0080" emissive="#ff0080" emissiveIntensity={0.8} />
          </mesh>
        ))}
      </group>

      {/* Lights */}
      <pointLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
      <pointLight position={[-5, 5, 5]} intensity={0.5} color="#F97316" />
      <pointLight position={[0, -5, 0]} intensity={0.3} color="#F97316" />
      <ambientLight intensity={0.6} color="#ffffff" />
    </group>
  );
}

// Main Drone Scene Component
export default function DroneScene({ isMobile = false }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 3], fov: 50 }}
      style={{
        width: "100%",
        height: "100%",
        background: "transparent",
      }}
    >
      <PerspectiveCamera makeDefault position={[0, 0, 3]} fov={50} />
      <Drone />

      {!isMobile && (
        <OrbitControls
          autoRotate
          autoRotateSpeed={2}
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
        />
      )}
    </Canvas>
  );
}

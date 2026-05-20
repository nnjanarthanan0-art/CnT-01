"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";

function Diya() {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={meshRef} position={[0, -0.5, 0]}>
        {/* Base of diya - bowl shape */}
        <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
          <torusGeometry args={[1.2, 0.15, 16, 100]} />
          <meshStandardMaterial
            color="#c9a227"
            metalness={0.9}
            roughness={0.2}
          />
        </mesh>
        
        {/* Inner bowl */}
        <mesh position={[0, 0.1, 0]}>
          <cylinderGeometry args={[1.1, 0.8, 0.3, 32]} />
          <meshStandardMaterial
            color="#d4af37"
            metalness={0.85}
            roughness={0.25}
          />
        </mesh>

        {/* Oil inside */}
        <mesh position={[0, 0.15, 0]}>
          <cylinderGeometry args={[0.9, 0.9, 0.1, 32]} />
          <meshStandardMaterial color="#8B4513" metalness={0.3} roughness={0.7} />
        </mesh>

        {/* Flame core */}
        <mesh position={[0, 0.6, 0]}>
          <coneGeometry args={[0.15, 0.6, 8]} />
          <meshBasicMaterial color="#ff9500" />
        </mesh>

        {/* Flame glow */}
        <mesh position={[0, 0.5, 0]}>
          <sphereGeometry args={[0.25, 16, 16]} />
          <MeshTransmissionMaterial
            backside
            samples={4}
            thickness={0.5}
            chromaticAberration={0.1}
            anisotropy={0.3}
            distortion={0.5}
            distortionScale={0.5}
            temporalDistortion={0.1}
            color="#ffaa00"
            attenuationDistance={0.5}
            attenuationColor="#ff6600"
          />
        </mesh>

        {/* Outer decorative ring */}
        <mesh position={[0, 0.05, 0]}>
          <torusGeometry args={[1.35, 0.08, 8, 64]} />
          <meshStandardMaterial
            color="#a88c1d"
            metalness={0.95}
            roughness={0.15}
          />
        </mesh>
      </group>
    </Float>
  );
}

function FloatingParticles() {
  const count = 50;
  const meshRef = useRef<THREE.InstancedMesh>(null);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 10,
        ],
        scale: Math.random() * 0.03 + 0.01,
        speed: Math.random() * 0.5 + 0.2,
      });
    }
    return temp;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;
      particles.forEach((particle, i) => {
        const matrix = new THREE.Matrix4();
        const position = new THREE.Vector3(
          particle.position[0] + Math.sin(time * particle.speed + i) * 0.5,
          particle.position[1] + Math.cos(time * particle.speed + i) * 0.3,
          particle.position[2]
        );
        matrix.setPosition(position);
        matrix.scale(new THREE.Vector3(particle.scale, particle.scale, particle.scale));
        meshRef.current!.setMatrixAt(i, matrix);
      });
      meshRef.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#c9a227" metalness={0.8} roughness={0.2} />
    </instancedMesh>
  );
}

function GlowingOrb() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2 + 2;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 2, -2]}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshBasicMaterial color="#ffaa00" />
      <pointLight color="#ffaa00" intensity={3} distance={8} />
    </mesh>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#fff5e6" />
        <directionalLight position={[-5, 5, -5]} intensity={0.5} color="#c9a227" />
        <pointLight position={[0, 3, 0]} intensity={2} color="#ffaa00" />
        
        <Diya />
        <FloatingParticles />
        <GlowingOrb />
      </Canvas>
    </div>
  );
}

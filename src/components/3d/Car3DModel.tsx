
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, useGLTF } from '@react-three/drei';
import { Group } from 'three';

function CarModel({ rotate = true }: { rotate?: boolean }) {
  const group = useRef<Group>(null);
  
  // Simple car model with basic shapes
  useFrame((state) => {
    if (group.current && rotate) {
      group.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <group ref={group}>
      {/* Car body */}
      <mesh position={[0, 0.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[4, 1, 2]} />
        <meshStandardMaterial color="#2563eb" metalness={0.6} roughness={0.2} />
      </mesh>
      
      {/* Car roof */}
      <mesh position={[0, 1.2, 0]} castShadow>
        <boxGeometry args={[2, 0.8, 1.8]} />
        <meshStandardMaterial color="#1e40af" metalness={0.6} roughness={0.2} />
      </mesh>
      
      {/* Windows */}
      <mesh position={[0.9, 1.2, 0]} castShadow>
        <boxGeometry args={[0.1, 0.6, 1.7]} />
        <meshStandardMaterial color="#94a3b8" metalness={0.8} roughness={0.1} />
      </mesh>
      
      {/* Wheels */}
      <mesh position={[-1.5, 0, 1]} castShadow>
        <cylinderGeometry args={[0.4, 0.4, 0.2, 32]} rotation={[Math.PI / 2, 0, 0]} />
        <meshStandardMaterial color="#0f172a" metalness={0.1} roughness={0.8} />
      </mesh>
      <mesh position={[1.5, 0, 1]} castShadow>
        <cylinderGeometry args={[0.4, 0.4, 0.2, 32]} rotation={[Math.PI / 2, 0, 0]} />
        <meshStandardMaterial color="#0f172a" metalness={0.1} roughness={0.8} />
      </mesh>
      <mesh position={[-1.5, 0, -1]} castShadow>
        <cylinderGeometry args={[0.4, 0.4, 0.2, 32]} rotation={[Math.PI / 2, 0, 0]} />
        <meshStandardMaterial color="#0f172a" metalness={0.1} roughness={0.8} />
      </mesh>
      <mesh position={[1.5, 0, -1]} castShadow>
        <cylinderGeometry args={[0.4, 0.4, 0.2, 32]} rotation={[Math.PI / 2, 0, 0]} />
        <meshStandardMaterial color="#0f172a" metalness={0.1} roughness={0.8} />
      </mesh>
      
      {/* Lights */}
      <mesh position={[2, 0.5, 0.7]} castShadow>
        <boxGeometry args={[0.1, 0.2, 0.2]} />
        <meshStandardMaterial color="#fef9c3" emissive="#fef9c3" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[2, 0.5, -0.7]} castShadow>
        <boxGeometry args={[0.1, 0.2, 0.2]} />
        <meshStandardMaterial color="#fef9c3" emissive="#fef9c3" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
}

export default function Car3DModel({ className = "" }: { className?: string }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  if (!isMounted) {
    return <div className={`w-full h-64 bg-blue-50 rounded-xl ${className}`} />;
  }

  return (
    <div className={`w-full h-64 rounded-xl overflow-hidden shadow-lg ${className}`}>
      <Canvas shadows dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <directionalLight position={[-10, 10, -5]} intensity={0.5} />
        <PerspectiveCamera makeDefault position={[6, 3, 6]} fov={30} />
        <CarModel />
        <OrbitControls 
          enablePan={false} 
          enableZoom={false} 
          minPolarAngle={Math.PI / 3} 
          maxPolarAngle={Math.PI / 2.5} 
        />
        <Environment preset="city" />
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial color="#f1f5f9" roughness={1} metalness={0} />
        </mesh>
      </Canvas>
    </div>
  );
}

"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function Eye() {
  const mesh = useRef();

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.003;
      mesh.current.rotation.x += 0.001;
    }
  });

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[1.2, 64, 64]} />
      <meshStandardMaterial color="#E34A2F" metalness={0.4} roughness={0.3} />
    </mesh>
  );
}

export default function EyeModel() {
  return (
    <div className="w-full h-[400px]">
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[3, 3, 3]} intensity={1.5} />
        <Eye />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
      </Canvas>
    </div>
  );
}
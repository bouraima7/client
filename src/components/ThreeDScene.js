// ThreeDScene.js
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, useTexture, Environment, Html } from '@react-three/drei';
import { Vector3 } from 'three';

// Lighting Component
const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <directionalLight position={[-10, -10, -5]} intensity={1.5} />
      <pointLight position={[0, 10, 0]} intensity={1} />
    </>
  );
};

// 3D Model Loader Component
const Model = ({ path }) => {
  const { scene } = useGLTF(path);
  return <primitive object={scene} scale={2} position={[0, -1, 0]} />;
};

// Background or Environment Component
const Background = () => {
  return <Environment preset="sunset" background />;
};

// Main ThreeDScene Component
const ThreeDScene = () => {
  return (
    <Canvas
      camera={{ position: new Vector3(20, 0, 20), fov: 50 }}
      style={{ height: '350px', width: '50%', margin: '5px' }}
    >
      <Suspense fallback={<Html>Loading...</Html>}>
        <Lights />
        <Model path="/models/RobotExpressive.glb" /> {/* Replace with your model path */}
        <OrbitControls autoRotate enableZoom={true} />
        <Background />
      </Suspense>
    </Canvas>
  );
};

export default ThreeDScene;

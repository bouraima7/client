// src/components/ThreeDScene.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
// import { useRef } from 'react';
// import { Mesh } from 'three';

// function LockModel() {
//     const { scene } = useGLTF('/path-to-your-model/lock.gltf');
//     return <primitive object={scene} scale={2} />;
//   }
  

/* const ThreeDScene = () => {
  const mesh = useRef();

  return (
    <Canvas style={{ height: '500px', width: '100%' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      
      <mesh ref={mesh} rotation={[0, 0, 0]}>
        <boxBufferGeometry args={[3, 3, 3]} />
        <meshStandardMaterial color="blue" />
      </mesh>
      
      <OrbitControls />
    </Canvas>
  );
}; */

const ThreeDScene = () => {
    return (
      <Canvas style={{ height: '500px', width: '100%' }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        {/* <LockModel /> */}
        
        <OrbitControls />
      </Canvas>
    );
  };
  

export default ThreeDScene;




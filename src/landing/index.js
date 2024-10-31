// App.tsx
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import React, { useRef } from 'react';
import { CanModel } from '../components/can';

const Model = () => {
  const { scene } = useGLTF('/model/can3.glb');
    // Hardcoded values for position and rotation from OrbitControls
    const position = [-2, 0, 0]; // Example values
    const rotation = [-1*Math.PI / 2,  2.3, Math.PI / 1.2]; // Example values
  
    return <primitive object={scene} position={position} rotation={rotation} scale={1} />;
};

const CanContainer = () => {
    const controlsRef = useRef(null);
    const cameraRef = useRef(null);
    
    // useFrame(() => {
    //     if (controlsRef.current && cameraRef.current) {
    //       const { position, rotation } = cameraRef.current;
    //       console.log('Position:', position);
    //       console.log('Rotation:', rotation);
    //     }
    //   });
    
  return (
    <Canvas 
    className="canvas" ref={cameraRef}>
      <ambientLight intensity={4} />
      <directionalLight position={[0, 0, 5]} intensity={1.5} />
      <CanModel />
      <OrbitControls ref={controlsRef} />
    </Canvas>
  );
};

export default CanContainer;

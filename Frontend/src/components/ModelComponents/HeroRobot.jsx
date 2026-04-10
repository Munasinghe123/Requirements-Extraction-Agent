import React from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { useEffect } from 'react';


function HeroRobot() {

    const { scene } = useGLTF('./heroRobo.glb');
    const groupRef = useRef()

    useEffect(() => {
    scene.traverse((child) => {
        if (child.isBone || child.isMesh) {
            console.log(child.name); // list everything, find the head
        }
    });
}, [scene]);

    useFrame((state) => {
        const { pointer } = state

        // target rotation based on mouse
       
        const targetX = pointer.x * 0.5   // left/right

        // smooth interpolation (LERP)
      
        groupRef.current.rotation.y += (targetX - groupRef.current.rotation.y) * 0.05
    })

    return(
        < group ref={groupRef} >
            <primitive object={scene} position={[0, -0.6, 0]} scale={1.3} />
        </group >
    )
}

export default HeroRobot

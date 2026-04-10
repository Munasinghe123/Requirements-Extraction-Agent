import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

function HeroRobot() {
    const { scene } = useGLTF('./heroRobo.glb')
    const groupRef = useRef()

    //  global mouse tracking
    const mouse = useRef({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
            mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1
        }

        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    //  log parts (for head targeting )
    useEffect(() => {
        scene.traverse((child) => {
            if (child.isBone || child.isMesh) {
                console.log(child.name)
            }
        })
    }, [scene])

    useFrame(() => {
        if (!groupRef.current) return

        //  shift focus slightly to right 
        const offsetX = mouse.current.x - 0.3

        //  target rotation
        const targetY = offsetX * 0.5

        //  smooth interpolation 
        groupRef.current.rotation.y +=
            (targetY - groupRef.current.rotation.y) * 0.05
    })

    return (
        <group ref={groupRef}>
            <primitive
                object={scene}
                position={[0, -0.6, 0]}
                scale={1.3}
            />
        </group>
    )
}

export default HeroRobot
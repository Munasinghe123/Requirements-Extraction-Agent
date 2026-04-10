
import { Canvas } from "@react-three/fiber";
import HeroRobot from "./ModelComponents/HeroRobot";

import React from 'react'
import { AmbientLight } from "three";

function HeroCanvas() {
    return (
        <Canvas camera={{ position: [0, 0.5, 3], fov: 35 }}>
            <ambientLight intensity={1} />
            <directionalLight position={[2, 2, 2]} />
            <HeroRobot />
        </Canvas>
    )
}

export default HeroCanvas

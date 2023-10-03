import React, { useRef } from 'react';
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from 'three';
import { OrbitControls } from '@react-three/drei';

const texture = '/img/moon-texture.jpg';
const displacement = '/img/moon-texture-2.jpg';

function Moon(props: any) {
    const meshRef = useRef<any>(null);
    const [moonTexture, moonDisplacement] = useLoader(TextureLoader, [texture, displacement]);
    
    useFrame(() => meshRef.current.rotation.y += 0.005);

    return (
        <mesh ref={meshRef} {...props} >
            <sphereGeometry args={[3, 60, 60]} />
            <meshPhongMaterial
                shininess={0}
                reflectivity={0}
                displacementScale={0.08}
                map={moonTexture}
                displacementMap={moonDisplacement}
                bumpMap={moonDisplacement}
                bumpScale={0.2}
            />
            <ambientLight intensity={0.8} />
            <directionalLight />
        </mesh>
    )
}

export default function MoonAnimated() {
    return (
        <Canvas
            style={{
                width: "50vw",
                height: "50vw",
                maxHeight: 550,
                maxWidth: 550,
                margin: 'auto',
                cursor: 'pointer',
                borderRadius: '50%'
            }}
        >
            <Moon />
            <OrbitControls makeDefault />
        </Canvas>
    );
}




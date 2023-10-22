import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from 'three';
import { OrbitControls } from '@react-three/drei';

const texture = '/img/moon-texture.jpg';
const displacement = '/img/moon-texture-2.jpg';

function Moon(
    { isControlActive }: { isControlActive: boolean }
) {
    const meshRef = useRef<any>(null);
    const [moonTexture, moonDisplacement] = useLoader(TextureLoader, [texture, displacement]);

    useFrame(() => {
        if (isControlActive)
            return;

        meshRef.current.rotation.y += 0.005
    });

    return (
        <mesh ref={meshRef} >
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

type MoonAnimatedProps = {
    sizeMoon: {
        [key: string]: string | number
    },
    className?: string
}

export default function MoonAnimated({ sizeMoon, className }: MoonAnimatedProps) {
    const [isControlActive, setIsControlActive] = useState(false);

    return (
        <Canvas
            style={sizeMoon}
            className={className}
        >
            <Moon
                isControlActive={isControlActive}
            />
            <OrbitControls
                makeDefault
                onStart={() => setIsControlActive(true)}
                onEnd={() => setIsControlActive(false)}
                enableZoom={false}
            />
        </Canvas>
    );
}




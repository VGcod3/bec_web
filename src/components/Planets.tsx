import { useRef, useLayoutEffect } from 'react';
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useTransform, useScroll, useTime } from "framer-motion";
import { degreesToRadians, progress, mix } from "popmotion";

const color = "#f5a020";

const Icosahedron = () => (
    <mesh rotation-x={0.25}>
        <icosahedronGeometry args={[1.3, 0]} />
        <meshBasicMaterial wireframe color={color} />
    </mesh>
);

const Star = ({ p }: { p: number }) => {
    const ref = useRef<THREE.Mesh>(null);

    useLayoutEffect(() => {
        if (!ref.current) return;
        const distance = mix(2, 3.5, Math.random());
        const yAngle = mix(
            degreesToRadians(80),
            degreesToRadians(100),
            Math.random()
        );
        const xAngle = degreesToRadians(360) * p;
        ref.current.position.setFromSphericalCoords(distance, yAngle, xAngle);
    }, [p]);

    return (
        <mesh ref={ref}>
            <boxGeometry args={[0.05, 0.05, 0.05]} />
            <meshBasicMaterial wireframe color={color} />
        </mesh>
    );
};

function Scene({ numStars = 100 }) {
    const gl = useThree((state) => state.gl);
    const { scrollYProgress } = useScroll();
    const yAngle = useTransform(
        scrollYProgress,
        [0.25, 0.6],
        [0.001, degreesToRadians(180)]
    );
    const distance = useTransform(scrollYProgress, [0, 1], [10, 3]);
    const time = useTime();

    useFrame(({ camera }) => {
        camera.position.setFromSphericalCoords(
            distance.get(),
            yAngle.get(),
            time.get() * 0.0005
        );
        camera.updateProjectionMatrix();
        camera.lookAt(0, 0, 0);
    });

    useLayoutEffect(() => {
        gl.setPixelRatio(0.3);
    }, [gl]);

    const stars = [];
    for (let i = 0; i < numStars; i++) {
        stars.push(<Star key={i} p={progress(0, numStars, i)} />);
    }

    return (
        <>
            <Icosahedron />
            {stars}
        </>
    );
}

export default function Planets() {
    return (
        <div className="w-full h-screen">
            <Canvas>
                <Scene />
            </Canvas>
        </div>
    );
}

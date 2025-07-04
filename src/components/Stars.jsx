import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame} from "@react-three/fiber"
import { Points, PointMaterial, Preload, Point } from "@react-three/drei"
import * as random from 'maath/random';

const Stars = ({ 
    count = 5000, 
    radius = 1.2, 
    position = [0, 0, 0],
    rotation = [0, 0, Math.PI / 4],
    color = "#f272c8",
    size = 0.0012,
    speed = { x: 35, y: 40 }
}) => {

    const ref = useRef();

    const sphere = random.inSphere(new Float32Array(count), { radius })

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / speed.x;
        ref.current.rotation.y -= delta / speed.y;
    })

    return (
        <group rotation={rotation} position={position}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled>
                <PointMaterial 
                transparent
                color={color}
                size={size}
                sizeAttenuation={true}
                depthWrite={false}
                />
            </Points>
        </group>
    )
}

const StarsCanvas = ({ 
    count = 5000, 
    radius = 1.2, 
    position = [0, 0, 0],
    rotation = [0, 0, Math.PI / 4],
    color = "#f272c8",
    size = 0.0012,
    speed = { x: 35, y: 40 }
}) => {
    return (
        <div className="w-full h-full absolute inset-0 z-[-1]">
            <Canvas camera={{position: [0,0,1]}}>
                <Suspense fallback={null}>
                    <Stars 
                        count={count}
                        radius={radius}
                        position={position}
                        rotation={rotation}
                        color={color}
                        size={size}
                        speed={speed}
                    />
                </Suspense>

                <Preload all />
            </Canvas>
        </div>
    )
}

export default StarsCanvas
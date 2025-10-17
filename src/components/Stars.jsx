import { useState, useRef, Suspense, useMemo, memo } from "react";
import { Canvas, useFrame} from "@react-three/fiber"
import { Points, PointMaterial, Preload, Point } from "@react-three/drei"
import * as random from 'maath/random';
import { useMediaQuery } from 'react-responsive';

const Stars = memo(({ 
    count = 5000, 
    radius = 1.2, 
    position = [0, 0, 0],
    rotation = [0, 0, Math.PI / 4],
    color = "#f272c8",
    size = 0.0012,
    speed = { x: 35, y: 40 }
}) => {
    const ref = useRef();
    
    // Performance scaling based on device capabilities
    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
    
    // Optimize particle count based on device
    const optimizedCount = useMemo(() => {
        if (isSmall) return Math.min(count * 0.3, 200); // 30% on small screens, max 200
        if (isMobile) return Math.min(count * 0.5, 400); // 50% on mobile, max 400
        if (isTablet) return Math.min(count * 0.7, 600); // 70% on tablet, max 600
        return count; // Full count on desktop
    }, [count, isSmall, isMobile, isTablet]);

    const sphere = useMemo(() => 
        random.inSphere(new Float32Array(optimizedCount), { radius }), 
        [optimizedCount, radius]
    );

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
});

const StarsCanvas = memo(({ 
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
});

export default StarsCanvas
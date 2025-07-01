import { PerspectiveCamera } from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import HackerRoom from "../components/HackerRoom.jsx";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from '../constants/index.js';
import Target from "../components/Target.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Cube from "../components/Cube.jsx";
import Rings from "../components/Rings.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx"
import PythonLogo from "../components/PythonLogo.jsx";
import JavaLogo from "../components/JavaLogo.jsx";
import HtmlLogo from "../components/HtmlLogo.jsx";
import OrbitingLogos from '../components/OrbitingLogos.jsx'
import HeroComputer from "../components/HeroComputer.jsx";
import Mouse from "../components/Mouse.jsx";
import Keyboard from "../components/Keyboard.jsx";
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
    
    const x = useControls(
        "Hacker Room", { 
            positionX: {
            value: 2.5,
            min: -10,
            max: 10
        },

            positionY: {
            value: 2.5,
            min: -10,
            max: 10
        },

            positionZ: {
            value: 2.5,
            min: -10,
            max: 10
        },

            rotationX: {
            value: 0,
            min: -10,
            max: 10
        },

            rotationY: {
            value: 0,
            min: -10,
            max: 10
        },

            rotationZ: {
            value: 0,
            min: -10,
            max: 10
        },

        scale: {
            value: 1,
            min: 0.1,
            max: 10
        }
    })

    // useMediaQuery makes model repsonsive on different device sizes, uses constants from index.js
    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section id = "home" className = "min-h-screen w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-24 mt-16 c-space gap-4 z-10 relative">
                <p className = "sm:text-3xl text-2xl font-medium text-white text-center font-generalsans -mt-3">
                    Hi, I'm Colin <span className = "waving-hand">👋</span> 
                </p>
                <p className="hero_tag text-white text-center font-mono -mt-4">
                <span>
                    <Typewriter
                    words={['I solve problems with software.']}
                    typeSpeed={50}
                    delaySpeed={1000000}
                    loop={1}
                    />
                </span>
                <span className="blinking-cursor">▌</span>
                </p>
            </div>

            <div className = "w-full h-full absolute inset-0 z-0">
                <Leva hidden /> {/* This creates a control panel for the positioning of 3D models. Super useful, and replace the fields with the hardcoded fitting values after you mess around with it */}

                {/* A canvas is a place for a 3D scene */}
                <Canvas className= "w-full h-full">
                    <Suspense fallback={<CanvasLoader />}>

                    <PerspectiveCamera makeDefault position={[0, 0, 30]}/>

                    {/* This uses more constants from index.js to optimize the hacker room for different devices*/}

                    <group>
                        <Mouse />
                        <Keyboard />
                    </group>

                    <HeroCamera isMobile={isMobile}>
                        {/* <HackerRoom 
                        position={sizes.deskPosition} 
                        rotation = {[0, -Math.PI, 0]}
                        scale = {sizes.deskScale} /> */} {/* Can be in an array {[x,y,z]} or shorthanded to one value if all fields are equal */}
                        <HeroComputer />
                    </HeroCamera>

                    <group>
                        {/* <Target position = {sizes.targetPosition}/> */}
                        {/* <ReactLogo position = {sizes.reactLogoPosition}/>*/}
                        {/* <Cube position = {sizes.cubePosition}/> */}
                        {/* <Rings position = {sizes.ringPosition}/> */}
                        {/* <PythonLogo position={[-10,1.5,0]} />*/} 
                        {/* <JavaLogo position={[-15,1.5,0]}/>*/}
                        {/* <HtmlLogo position = {[7, 1.5, 0]}/>*/}
                        <OrbitingLogos />
                    </group>


                    <ambientLight intensity={1} />
                    <directionalLight position={[10, 10, 10]} intensity={0.7} />
                    </Suspense>
                </Canvas>
            </div>

            <div className = "absolute bottom-3 left-0 right-0 w-full z-10 c-space">
                <a href="#about" className="w-fit">
                    {/* <Button name="Learn About Me" isBeam containerClass = "sm:w-fit w-fill sm:min-w-96"/> */}
                </a>
            </div>
        </section>


    )
}

export default Hero;
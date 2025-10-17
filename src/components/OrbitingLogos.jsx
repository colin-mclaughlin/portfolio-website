import { useRef, memo, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { useMediaQuery } from 'react-responsive'
import HtmlLogo from './HtmlLogo'
import PythonLogo from './PythonLogo'
import ReactLogo from './ReactLogo'
import JavaLogo from './JavaLogo'
import JavaScriptLogo from './JavaScriptLogo'
import CLogo from './CLogo'

const OrbitingLogos = memo(() => {
  const orbitGroup = useRef()
  const radius = 10
  const bounceHeight = 0.5
  const bounceSpeed = 2

  // Performance scaling based on device
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const logoComponents = [
    HtmlLogo,
    PythonLogo,
    ReactLogo,
    JavaLogo,
    JavaScriptLogo,
    CLogo
  ];

  // Reduce number of logos on smaller devices for better performance
  const optimizedLogos = useMemo(() => {
    if (isSmall) return logoComponents.slice(0, 3); // Show only 3 logos on small screens
    if (isMobile) return logoComponents.slice(0, 4); // Show only 4 logos on mobile
    return logoComponents; // Show all logos on desktop
  }, [isSmall, isMobile]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()

    if (orbitGroup.current) {
      orbitGroup.current.children.forEach((wrapper, i) => {
        const angle = (i / optimizedLogos.length) * Math.PI * 2 + t * 0.2
        const x = radius * Math.cos(angle)
        const z = radius * Math.sin(angle)
        const y = -0.2 + Math.sin(t * bounceSpeed + i) * bounceHeight

        wrapper.position.set(x, y, z)
        wrapper.lookAt(0, 2, 0) // the wrapper faces the center
      })
    }
  })

  return (
    <group ref={orbitGroup}>
      {optimizedLogos.map((Logo, i) => (
        <group key={i}> {/* <- wrapper group */}
          <Logo />
        </group>
      ))}
    </group>
  )
});

export default OrbitingLogos

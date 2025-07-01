import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import HtmlLogo from './HtmlLogo'
import PythonLogo from './PythonLogo'
import ReactLogo from './ReactLogo'
import JavaLogo from './JavaLogo'
import JavaScriptLogo from './JavaScriptLogo'
import CLogo from './CLogo'

const OrbitingLogos = () => {
  const orbitGroup = useRef()
  const radius = 10
  const bounceHeight = 0.5
  const bounceSpeed = 2

  const logoComponents = [
    HtmlLogo,
    PythonLogo,
    ReactLogo,
    JavaLogo,
    JavaScriptLogo,
    CLogo
  ]

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()

    if (orbitGroup.current) {
      orbitGroup.current.children.forEach((wrapper, i) => {
        const angle = (i / logoComponents.length) * Math.PI * 2 + t * 0.2
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
      {logoComponents.map((Logo, i) => (
        <group key={i}> {/* <- wrapper group */}
          <Logo />
        </group>
      ))}
    </group>
  )
}

export default OrbitingLogos

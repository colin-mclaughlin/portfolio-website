
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const HtmlLogo = (props) => {
  const { nodes, materials } = useGLTF('/models/html5_logo.glb')
  
  const logoRef = useRef()


  useFrame(() => {
    if (logoRef.current) {
      logoRef.current.rotation.y += 0.01
    }
  })

  return (
    <group {...props} dispose={null} ref = {logoRef}>
      <group position={[-0.014, -1.6, 0]} rotation={[-Math.PI / 2, 0.006, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.0034}>
          <group
            position={[11.813, 52.914, -1.08]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={82.789}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane001_orange_0.geometry}
              material={materials.orange}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Plane001_orange-lite_0'].geometry}
              material={materials['orange-lite']}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Plane_escudo-2_0'].geometry}
            material={materials['escudo-2']}
            position={[0, 0, -1.08]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane002_five_0.geometry}
            material={materials.five}
            position={[61.853, 307.492, 35.171]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={100}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/html5_logo.glb')

export default HtmlLogo

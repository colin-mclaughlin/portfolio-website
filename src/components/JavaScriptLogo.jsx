import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

const JavaScriptLogo = (props) => {
  const { nodes, materials } = useGLTF('/models/JavaScriptLogo.glb')
  const logoRef = useRef()

  useFrame(() => {
    if (logoRef.current) {
      logoRef.current.rotation.y += 0.015 // spin speed
    }
  })

  return (
    <group ref = {logoRef} {...props} dispose={null}>
      <group position={[0.864, -0.5, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_22.geometry}
          material={materials.JAVASCRIPT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_23.geometry}
          material={materials.BORDAS_CROMADO}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/JavaScriptLogo.glb')

export default JavaScriptLogo
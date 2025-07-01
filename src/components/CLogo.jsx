import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const CLogo = (props) => {

  const logoRef = useRef()
  const { nodes, materials } = useGLTF('/models/c.glb')

  useFrame(() => {
    if (logoRef.current) {
      logoRef.current.rotation.y += 0.015 // spin speed
    }
  })

  return (
    <group ref={logoRef} {...props} dispose={null}>
      <group scale={0.00025}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['C++_C++_0'].geometry}
          material={materials.material}
          position={[0, 0, 199.569]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/c.glb')

export default CLogo
import { useFrame } from '@react-three/fiber' 
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const PythonLogo = (props) => {
  const { nodes, materials } = useGLTF('/models/PythonLogo2.glb')
  const logoRef = useRef()

  useFrame(() => {
    if (logoRef.current) {
      logoRef.current.rotation.y += 0.015
    }
  })

  return (
    <group ref={logoRef} {...props} dispose={null}>
      <group position={[0, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_37.geometry}
          material={materials.PYTHON_AMARELO}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_38.geometry}
          material={materials.PYTHON_AZUL}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_39.geometry}
          material={materials.BORDAS_CROMADO}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/PythonLogo2.glb')

export default PythonLogo

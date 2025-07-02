import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Earth = (props) => {
  const { nodes, materials } = useGLTF('/models/earth.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.earth4_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.earth4_lambert1_0.geometry}
        material={materials.lambert1}
      />
    </group>
  )
}

useGLTF.preload('/models/earth.glb')

export default Earth;
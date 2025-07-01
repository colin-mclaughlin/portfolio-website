import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Float } from '@react-three/drei';

const Mouse = (props) => {
  const { nodes, materials } = useGLTF('/models/mouse.glb')
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
        <group {...props} dispose={null} position={[8,-8,0]}>
        <group rotation={[0, 0.5, 0]} scale={0.7}>
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_2.geometry}
            material={materials.kabel}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_3.geometry}
            material={materials.mouse_texture}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials.material}
            />
        </group>
        </group>
    </Float>
  )
}

useGLTF.preload('/models/mouse.glb')

export default Mouse
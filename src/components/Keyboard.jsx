import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Float } from '@react-three/drei';

const Keyboard = (props) => {
  const { nodes, materials } = useGLTF('/models/keyboard2.glb')
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
        <group {...props} dispose={null} scale = {0.175} position = {[-6,-6,0]} rotation = {[0.7,-0.2,-0.3]}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={0.085}>
            <mesh
            castShadow
            receiveShadow
            geometry={nodes['Plane004_13_-_Default_0'].geometry}
            material={materials['13_-_Default']}
            position={[7.95, 2.951, 2.749]}
            />
        </group>
        </group>
    </Float>
  )
}

useGLTF.preload('/models/keyboard2.glb')

export default Keyboard
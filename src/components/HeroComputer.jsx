import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Float } from '@react-three/drei';
import { useTexture } from '@react-three/drei';

const HeroComputer = (props) => {
  const { nodes, materials } = useGLTF('/models/hero_computer4.glb')

  const screenTexture = useTexture('/textures/hero_computer_txt1.png');

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
        <group {...props} dispose={null} position={[0,0,0]}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={0.5}>
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_Case_0.geometry}
            material={materials.Case}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_RenderMonitor_0.geometry}
            >
            <meshStandardMaterial map={screenTexture} toneMapped={false} />
            </mesh>
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_USB_0.geometry}
            material={materials.material}
            />
        </group>
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Button_Button_Material_0.geometry}
            material={materials.Button_Material}
            position={[-695.83, -497.371, 28.549]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Button_two_ButtonTwoMaterial_0.geometry}
            material={materials.ButtonTwoMaterial}
            position={[-740.479, -496.832, 27.902]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[20, 10, 8]}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Button_two001_ButtonTwoMaterial001_0.geometry}
            material={materials['ButtonTwoMaterial.001']}
            position={[-792.221, -496.832, 27.902]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[20, 10, 8]}
        />
        </group>
    </Float>
  )
}

useGLTF.preload('/models/hero_computer4.glb')

export default HeroComputer
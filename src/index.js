// @see https://threejs.org/docs/#api/en/objects/Line
import React, { useMemo, useCallback } from 'react'
import * as THREE from 'three'
import ReactDOM from 'react-dom'
import { Canvas, extend, useThree, useResource } from 'react-three-fiber'
import { DragControls } from 'three/examples/jsm/controls/DragControls'
import './styles.css'

extend({ DragControls })

function Scene() {
  const { camera, gl } = useThree()
  const [ref, object] = useResource()
  const points = useMemo(() => [new THREE.Vector3(-10, 0, 0), new THREE.Vector3(0, 10, 0), new THREE.Vector3(10, 0, 0)], [])
  const onUpdate = useCallback(self => self.setFromPoints(points), [points])
  return (
    <>
      <line position={[0, -2.5, -10]} ref={ref}>
        <bufferGeometry attach="geometry" onUpdate={onUpdate} />
        <lineBasicMaterial attach="material" color={'#9c88ff'} linewidth={10} linecap={'round'} linejoin={'round'} />
      </line>
      <dragControls args={[[object], camera, gl.domElement]} />
    </>
  )
}

ReactDOM.render(
  <Canvas>
    <pointLight position={[0, 0, 3]} color="#f7f3ce" intensity={0.1} />
    <ambientLight color="#fff" intensity={0.85} />
    <Scene />
  </Canvas>,
  document.getElementById('root')
)

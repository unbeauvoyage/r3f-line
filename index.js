import React from 'react'
import * as THREE from 'three'
import ReactDOM from 'react-dom'
import { Canvas, extend, useThree } from 'react-three-fiber'
import { DragControls } from 'three/examples/jsm/controls/DragControls'
import './styles.css'

extend({ DragControls })

const ex = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0xff00ff }))

const Scene = () => {
  const {
    camera,
    gl: { domElement }
  } = useThree()

  return (
    <>
      <primitive object={ex} />
      <dragControls args={[[ex], camera, domElement]} />
    </>
  )
}

ReactDOM.render(
  <Canvas>
    <Scene />
  </Canvas>,
  document.getElementById('root')
)

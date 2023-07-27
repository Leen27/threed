<script setup lang="ts">
import { onMounted, ref } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import Car from './Car'

const viewRef = ref(null)

onMounted(() => {
  init()
})

function initScene() {
  const scene = new THREE.Scene()

  const renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)

  const axesHelper = new THREE.AxesHelper(5)
  scene.add(axesHelper)

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.set(0, 20, 100)

  const controls = new OrbitControls(camera, renderer.domElement)
  controls.autoRotate = true
  controls.update()

  return {
    camera,
    scene,
    renderer,
    controls
  }
}

function init() {
  const { scene, camera, renderer, controls } = initScene()
  initObject(scene)
  update(scene, camera, renderer, controls)
}

function initObject(scene: THREE.Scene) {
  const geometry = new THREE.PlaneGeometry(10, 10, 6, 6)
  const material = new THREE.MeshBasicMaterial({ color: 0x11aa33, side: THREE.DoubleSide })
  const plane = new THREE.Mesh(geometry, material)
  plane.rotateX(Math.PI / 2)
  plane.position.set(0, -0.001, 0)
  scene.add(plane)

  const car = new Car()
  car.mesh.position.set(0, 0.5, 0)
  car.render(scene)
}

function update(
  scene: THREE.Scene,
  camera: THREE.Camera,
  renderer: THREE.Renderer,
  controls: OrbitControls
) {
  function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
    controls.update()
  }

  animate()
}
</script>

<template>
  <div id="viewRef"></div>
  <slot v></slot>
</template>

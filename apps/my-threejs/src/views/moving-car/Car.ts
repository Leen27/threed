import * as THREE from 'three'

export default class Car {
  mesh: THREE.Mesh
  constructor() {
    this.mesh = this._factor()
  }

  _factor() {
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: 0xffff00, side: THREE.DoubleSide })
    const CarMesh = new THREE.Mesh(geometry, material)
    return CarMesh
  }

  render(scene: THREE.Scene) {
    scene.add(this.mesh)
  }
}

import Matrix4 from "@my-threejs/core/Matrix4"
import Vector3 from "@my-threejs/core/Vector3"

export default class Camera extends Vector3 {
	up: Vector3
	target: Vector3
	zoom: number
	focus: number
	roll: number
	
	matrix: Matrix4

	constructor(x: number, y: number, z: number)
	{
		super(x, y, z);
		this.up = new Vector3( 0, 1, 0 );
		this.target = new Vector3( 0, 0, 0 );
		this.zoom = 3;
		this.focus = 500;
		this.roll = 0;
		
		this.matrix = new Matrix4();
	}

	updateMatrix()
	{
		this.matrix.lookAt( this, this.target, this.up );
	}

	toString()
	{
		return 'Camera ( ' + this.x + ', ' + this.y + ', ' + this.z + ' )';
	}
}
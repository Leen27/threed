import Matrix4 from "@/core/Matrix4"
import Vector3 from "@/core/Vector3"

export default class Object3D {
	position: Vector3
	rotation: Vector3
	scale: Vector3

	matrix: Matrix4
	screen: Vector3

	doubleSided: boolean

	constructor()
	{
		this.position = new Vector3(0, 0, 0);
		this.rotation = new Vector3(0, 0, 0);
		this.scale = new Vector3(1, 1, 1);

		this.matrix = new Matrix4();
		this.screen = new Vector3(0, 0, 0);		

		this.doubleSided = false
	}

	updateMatrix()
	{
		this.matrix.identity();

		this.matrix.multiplySelf( Matrix4.translationMatrix( this.position.x, this.position.y, this.position.z) );
		this.matrix.multiplySelf( Matrix4.rotationMatrix( this.rotation.x, this.rotation.y, this.rotation.z ) );		
		this.matrix.multiplySelf( Matrix4.scaleMatrix( this.scale.x, this.scale.y, this.scale.z ) );
	}
}

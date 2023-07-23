import ColorMaterial from "@my-threejs/materials/ColorMaterial";
import Object3D from "./Object3D";

export default class Mesh extends Object3D {
	size: number = 1
	material: ColorMaterial

	constructor( material: ColorMaterial )
	{
		super();
		this.material = material;
	}
}
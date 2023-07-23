import Geometry from "@my-threejs/core/Geometry";
import ColorMaterial from "@my-threejs/materials/ColorMaterial";
import Object3D from "./Object3D";

export default class Mesh extends Object3D {
	geometry: Geometry
	material: ColorMaterial
	
	constructor( geometry: Geometry, material: ColorMaterial )
	{
		super();
		this.geometry = geometry;
		this.material = material;
	}
}

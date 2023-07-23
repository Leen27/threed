import Geometry from "@/core/Geometry";
import ColorMaterial from "@/materials/ColorMaterial";
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

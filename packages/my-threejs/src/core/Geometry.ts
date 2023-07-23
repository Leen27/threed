import Vector3 from "./Vector3";
import Vertex from "./Vertex";

export default class Geometry {
	vertices: Vertex[]
	faces: Vector3[]

	constructor()
	{
		this.vertices = new Array();
		this.faces = new Array();
	}
}

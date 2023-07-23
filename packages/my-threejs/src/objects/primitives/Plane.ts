import Face4 from "@my-threejs/core/Face4";
import Geometry from "@my-threejs/core/Geometry";
import Vertex from "@my-threejs/core/Vertex";

export default class Plane extends Geometry {
	constructor( width: number, height: number )
	{
		super();
		
		var width_half = width / 2;
		var height_half = height / 2;
		
		this.vertices.push( new Vertex(-width_half,  height_half, 0) );
		this.vertices.push( new Vertex( width_half,  height_half, 0) );
		this.vertices.push( new Vertex( width_half, -height_half, 0) );
		this.vertices.push( new Vertex(-width_half, -height_half, 0) );
		
		this.faces.push( new Face4( this.vertices[0], this.vertices[1], this.vertices[2], this.vertices[3] ) );
	}
}

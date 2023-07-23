import ColorMaterial from "@/materials/ColorMaterial";
import Color from "./Color";
import Vector3 from "./Vector3";
import Vertex from "./Vertex";

export default class Face3 extends Vector3 {
	a: Vertex
    b: Vertex
    c: Vertex
    screen: Vector3
	uv: number[][]
	normal: Vector3
	color: Color
	material: ColorMaterial

    constructor(a: Vertex, b: Vertex, c: Vertex, uv?: number[][], normal?: Vector3, color?: Color)
	{
		super((a.x + b.x + c.x) / 3, (a.y + b.y + c.y) / 3, (a.z + b.z + c.z) / 3);	
	
		this.a = a;
		this.b = b;
		this.c = c;

		this.screen = new Vector3();
		
		this.uv = uv ? uv : [ [0, 0], [0, 0], [0, 0] ];
		this.normal = normal ? normal : new Vector3();

		this.color = color ? color : new Color();
		this.material = new ColorMaterial(this.color.hex)
	}

	toString()
	{
		return 'Face3 ( ' + this.a + ', ' + this.b + ', ' + this.c + ' )';
	}
}
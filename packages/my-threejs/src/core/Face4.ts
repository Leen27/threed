import ColorMaterial from "@/materials/ColorMaterial";
import Color from "./Color";
import Vector3 from "./Vector3";
import Vertex from "./Vertex";

export default class Face4 extends Vector3 {
	a: Vertex
    b: Vertex
    c: Vertex
    d: Vertex
    screen: Vector3
	normal: Vector3
	color: Color
	material: ColorMaterial

    constructor(a: Vertex, b: Vertex, c: Vertex, d: Vertex, uv?: any, normal?: any, color?: Color)
	{
		super((a.x + b.x + c.x + d.x) / 4, (a.y + b.y + c.y + d.y) / 4, (a.z + b.z + c.z + d.z) / 4);	
	
		this.a = a;
		this.b = b;
		this.c = c;
		this.d = d;
		this.normal = new Vector3();
		this.screen = new Vector3();
		this.color = color ? color : new Color();
		this.material = new ColorMaterial(this.color.hex)
	}

	toString()
	{
		return 'Face4 ( ' + this.a + ', ' + this.b + ', ' + this.c + ', ' + this.d + ' )';
	}
}
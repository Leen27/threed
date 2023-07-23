import Vector3 from "./Vector3";

export default class Vertex extends Vector3 {
    u: any
    v: any
	screen: Vector3
	normal : any
	visible: boolean

    constructor(x?: number, y?: number, z?: number) {
        super(x, y, z)
		this.screen = new Vector3();
		this.visible = false
    }

    toString()
	{
		return 'Vertex ( ' + this.x + ', ' + this.y + ', ' + this.z + ' )';
	}
}

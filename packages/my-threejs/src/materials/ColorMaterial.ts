import Color from "@my-threejs/core/Color";

export default class ColorMaterial {
	color: Color

	constructor(hex: number, opacity?: number) {
		this.color = new Color( (opacity ? (opacity * 0xff) << 24 : 0xff000000) | hex );
	}
}

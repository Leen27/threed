export default class Color {
    r: number
    g: number
    b: number
    a: number
    hex!: number
	
	styleString: string
	
	constructor( hex?: number )
	{
		this.r = 0
		this.g = 0
		this.b = 0
		this.a = 1
		this.styleString = ''
		this.setHex( hex ? hex : 0xff000000 );
	}
	
	setHex( hex: number )
	{
		this.hex = hex;
		this.updateRGBA();
		this.updateStyleString();
	}
	
	setRGBA( r: number, g: number, b: number, a: number )
	{
		this.r = r;
		this.g = g;
		this.b = b;
		this.a = a;
		
		this.updateHex();
		this.updateStyleString();
	}
	
	updateHex()
	{
		this.hex = this.a << 24 | this.r << 16 | this.g << 8 | this.b;
	}
	
	updateRGBA()
	{
		this.r = this.hex >> 16 & 0xff;
		this.g = this.hex >> 8 & 0xff;
		this.b = this.hex & 0xff;
		this.a = this.hex >> 24 & 0xff;		
	}
	
	updateStyleString()
	{
		this.styleString = 'rgba(' + this.r + ',' + this.g + ',' + this.b + ',' + (this.a / 255) + ')';		
	}
	
	toString()
	{
		return 'Color ( r: ' + this.r + ', g: ' + this.g + ', b: ' + this.b + ', a: ' + this.a + ', hex: ' + this.hex + ', style: ' + this.styleString + ' )';	
	}
}

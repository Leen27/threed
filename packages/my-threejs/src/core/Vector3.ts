export default class Vector3 {
    x: number
    y: number
    z: number

	dx: number
    dy: number
    dz: number
    
    tx: number
    ty: number
    tz: number

    ool: number
	
	constructor(x?: number, y?: number, z?: number)
	{
		this.x = x ? x : 0;
		this.y = y ? y : 0;
		this.z = z ? z : 0;

		this.dx = 0
		this.dy = 0
		this.dz = 0
		this.tx = 0
		this.ty = 0
		this.tz = 0

		this.ool = 0
	}

    copy(v: Vector3)
	{
		this.x = v.x;
		this.y = v.y;
		this.z = v.z;
	}
	
	addSelf(v: Vector3)
	{
		this.x += v.x;
		this.y += v.y;
		this.z += v.z;
	}

	add(v1: Vector3, v2: Vector3)
	{
		this.x = v1.x + v2.x;
		this.y = v1.y + v2.y;
		this.z = v1.z + v2.z;
	}
	
	subSelf(v: Vector3)
	{
		this.x -= v.x;
		this.y -= v.y;
		this.z -= v.z;
	}

	sub(v1: Vector3, v2: Vector3)
	{
		this.x = v1.x - v2.x;
		this.y = v1.y - v2.y;
		this.z = v1.z - v2.z;
	}
	
	cross(v: Vector3)
	{
		this.tx = this.x;
		this.ty = this.y;
		this.tz = this.z;
		
		this.x = this.ty * v.z - this.tz * v.y;
		this.y = this.tz * v.x - this.tx * v.z;
		this.z = this.tx * v.y - this.ty * v.x;
	}
	
	multiply(s: number)
	{
		this.x *= s;
		this.y *= s;
		this.z *= s;
	}
	
	distanceTo(v: Vector3)
	{
		this.dx = this.x - v.x;
		this.dy = this.y - v.y;
		this.dz = this.z - v.z;
		
		return Math.sqrt(this.dx * this.dx + this.dy * this.dy + this.dz * this.dz);
	}
	
	distanceToSquared(v: Vector3)
	{
		this.dx = this.x - v.x;
		this.dy = this.y - v.y;
		this.dz = this.z - v.z;
		
		return this.dx * this.dx + this.dy * this.dy + this.dz * this.dz;
	}
	
	length()
	{
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
	}
	
	lengthSq()
	{
		return this.x * this.x + this.y * this.y + this.z * this.z;
	}
	
	negate()
	{
		this.x = -this.x;
		this.y = -this.y;
		this.z = -this.z;
	}
	
	normalize()
	{
		if (this.length() > 0)
			this.ool = 1.0 / this.length();
		else
			this.ool = 0;
			
		this.x *= this.ool;
		this.y *= this.ool;
		this.z *= this.ool;
		return this;
	}
	
	dot(v: Vector3)
	{
		return this.x * v.x + this.y * v.y + this.z * v.z;
	}
	
	clone()
	{
		return new Vector3(this.x, this.y, this.z);
	}
	
	toString()
	{
		return 'Vector3 (' + this.x + ', ' + this.y + ', ' + this.z + ')';
	}

    static add = function(a: Vector3, b: Vector3)
    {
        return new Vector3( a.x + b.x, a.y + b.y, a.z + b.z );
    }

    static sub = function(a: Vector3, b: Vector3)
    {
        return new Vector3( a.x - b.x, a.y - b.y, a.z - b.z );
    }		

    static multiply = function(a: Vector3, s: number)
    {
        return new Vector3( a.x * s, a.y * s, a.z * s );
    }

    static cross = function(a: Vector3, b: Vector3)
    {
        return new Vector3( a.y * b.z - a.z * b.y, a.z * b.x - a.x * b.z, a.x * b.y - a.y * b.x );
    }

    static dot = function(a: Vector3, b: Vector3)
    {
        return a.x * b.x + a.y * b.y + a.z * b.z;
    }

}
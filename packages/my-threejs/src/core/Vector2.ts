export default class Vector2 {
    x: number
    y: number
    constructor(x: number, y: number) {
        this.x = x ? x : 0
        this.y = y ? y : 0
    }

    copy(v: Vector2) {
        this.x = v.x
        this.y = v.y
    }

    addSelf(v: Vector2) {
        this.x += v.x
        this.y += v.y
    }

    add(v1: Vector2, v2: Vector2) {
        this.x = v1.x + v2.x
        this.y = v1.y + v2.y
    }

    static add = function(a: Vector2, b: Vector2)
    {
        return new Vector2( a.x + b.x, a.y + b.y );
    }
    
    static sub = function(a: Vector2, b: Vector2)
    {
        return new Vector2( a.x - b.x, a.y - b.y );
    }		
    
    static multiply = function(a: Vector2, s: number)
    {
        return new Vector2( a.x * s, a.y * s );
    }
    
    subSelf(v: Vector2) {
        this.x -= v.x
        this.y -= v.y
    }

    sub(v1: Vector2, v2: Vector2)
	{
		this.x = v1.x - v2.x;
		this.y = v1.y - v2.y;
	}

	multiply(s: number)
	{
		this.x *= s;
		this.y *= s;
	}
	
	unit()
	{
		this.multiply(1 / this.length());
	}
	
	expand(v1: Vector2, v2: Vector2)
	{
        this.sub(v2, v1)
		this.unit()
		v2.addSelf(this)
	}

	length()
	{
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
	
	lengthSq()
	{
		return this.x * this.x + this.y * this.y;
	}
	
	negate()
	{
		this.x = -this.x;
		this.y = -this.y;
	}
	
	clone()
	{
		return new Vector2(this.x, this.y);
	}
	
	toString()
	{
		return 'Vector2 (' + this.x + ', ' + this.y + ')';
	}
}
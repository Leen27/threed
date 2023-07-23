export default class Scene {
	objects: any[]

	constructor()
	{
		this.objects = new Array();
	}

	add( object: any )
	{
		this.objects.push( object );
	}

	remove( object: any )
	{
		for(var i = 0; i < this.objects.length; i++)
			if(object === this.objects[i])
				alert("yay");
	}

	toString()
	{
		return 'Scene ( ' + this.objects + ' )';
	}
}

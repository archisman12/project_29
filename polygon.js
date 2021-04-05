class Polygon
{
	constructor(x,y,radius)
	{
		var options={
			isStatic:false,
			restitution:0,
			friction:1,
			density:3
			}
		this.x=x;
		this.y=y;
		this.r=radius
		this.image=loadImage("polygon.png");
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var polygonpos=this.body.position;		
			push()
			translate(polygonpos.x, polygonpos.y);
			fill(255,0,255)
			imageMode(CENTER);
			ellipseMode(RADIUS)
			image(this.image, 0,0,this.r*2, this.r*2)
			pop()
			
	}

}
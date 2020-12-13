class paper 
    {
        constructor (x,y,r)
{
     var options={
         isstatic:false,
         restitution:0.3,
         friction:0.5,
         density:0.12
     }
this.x=x;
this.y=y;
this.r=r       
this.body=Bodies.circle(this.x,this.y,this.radius,options);
World.add(world,this.body)
    }
display(){

    paperpos= this.body.position;

    Push()
    translate(paperpos.x,paperpos.y);
    ellipseMode(RADIUS)
    strokeweight(3);
    fill("green");
    ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
pop()
}
    }

class Paper{

    constructor( y,x,angle){
        var options =  {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2,

        }
        this.x=x;
        this.y=y;
        this.angle=angle
        this.body=Bodies.circle(this.x,this.y,this.PI/2,options)
        AudioWorkletNode.add(world, this.body);

    }

    display()
    {
        var paperpos = this.body.position;
        push()
        translate(paperpos.x,paperpos.y);
        rectMode(CENTER)
        strokeWeight(3)
        fill(255,0,255)
        ellipse(0,0,this.angle,this.angle);
        pop()

    }



}
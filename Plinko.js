class Plinko{
    constructor(x,y){
        var options = {
           
          isStatic : true
        }
        this.body = Bodies.rectangle(x,y,30, 30,options);
        this.image = loadImage("plinko.png")
        World.add(world,this.body)
        this.width = 30
        this.height = 30
    }
    display(){
        var pos = this.body.position
        
        fill("white")
        //ellipseMode(CENTER)
       // ellipse(pos.x,pos.y,this.radius,this.radius)
        imageMode(CENTER);
        image(this.image, pos.x, pos.y,30, 30);
    }
}
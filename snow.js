class Snow{
    constructor(x,y,r){
        var options = {
        }

        this.sn = Bodies.circle(x,y,r,options);
        this.r = r;
        World.add(world,this.sn);
        this.snowImg = loadImage("snow4.webp");
        
    }

      display(){
        var pos = this.sn.position;
        var angle = this.sn.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.snowImg,0,0,50,50);
        pop();

    }
}
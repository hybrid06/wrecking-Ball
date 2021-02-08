class Box {
  constructor(x, y, width, height){
    var options={
        isStatic:false,
        restitution:0.5
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width=width
    this.height=height
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    rectMode(CENTER);
    
    if(this.body.speed<5){
      var pos =this.body.position;
    var angle = this.body.angle;
    rectMode(CENTER);
      push()

      translate(pos.x,pos.y)
    rotate(angle)
    fill("cyan");
    rect(0,0, this.width, this.height);
    pop()

    }
    else{
      World.remove(world,this.body);
      push()
      
      this.visibility=this.visibility-5;
      tint(255,this.visibility);
      
    }
    
    pop()
    
  }

}

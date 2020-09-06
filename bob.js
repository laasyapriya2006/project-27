class Bob {
    constructor(x,y,radius) {
      var options = {
        'isStatic': true,
        'restitution':0.8,
        'friction':1,
        'density':1.2   
      };
      this.body = Bodies.circle(x, y,radius-20/2,options);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      push();
      var pos =this.body.position;
      fill("white");
      circle(pos.x,pos.y,this.radius);
      pop();
     
    }
  };
  
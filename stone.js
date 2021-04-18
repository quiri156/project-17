
 class stone {
    constructor(x, y) {
      var options = {
        restitution:0.8,
        friction:0.9,
         density:12 
      };
      this.body = Bodies.rectangle(x, y, 100, 150, options);
      this.width = 50;
      this.height = 40;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
     // rotate(angle);
      strokeWeight(3);
      stroke('black')
      fill('pink')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
class iron {
    constructor(x, y) {
      var options = {
        restitution:0.8,
        friction:3,
         density:30 
      };
      this.body = Bodies.rectangle(x, y, 300, 550, options);
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
      stroke('green')
      fill('yellow')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
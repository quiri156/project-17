const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
     stone = new stone(150,100)
     Iron = new iron(600,450) 
     rubber = new Rubber(360,500,6) 

}

function draw(){
    background("lightBlue");
    Engine.update(engine);
 Rubber.display ();
        plane.display();
    hammer.display();
 stone.display();
  iron.display();   
 
}
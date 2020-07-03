
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var drops = [];
var umbrella1;
function setup() {
  var canvas = createCanvas(640, 360);
  engine = Engine.create();
    world = engine.world;
  for (var i = 0; i < 500; i++) {
    drops[i] = new Drop();
  }

  umbrella1 = new Umbrella(300,100)
}

function draw() {
  background("Orange");
  Engine.update(engine);
  for (var i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].show();
  }
umbrella1.display();
}
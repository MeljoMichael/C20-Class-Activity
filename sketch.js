// creating constence
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

// create varibles
let engine;
let world;
var ball;
var ground;
var rock;
var wall;

function setup() {
  createCanvas(400,400);
  
  //create Physics Engine and Game World
  engine = Engine.create();
  world = engine.world;
  
  var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
  var ground_options ={
    isStatic: true
  };
  
  // create rectangular body for the ground
  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  //create circular body for the ball
  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  var rock_options = {
    restitution: 0.8,
    frictionAir: 0.01
  }
  // create circular body for the rock
  rock = Bodies.circle(300,10,20,rock_options);
  World.add(world,rock);

  //create rectangular body for the wall
  wall = Bodies.rectangle(300,200,200,20,ground_options);
  World.add(world,wall);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  //set the background
  background(51);

  //Update the Physics Engine
  Engine.update(engine);
  
  //display ball using ellipse 
  ellipse(ball.position.x,ball.position.y,20);
  
  //display ground using rect
  rect(ground.position.x,ground.position.y,400,20);
 
  //display rock using ellipse
  ellipse(rock.position.x,rock.position.y,20);

  //display wall using rect
  rect(wall.position.x,wall.position.y,200,20);
}


var man, manimage
var rain;
var engine, world;

function preload(){
    manimage=loadImage("walking_1.png");
    const Engine = Matter.Engine;
    const World = Matter.World;
    const Bodies = Matter.Bodies;
    const Body = Matter.Body;
}

function setup(){
    createCanvas(300,600)
    
    man=createSprite(150,500,0,0)
    man.addImage(manimage)
    man.scale=0.3   
   
    engine = Engine.create();
    world = engine.world;
    packageBody = Bodies.circle(250,500,10,10);
	World.add(world, packageBody);
}

function draw(){
    background(0)
    man.display();
    rain.display();
    for(var i=0;i>100;i++){
        rain.push()
    }
}   


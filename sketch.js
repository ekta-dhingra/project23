var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 100, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 boxLeftSprite=createSprite(300,600,20,100);
	boxLeftSprite.shapeColor=color(255,0,0);

	boxLeftBody=Bodies.rectangle(300,600,20,100,{isStatic:true})
	World.add(world,boxLeftBody);

	
	boxRightSprite=createSprite(500,600,20,100);
	boxRightSprite.shapeColor=color(255,0,0);

	boxRightBody=Bodies.rectangle(500,600,20,100,{isStatic:true})
	World.add(world,boxRightBody);

	boxBottomSprite=createSprite(400,640,200,30);
	boxBottomSprite.shapeColor=color(255,0,0);

	boxBottomBody=Bodies.rectangle(400,650,200,30,{isStatic:true})
	World.add(world,boxBottomBody);

	
	packageBody = Bodies.rectangle(width/2 , 200 , 5 ,5, {restitution:1.0, isStatic:true});
	World.add(world, packageBody);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
packageSprite.x= packageBody.position.x ;
packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {

	if (keyCode === LEFT_ARROW) {

		helicopterSprite.x=helicopterSprite.x-20;    
		translation={x:-40,y:0}
		Matter.Body.translate(packageBody, translation)
	
	
	  } else if (keyCode === RIGHT_ARROW) {
		helicopterSprite.x=helicopterSprite.x+20;
		translation={x:40,y:0}
		Matter.Body.translate(packageBody, translation)
	  }
 else if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody,false);
  }
}




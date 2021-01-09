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
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	boxBottomSprite = createSprite(width/2,height-45,200,20);
	boxBottomSprite.shapeColor = "red";

	boxLeftSprite = createSprite((width/2)-100,height-95,20,100);
	boxLeftSprite.shapeColor = "red";

	boxRightSprite = createSprite((width/2)+100,height-95,20,100);
	boxRightSprite.shapeColor = "red";



	engine = Engine.create();
	world = engine.world;
	
  var options={
    isStatic : true
  }
	packageBody = Bodies.rectangle(width/2 , 200 ,10,10, options);
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 630, width, 10 ,       {isStatic:true} );
 	World.add(world, ground);

	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  //ld1.display();
  
  

  drawSprites();
 
}

function keyPressed() {
 if (keyDown(DOWN_ARROW)) {
   Matter.Body.setStatic(packageBody,false);
 }
}


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Events = Matter.Events;
const Constraint = Matter.Constraint;

var ground
var div1, div2, div3, div4, div5, div6, div7, div8, div9, div10

var particle 
var plinkos = [];
var gameState = "serve"

var backgroundIMG, plinkoIMG
var slider
var score = 0;
var turn = 0;
var gamer = "play"
var line

var gameStates = "play"


function preload()
{
  backgroundIMG = loadImage("bg.jfif")
  plinkoIMG = loadImage("plinko.jpg")
}

function setup() {
	createCanvas(950, 800);
   
  //image (this.smokeImage, this.trajectory[i][0], this.trajectory[i][1] )
	engine = Engine.create();
  world = engine.world;
  
  for(var j = 40; j<=930; j=j+80){
      plinkos.push(new Plinko(j, 50))
  }

  for(var j = 15; j<=940; j=j+80){
    plinkos.push(new Plinko(j, 150))
}

for(var j = 40; j<=930; j=j+80){
  plinkos.push(new Plinko(j, 250))
}

for(var j = 15; j<=940; j=j+80){
plinkos.push(new Plinko(j, 350))
}

for(var j = 40; j<=930; j=j+80){
  plinkos.push(new Plinko(j, 450))
}


var line = createSprite(475, 480, 950, 10)




  ground = new Ground(475, 790, 950, 20)
 

  div1 = new Division(5, 650, 40, 300)
  div2 = new Division(100, 650, 40, 300)
  div3 = new Division(200, 650, 40, 300)
  div4 = new Division(300, 650, 40, 300)
  div5 = new Division(400, 650, 40, 300)
  div6 = new Division(500, 650, 40, 300)
  div7 = new Division(600, 650, 40, 300)
  div8 = new Division(700, 650, 40, 300)
  div9 = new Division(820, 650, 40, 300)
  div10 = new Division(940, 650, 40, 300)

  
 slider = createSlider(0, 100, 20, 10)

  


  

  
  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  
 background(plinkoIMG);

 if(frameCount>=100){
  background(backgroundIMG);
  gameState= "play"
 }
  
  drawSprites();

 
  fill("black")
  textSize(24)
  text("Score: " + score, 50, 30)
  text("500", 30, 600)
  text("500", 125, 600)
  text("500", 225, 600)
  text("500", 325, 600)
  text("100", 425, 600)
  text("100", 525, 600)
  text("100", 625, 600)
  text("200", 740, 600)
  text("200", 860, 600)
  
  
/*
if(frameCount % 60 === 0 && frameCount>=100){
  for (var m = 0; m <= slider.value(); m++) {
    particles.push(new Particle(random(width / 2 - 50, width / 2 + 50), 0, 8))
  }

}
*/

  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }
/*
  for (var k = 0; k < particles.length; k++) {
     
    particles[k].display();
    
  }
*/
  

 

  

  if(gameState === "play"){
ground.display();
div1.display();
div2.display();
div3.display();
div4.display();
div5.display();
div6.display();
div7.display();
div8.display();
div9.display();
div10.display();
  }
//plinkos.display();


 
 
  
  if(particle!=null)
   {
     particle.display();

     if(particle.body.position.x>15 && particle.body.position.x<315 && particle.body.position.y>760){
      score = score + 500;
      particle = null;
      console.log(score);
         if(turn===5)
         {
          gameStates = "end"
         }
       }
      }
    
  
 
  
 //mousePressed();

  }


  function mousePressed()
{
  if(gameStates!="end"){
    turn++;
    particle = new Particle(mouseX,26,10);
  }

} 
 















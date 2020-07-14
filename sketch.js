var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;

function setup() {
  createCanvas(800,800);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(0); 
  for(var j = 40; j <=width; j=j+50)
  {

    plinkos.push(new plinko(j,75));
  } 

  for (var j = 15; j <=width-10; j=j+50) {
  
    plinkos.push(new plinko(j,175));
  }

  for (var j = 0; j < particles.length; j++)
  {

    particles[j].display();
  }
  for (var k = 0; k < divisions.length; k++){

    divisions[k].display();
  }
  drawSprites();
}

for (var k = 0; k <=width; k=k + 80){
  divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
}
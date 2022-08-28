var box
function setup() {
  createCanvas(400,400);
box = createSprite(100,100,50,50)
}

function draw() 
{
  background(" blue");

if(keyDown("right")){
  box.x= box.x+4
}

if(keyDown("left")){
  box.x= box.x-4
}

if(keyDown("up")){
  box.y= box.y-4
}

if(keyDown("down")){
  box.y= box.y+4
}



drawSprites ();
}





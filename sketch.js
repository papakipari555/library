var  movingrect , fixedrect, thirdrect;




function setup() {
 
  createCanvas(800,400);
  fixedrect = createSprite(300,200,50,50);
  movingrect = createSprite(400, 200, 50, 50);
  thirdrect = createSprite(100,100,50,50)
   movingrect.shapeColor = "pink"
   fixedrect.shapeColor = "pink"
  thirdrect,shapeColor = "pink"
  
}

function draw() {
  background(255,255,255);  
  movingrect.x=mouseX
  movingrect.y=mouseY
  

  if(touching(movingrect , fixedrect)){
movingrect.shapeColor="yellow";
fixedrect.shapeColor="red";
  }
else if(touching(movingrect , thirdrect)){
movingrect.shapeColor = "green";
thirdrect.shapeColor = "orange";


}

  else{
movingrect.shapeColor="pink";
fixedrect.shapeColor="pink";
thirdrect.shapeColor="pink";

  }
  drawSprites();
}


function setup(){
  createCanvas(600, 600);
  background("pink")
}

function draw(){
  stroke("black");
  fill("blue");
  
  // console.log(mousePressed)
  
  if (mouseIsPressed){
    rect(mouseX, mouseY, 20, 35)
  }
}

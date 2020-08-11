let chicken;
let size = 50;
let big = false;
function preload(){
  chicken = loadImage("chicken.jpg")
}
function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(0, 0, 220);
  image(chicken, mouseX, mouseY, size, size);
  if(big){
    size = 200;
  }
}
function mousePressed(){
  big = !big;
}
function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(imageRoad);
  showActor();
  showCars(400,45);
  moveCars();
  moveActor(); 
  turnBackToInicialPosition ();
  checkColide();
}

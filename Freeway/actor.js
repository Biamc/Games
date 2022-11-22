//-----ACTOR-----//
let xActor = 100;
let yActor = 366;

let hit = false;


function showActor(){
  image(imageActor, xActor,yActor, 30, 30 )//(nome da imagem, posição x, posição y, dimenção da imagem, dimenção da imagem);
}

function moveActor(){
  if (keyIsDown(38)){
    yActor -=3;
  }
  if (keyIsDown(40)){
    yActor +=3;
  }
    if (keyIsDown(39)){
    xActor +=3;
}
  if (keyIsDown(37)){
    xActor -=3;
  }
}

function checkColide(){
  for(i = 0; i < imageCars.length; i = i + 1){
     hit = collideRectCircle(xCars[i], yCars[i], lengthCars, heigthCars, xActor, yActor, 15);
  if (hit){
    collide();
  }
  }
 
}

function collide(){
  yActor = 366;
}


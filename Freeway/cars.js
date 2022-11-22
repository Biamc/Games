//====CODE CARS=====//
let xCars = [600, 600, 600, 600, 600, 600];
let yCars = [45, 96, 150, 210, 263, 318];
let speedCars = [8, 7, 6, 3, 4, 6];
let lengthCars = 50;
let heigthCars = 40;

function showCars(){
  for(i = 0; i < imageCars.length; i = i + 1){    image(imageCars[i],xCars[i],yCars[i],50,40);
  }
}

function moveCars(){
  for( i = 0; i < xCars.length; i ++){
    xCars[i] -= speedCars[i];// mean xCar = xCar - speedCars
  } 
}

function turnBackToInicialPosition (){
  for(i = 0; i < imageCars.length; i ++/* i = i +1*/){
    if (passAllScreen(xCars[i])){
    xCars[i] = 600;
    }   
  }
}

function passAllScreen (xCars){
  return xCars < -50;
}
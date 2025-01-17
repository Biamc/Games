//variaveris da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametroBolinha = 30;
let raio = diametroBolinha / 2;

//velocidade da Bolinha
let velocidadeXBolinha = 5;
let velocidadeYBolinha = 5;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;

//variaveis da raquete
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

let colidiu = false;

//Placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

let chanceDeErrar = 0;

function preload() {
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(color(128, 0, 15));
  mostraRede();
  mostraBolinha();

  movimentaBolinha();
  verificaColisaoBorada();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaquete();
  //movimentaRaqueteOponente();
  //movimentaRaqueteOponente2()
  //verificaColisaoRaquete();
  verificaColisaoRaqueteBiblioteca(xRaquete, yRaquete);
  verificaColisaoRaqueteBiblioteca(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
  bolinhaNaoFicaPresa();
}

function mostraBolinha() {
  fill(color(0));
  circle(xBolinha, yBolinha, diametroBolinha);
}

function mostraRede() {
  fill(color(225));
  rect(300, 0, 5, 400);
}

function movimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorada() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(x, y) {
  fill(color(9, 170, 95));
  rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentaRaquete() {
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}

function movimentaRaqueteOponente2() {
  if (keyIsDown(87)) {
    yRaqueteOponente -= 10;
  }
  if (keyIsDown(83)) {
    yRaqueteOponente += 10;
  }
}

function verificaColisaoRaquete() {
  if (
    xBolinha - raio < xRaquete + raqueteComprimento &&
    yBolinha - raio < yRaquete + raqueteAltura &&
    yBolinha + raio > yRaquete
  ) {
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function verificaColisaoRaqueteBiblioteca(x, y) {
  colidiu = collideRectCircle(
    x,y,raqueteComprimento,raqueteAltura,xBolinha,yBolinha,raio);
  if (colidiu) {
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function movimentaRaqueteOponente() {
  velocidadeYOponente =
    yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;
  yRaqueteOponente += velocidadeYOponente + chanceDeErrar;
  calculaChanceDeErrar();
}

function calculaChanceDeErrar() {
  if (pontosDoOponente >= meusPontos) {
    chanceDeErrar += 15;
  }
  if (chanceDeErrar >= 39) {
    chanceDeErrar = 40;
  } else {
    chanceDeErrar -= 1;
    if (chanceDeErrar <= 35) {
      chanceDeErrar = 35;
    }
  }
}

function incluiPlacar() {
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(0, 214, 104));
  rect(150, 10, 40, 20, 8);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(0, 214, 104));
  rect(450, 10, 40, 20, 8);
  fill(255);
  text(pontosDoOponente, 470, 26);
}

function marcaPonto() {
  if (xBolinha > 585) {
    meusPontos += 1;
    ponto.play();
  }
  if (xBolinha < 15) {
    pontosDoOponente += 1;
    ponto.play();
  }
}

function bolinhaNaoFicaPresa() {
  if (xBolinha - raio < 0) {
    xBolinha = 31;
  }
}

let xBola = 100;
let yBola = 200;
let diametro = 20;
let raio = diametro / 2;

//oponente
let xRaqueteBot = 585;
let yRaqueteBot = 150;

//velocidade
let velocidadeXBola = 6;
let velocidadeYBola = 6;

//raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//placar
let meusPontos = 0;
let pontosDoBot = 0;


//sons
let raquetada;
let ponto;
let trilha;

let colidiu = false;

function setup() {
  createCanvas(600, 400);
    trilha.loop();
}

function draw() {
    background(0);
    mostraBola();
    movimentaBola();
    verificaColisaoBorda();
    mostraRaquete(xRaquete, yRaquete);
    movimentaMinhaRaquete();
    verificaColisaoRaquete(xRaquete, yRaquete);
    verificaColisaoRaquete(xRaqueteBot, yRaqueteBot);
    mostraRaquete(xRaqueteBot, yRaqueteBot);
    movimentaRaqueteBot();
    incluiPlacar() 
    marcaPonto();
}
function mostraBola() {
  circle(xBola, yBola, diametro);
}

function movimentaBola() {
  xBola += velocidadeXBola;
  yBola += velocidadeYBola;
}

function verificaColisaoBorda() {
  if (xBola + raio > width || xBola - raio < 0) {
    velocidadeXBola *= -1;
  }
  if (yBola + raio > height || yBola - raio < 0) {
    velocidadeYBola *= -1;
  }
}

function mostraRaquete(x,y) {
    rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete() {
  if(keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}

function verificaColisaoRaquete() {
  if (xBola - raio < xRaquete + raqueteComprimento && yBola - raio < yRaquete + raqueteAltura && yBola + raio > yRaquete) {
    velocidadeXBola *= -1;
     raquetada.play();
  }
}

function verificaColisaoRaquete(x, y) {
    colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBola, yBola, raio);
    if (colidiu){
        velocidadeXBola *= -1;
        raquetada.play();
  }
}

function movimentaRaqueteBot(){
    if (keyIsDown(87)){
        yRaqueteBot -= 10;
    }
    if (keyIsDown(83)){
        yRaqueteBot += 10;
    }
}


function incluiPlacar(){
  stroke(255)
    textAlign(CENTER);
    textSize(16);
    fill(color(150,255, 0));
    rect(150, 10, 40, 20);
    fill(255);
    text(meusPontos, 170, 26);
    fill(color(150,255, 0));
    rect(450, 10, 40, 20);
    fill(255);
    text(pontosDoBot, 470, 26);


}


function marcaPonto() {
    if (xBola > 590) {
        meusPontos += 1;
        ponto.play();
    }
    if (xBola < 10) {
        pontosDoBot += 1;
        ponto.play();
    }
}


function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}


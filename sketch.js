let costas1;
let costas2;
let quieto;
let farra1;
let farra2;
let olhando;
let gameover;

let isLooking;
let nextState;
let isMessingUp;

let giz;
let grito;

const CHAIRS_Y = 460;

function changeState() {
  isLooking = !isLooking;
  if(isLooking) {
    giz.pause();
  } else {
    giz.play();
  }
  nextState = millis() + random(2500, 7000);
}

function placeStudentsImages() {
  
  if(mouseIsPressed || touches.length > 0 || keyIsPressed) {
    
    if(!isMessingUp) {
      grito.play();
      isMessingUp = true;
    }
    
    if(isLooking) {
      giz.stop();
      grito.pause();
      image(gameover, 0, 0);
      textAlign(CENTER, CENTER);
      fill("red");
      textSize(64);
      text("GAME OVER", width / 2, height / 2);
      noLoop();
    }
    
    let animationTime = millis() % 1000;
    if(animationTime > 400) {
      image(farra1, 50, CHAIRS_Y, 100, 160, 180, 100, 450, 720);
    } else {
      image(farra2, 50, CHAIRS_Y, 100, 160, 180, 100, 450, 720);
    }
    
    animationTime = millis() % 800;
    if(animationTime > 450) {
      image(farra1, 150, CHAIRS_Y, 100, 160, 180, 100, 450, 720);
    } else {
      image(farra2, 150, CHAIRS_Y, 100, 160, 180, 100, 450, 720);
    }
    
    animationTime = millis() % 900;
    if(animationTime > 450) {
      image(farra1, 250, CHAIRS_Y, 100, 160, 180, 100, 450, 720);
    } else {
      image(farra2, 250, CHAIRS_Y, 100, 160, 180, 100, 450, 720);
    }
    
  } else {
    grito.pause();
    isMessingUp = false;
  // image = imagem original
  // dx e dy = posição horizontal e vertical onde encaixo a imagem na tela
  // dw e dh = largura e alturaque quero encaixar a imagem na tela
  // sx e sy = posição horizontal e vertical onde quero começar a cortar a imagem original
  // sw e sh= largura e altura que quero cortar a imagem original
    image(quieto, 50, CHAIRS_Y, 100, 160, 180, 100, 450, 720);
    image(quieto, 150, CHAIRS_Y, 100, 160, 180, 100, 450, 720);
    image(quieto, 250, CHAIRS_Y, 100, 160, 180, 100, 450, 720);
  }
}

function placeProfessorImage() {
  if(isLooking) {
    image(olhando, 0, 0)
  } else {
    let animationTime = millis() % 1000;
    if(animationTime > 500) {
      image(costas1, 0, 0);
    } else {
      image(costas2, 0, 0);
    }
  }
}

function preload() {
  costas1 = loadImage("costas1.jpg");
  costas2 = loadImage("costas2.jpg");
  quieto = loadImage("quieto.jpg");
  farra1 = loadImage("farra1.jpg");
  farra2 = loadImage("farra2.jpg");
  olhando = loadImage("olhando.jpg");
  gameover = loadImage("gameover.jpg");
  
  giz = loadSound("giz.mp3");
  giz.setLoop(true);
  grito = loadSound("grito.mp3");
  grito.setLoop(true);
}

function setup() {
  createCanvas(1024, 576);
  nextState = 0;
  isLooking = true;
  isMessingUp = false;
}

function draw() {
  if(millis() > nextState) {
     changeState();
  }
  placeProfessorImage();
  placeStudentsImages();
  
}

let buttonX, buttonY;

let video;

let shutterBtn;
let autoBtn;
let poseBtn;

let isVisible = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  buttonX = width / 2;
  buttonY = height / 2;

  video = createCapture(VIDEO);
  video.size(width, height * 0.66);
  video.hide();
  layoutDraw();

  rectMode(CENTER);

  let autoBtn = select('#autoBtn');
  let captureBtn = select('#captureBtn');
  let poseBtn = select('#poseBtn');
  
  /*
  shutterBtn = createButton('');
  shutterBtn.class('shutterBtn');
  shutterBtn.position(buttonX - (height * 0.12) / 2, height * 0.88 - (height * 0.12) / 2);
  shutterBtn.size(height * 0.12, height * 0.12);
  
  autoBtn = createButton('Auto');
  autoBtn.class('autoBtn');
  autoBtn.position(width * 0.91, height * 0.68);
  autoBtn.size(height * 0.05, height * 0.05);
  
  poseBtn = createButton('POSE');
  poseBtn.class('poseBtn');
  poseBtn.position(width - (width * 0.2), height * 0.88 - (height * 0.09) / 2);
  poseBtn.size(height * 0.11, height * 0.1);*/

  
}

function draw() {
  image(video, 0, height * 0.08);
}

function layoutDraw() {
  fill(255);
  noStroke();
  rect(0, 0, width, height * 0.08);

  fill(0);
  noStroke();
  rect(0, height * 0.73, width, height * 0.27);
}
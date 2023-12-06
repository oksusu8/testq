let video;
let capturedImage;

function setup() {
  createCanvas(windowWidth, windowHeight);
  video = createCapture(VIDEO);
  video.size(width, height * 0.66);
  video.hide();
  
  let captureBtn = select('#captureBtn');
  let menuBtn = select('#menuBtn');
  //let menu = select('#menu');
  
  //captureBtn.mousePressed(captureImage);
  //menuBtn.mousePressed(toggleMenu);
  
  
}

function draw() {
  background(0);
  image(video, 0, height * 0.08);
}

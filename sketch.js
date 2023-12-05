let home;


function preload() {
  home = loadImage("home.png");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // fullscreen 모드로 전환을 위한 버튼 생성
  let fullscreenButton = createButton('');
  fullscreenButton.class('fullscreenBtn'); // 추가
  fullscreenButton.position(0, height*0.45);
  fullscreenButton.size(width, height*0.12);
  fullscreenButton.mousePressed(triggerFullscreen);
}

function draw() {
  background(220);
   image(home,0, 0,windowWidth, windowHeight);
  
  // 그리기 코드 추가
}

// fullscreen 모드로 전환하는 함수
function triggerFullscreen() {
  fullscreen(true);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

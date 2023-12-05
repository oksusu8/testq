let buttonX, buttonY;

let video;

let menu, flip;
let pic1, pic2, pic3, pic4, pic5, pic6, pic7;

let shutterBtn;
let autoBtn;
let poseBtn;

let isVisible = true;

// 추가된 변수
//let galleryImages = [pic1, pic2, pic3, pic4, pic5, pic6, pic7];
let galleryX, galleryY, galleryWidth, galleryHeight, gallerySpacing, galleryOffsetX;
let galleryImages = []; 

function preload() {
  menu = loadImage("menu.png");
  flip = loadImage("flip.png");
  
  let paths = [
    'pose1.JPG', 'pose1.JPG', 'pose1.JPG', 'pose1.JPG', 'pose1.JPG', 'pose1.JPG', 'pose1.JPG'
  ];
  
  // 이미지 경로로부터 loadImage를 사용하여 이미지를 생성하고 배열에 추가
  for (let i = 0; i < paths.length; i++) {
    galleryImages.push(loadImage(paths[i]));
  }
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  buttonX = width / 2;
  buttonY = height / 2;

  video = createCapture(VIDEO);
  video.size(width, height * 0.66);
  video.hide();
  layoutDraw();

  rectMode(CENTER);

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
  poseBtn.size(height * 0.11, height * 0.1);

  shutterBtn.mousePressed(capture);
  poseBtn.mousePressed(posetab);
  captureBtn();

  // 추가된 변수 초기화
  galleryX = windowWidth * 0.1;
  galleryY = windowHeight * 0.86;
  galleryWidth = height * 0.14;
  galleryHeight = height * 0.14;
  gallerySpacing = 10;
  galleryOffsetX = 0;
  
  console.log("Gallery Images:", galleryImages);
}

function draw() {
  image(video, 0, height * 0.08);
  image(menu, width * 0.03, height * 0.03, width * 0.06, height * 0.04);
  image(flip, width * 0.91, height * 0.03, width * 0.06, height * 0.04);
  //image(pic2, width * 0.91, height * 0.03, width * 0.06, height * 0.04);
}

function mouseDragged() {
  if (
    mouseX > galleryX &&
    mouseX < galleryX + galleryImages.length * (galleryWidth + gallerySpacing) &&
    mouseY > galleryY &&
    mouseY < galleryY + galleryHeight
  ) {
    galleryOffsetX += pmouseX - mouseX;
  }
}

function layoutDraw() {
  fill(255);
  noStroke();
  rect(0, 0, width, height * 0.08);

  fill(0);
  noStroke();
  rect(0, height * 0.73, width, height * 0.27);
}

function captureBtn() {
  fill(255);
  noStroke();
  circle(buttonX, height * 0.88, height * 0.13);
}

function capture() {
  background(255);
}

function mouseDragged() {
  // 갤러리 이미지 영역 내에서만 드래그 효과 적용
  if (
    mouseX > galleryX &&
    mouseX < galleryX + galleryImages.length * (galleryWidth + gallerySpacing) &&
    mouseY > galleryY &&
    mouseY < galleryY + galleryHeight
  ) {
    galleryOffsetX += pmouseX - mouseX;
  }
}



function posetab() {
  isVisible = !isVisible;
  fill(0);
  noStroke();
  circle(buttonX, height * 0.88, height * 0.14);
  shutterBtn.hide();
  poseBtn.hide();

  fill(255, 153, 0);
  textSize(32);
  textAlign(CENTER, CENTER);
  text('POSE', buttonX, height * 0.77);

  for (let i = 0; i < galleryImages.length; i++) {
    let x = galleryX + i * (galleryWidth + gallerySpacing) + galleryOffsetX;
    let y = galleryY;

    // 마우스가 이미지 위에 있을 때 처리
    if (mouseX > x && mouseX < x + galleryWidth && mouseY > y && mouseY < y + galleryHeight) {
      // 테두리 표시 (호버 효과)
      stroke(255);
      noFill();
      rect(x, y, galleryWidth, galleryHeight);

      // 마우스 클릭 시 크게 표시 (클릭 효과)
      if (mouseIsPressed) {
        image(galleryImages[i], x - galleryWidth / 2, y - galleryHeight / 2, galleryWidth * 2, galleryHeight * 2);
      }
    } else {
      // 마우스가 이미지 밖에 있을 때는 테두리 없음
      noStroke();
      fill(255);
    }

    image(galleryImages[i], x, y, galleryWidth, galleryHeight);
  }
}


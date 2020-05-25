let button;
let pointA_Open = [115, 210, 94, 240, 70, 260];
let pointB_Open = [95, 280, 118, 285, 150, 280];
let pointC_Open = [164, 308, 186, 316, 210, 330];
let pointD_Open = [219, 256, 213, 288, 190, 200];

let pointA_Closed = [187, 260, 188, 235, 181, 286];
let pointB_Closed = [173, 274, 175, 281, 167, 265];
let pointC_Closed = [161, 270, 157, 276, 150, 279];
let pointD_Closed = [157, 248, 170, 221, 190, 200];

let pointE_Open = [223, 260, 248, 275, 284, 302];
let pointF_Open = [289, 266, 286, 279, 290, 242];
let pointG_Open = [316, 213, 308, 224, 337, 188];
let pointH_Open = [256, 177, 284, 185, 190, 200];

let pointE_Closed = [193, 239, 195, 271, 200, 285];
let pointF_Closed = [205, 281, 209, 277, 213, 268];
let pointG_Closed = [219, 270, 227, 271, 234, 270];
let pointH_Closed = [225, 248, 211, 223, 190, 200];

let pointL_Open = [133, 149, 145, 164, 108, 97];
let pointM_Open = [131, 95, 147, 97, 172, 99];
let pointN_Open = [189, 91, 213, 82, 230, 81];
let pointO_Open = [229, 131, 219, 162, 190, 200];

let pointL_Closed = [184, 242, 177, 278, 175, 301];
let pointM_Closed = [180, 299, 186, 293, 190, 287];
let pointN_Closed = [194, 293, 200, 299, 204, 302];
let pointO_Closed = [202, 275, 197, 244, 190, 200];

function link1() {
  window.open('https://editor.p5js.org/vero.alba97/sketches/RcMs33MNi');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 0, 200);
  
  function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  }
}

function draw() {
  background(0);
  stroke (255);
  
  button = createButton('Victoria');
  button.mousePressed(link1);
  button.style("font-size", "15px", 255);
  button.position(50,440,20);
 

  push();
  textSize(30);
  noStroke();
      textFont('Helvetica');
      fill(255);
      text('Weather Victoria', 50, 50);
  
  textSize(14);

  
  text('This weather website shows the time,',50, 160);
  text('temperature and humidity levels in', 50, 180);
  text('London and Brasilia throughout the day.', 50, 200);
  text('The movements of Victoria the plant', 50, 220);
  text('which lazy, morning and night, follows the rules', 50, 240);
  text('set daily by the sun, clouds, rain and stars.', 50, 260);
  
  
  text('Victoria opens and closes', 50, 300);
  text('Victoria opens and closes', 50, 320);
  text('Plants seem still', 50, 340);
  text('When they just move', 50, 360);
  text('really slowly', 50, 380);
  text('nature dances', 50, 400);
  text('at the kindest pace.', 50, 420);
  pop();
  
  var pct = map(sin(millis() * 0.001), -1, 1, 0, 1);
 
pct = constrain(pct, 0, 1);
  
  translate(300,20);
 line(190, 200, 190, 600);
  noFill()
  beginShape()
  vertex(190, 200);
  bezierVertex(lerp(pointA_Open[0], pointA_Closed[0], pct),
               lerp(pointA_Open[1], pointA_Closed[1], pct), 
               lerp(pointA_Open[2], pointA_Closed[2], pct), 
               lerp(pointA_Open[3], pointA_Closed[3], pct), 
               lerp(pointA_Open[4], pointA_Closed[4], pct), 
               lerp(pointA_Open[5], pointA_Closed[5], pct)
              );
  bezierVertex(lerp(pointB_Open[0], pointB_Closed[0], pct),
               lerp(pointB_Open[1], pointB_Closed[1], pct), 
               lerp(pointB_Open[2], pointB_Closed[2], pct), 
               lerp(pointB_Open[3], pointB_Closed[3], pct), 
               lerp(pointB_Open[4], pointB_Closed[4], pct), 
               lerp(pointB_Open[5], pointB_Closed[5], pct)
              );
  bezierVertex(lerp(pointC_Open[0], pointC_Closed[0], pct),
               lerp(pointC_Open[1], pointC_Closed[1], pct), 
               lerp(pointC_Open[2], pointC_Closed[2], pct), 
               lerp(pointC_Open[3], pointC_Closed[3], pct), 
               lerp(pointC_Open[4], pointC_Closed[4], pct), 
               lerp(pointC_Open[5], pointC_Closed[5], pct)
              );
  bezierVertex(lerp(pointD_Open[0], pointD_Closed[0], pct),
               lerp(pointD_Open[1], pointD_Closed[1], pct), 
               lerp(pointD_Open[2], pointD_Closed[2], pct), 
               lerp(pointD_Open[3], pointD_Closed[3], pct), 
               lerp(pointD_Open[4], pointD_Closed[4], pct), 
               lerp(pointD_Open[5], pointD_Closed[5], pct)
              );
  
   bezierVertex(lerp(pointE_Open[0], pointE_Closed[0], pct),
               lerp(pointE_Open[1], pointE_Closed[1], pct), 
               lerp(pointE_Open[2], pointE_Closed[2], pct), 
               lerp(pointE_Open[3], pointE_Closed[3], pct), 
               lerp(pointE_Open[4], pointE_Closed[4], pct), 
               lerp(pointE_Open[5], pointE_Closed[5], pct)
              );
  bezierVertex(lerp(pointF_Open[0], pointF_Closed[0], pct),
               lerp(pointF_Open[1], pointF_Closed[1], pct), 
               lerp(pointF_Open[2], pointF_Closed[2], pct), 
               lerp(pointF_Open[3], pointF_Closed[3], pct), 
               lerp(pointF_Open[4], pointF_Closed[4], pct), 
               lerp(pointF_Open[5], pointF_Closed[5], pct)
              );
  bezierVertex(lerp(pointG_Open[0], pointG_Closed[0], pct),
               lerp(pointG_Open[1], pointG_Closed[1], pct), 
               lerp(pointG_Open[2], pointG_Closed[2], pct), 
               lerp(pointG_Open[3], pointG_Closed[3], pct), 
               lerp(pointG_Open[4], pointG_Closed[4], pct), 
               lerp(pointG_Open[5], pointG_Closed[5], pct)
              );
  bezierVertex(lerp(pointH_Open[0], pointH_Closed[0], pct),
               lerp(pointH_Open[1], pointH_Closed[1], pct), 
               lerp(pointH_Open[2], pointH_Closed[2], pct), 
               lerp(pointH_Open[3], pointH_Closed[3], pct), 
               lerp(pointH_Open[4], pointH_Closed[4], pct), 
               lerp(pointH_Open[5], pointH_Closed[5], pct)
              );
  
  bezierVertex(lerp(pointL_Open[0], pointL_Closed[0], pct),
               lerp(pointL_Open[1], pointL_Closed[1], pct), 
               lerp(pointL_Open[2], pointL_Closed[2], pct), 
               lerp(pointL_Open[3], pointL_Closed[3], pct), 
               lerp(pointL_Open[4], pointL_Closed[4], pct), 
               lerp(pointL_Open[5], pointL_Closed[5], pct)
              );
  bezierVertex(lerp(pointM_Open[0], pointM_Closed[0], pct),
               lerp(pointM_Open[1], pointM_Closed[1], pct), 
               lerp(pointM_Open[2], pointM_Closed[2], pct), 
               lerp(pointM_Open[3], pointM_Closed[3], pct), 
               lerp(pointM_Open[4], pointM_Closed[4], pct), 
               lerp(pointM_Open[5], pointM_Closed[5], pct)
              );
  bezierVertex(lerp(pointN_Open[0], pointN_Closed[0], pct),
               lerp(pointN_Open[1], pointN_Closed[1], pct), 
               lerp(pointN_Open[2], pointN_Closed[2], pct), 
               lerp(pointN_Open[3], pointN_Closed[3], pct), 
               lerp(pointN_Open[4], pointN_Closed[4], pct), 
               lerp(pointN_Open[5], pointN_Closed[5], pct)
              );
  bezierVertex(lerp(pointO_Open[0], pointO_Closed[0], pct),
               lerp(pointO_Open[1], pointO_Closed[1], pct), 
               lerp(pointO_Open[2], pointO_Closed[2], pct), 
               lerp(pointO_Open[3], pointO_Closed[3], pct), 
               lerp(pointO_Open[4], pointO_Closed[4], pct), 
               lerp(pointO_Open[5], pointO_Closed[5], pct)
              );
  
  
  endShape();

  
  
  
  
  
  
  
}
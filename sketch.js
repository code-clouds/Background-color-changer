var btn_red;
var btn_green;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);
  
  btn_blue = createButton("BLUE");
  btn_blue.position(100,50);
  btn_blue.mousePressed(blue_bg);

  btn_yellow = createButton("YELLOW");
  btn_yellow.position(250,50);
  btn_yellow.mousePressed(yellow_bg);

}

function draw() {
  background(r,g,b);
}



function blue_bg()
{
  r = 0;
  g = 0;
  b = 255;
}
function yellow_bg()
{
  r = 255;
  g = 255;
  b = 0;
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('#EB7C74');
  fill('#FDBFA8')
  ellipse(200,200,260,300);
  fill('white')
  circle(150,150,60);
  circle(250,140,70);
  line(150,270,250,240);
  fill('black')
  ellipse(200, 210,50, 30);
  line(123,115,178,113)
  line(220,100,279,90)
  olhoX = map(mouseX,0,400,140,155);
  olhoY = map(mouseY,0,400,133,155);
  
  circle(olhoX, olhoY, 30);
  circle(olhoX + 100, olhoY, 30);
  if(mouseIsPressed){
    console.log(mouseX,mouseY);
  }
}

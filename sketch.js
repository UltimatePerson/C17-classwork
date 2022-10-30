var box1, box2, box3;
function setup() 
{
  createCanvas(400, 400);

  box1 = new Box(5,6,5,5,1);
  box2 = new Box(67,13,5,5,-3);
  box3 = new Box (45,23,5,5,-2);

}

function draw() 
{
  background(220);

  box1.display();
  box1.speed();

  box2.display();
  box2.speed();

  box3.display();
  box3.speed();
}


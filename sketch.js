var car, car2, car3, wall;
var weight, speed;

function setup() {
  createCanvas(1600,400);
  speed1 = random(55, 90);
  speed2 = random(55, 90);
  speed3 = random(55, 90);
  weight = random(400, 1500);
  car1 = createSprite(50, 150, 50, 50);
  car2 = createSprite(50, 200, 50, 50);
  car3 = createSprite(50, 250, 50, 50);
  wall = createSprite(1500, 200, 60, height/2);
  wall.shapeColor = ("Violet");
  car1.velocityX = speed1;
  car2.velocityX = speed2;
  car3.velocityX = speed3;
}

function draw() {
  background(0, 0, 0);
  
  if(car1.collide(wall))
  {
    car1.velocityX = 0;
  }

  if(car2.collide(wall))
  {
    car2.velocityX = 0;
  }

  if(car3.collide(wall))
  {
    car3.velocityX = 0;
  }

  if(wall.x - car1.x === (car1.width + wall.width)/2)
  {
    car1.velocityX = 0;
    var deformation = 0.5 * weight * speed1 * speed1/22509;
    if(deformation > 180)
    {
      car1.shapeColor = color(255, 0, 0);
    }

    if(deformation < 180 && deformation > 100)
    {
      car1.shapeColor = color(230, 230, 0);
    }

    if(deformation < 100)
    {
      car1.shapeColor = color(0, 255, 0);
    }
  }
  
  if(wall.x - car2.x === (car2.width + wall.width)/2)
  {
    car2.velocityX = 0;
    var deformation = 0.5 * weight * speed2 * speed2/22509;
    if(deformation > 180)
    {
      car2.shapeColor = color(255, 0, 0);
    }

    if(deformation < 180 && deformation > 100)
    {
      car2.shapeColor = color(230, 230, 0);
    }

    if(deformation < 100)
    {
      car2.shapeColor = color(0, 255, 0);
    }
  }
  
  if(wall.x - car3.x === (car3.width + wall.width)/2)
  {
    car3.velocityX = 0;
    var deformation = 0.5 * weight * speed3 * speed3/22509;
    if(deformation > 180)
    {
      car3.shapeColor = color(255, 0, 0);
    }

    if(deformation < 180 && deformation > 100)
    {
      car3.shapeColor = color(230, 230, 0);
    }

    if(deformation < 100)
    {
      car3.shapeColor = color(0, 255, 0);
    }
  }

  drawSprites();
}
var spaceShip1;
var spaceShip1image;

function preload()
{
    spaceShip1image = loadAnimation("ufo1.png", "ufo4.png", "ufo2.png", "ufo3.png");
    bgimg = loadImage("nbg1.png");
}

function setup()
{
    database = firebase.database();
    //console.log(database);

    var canvas = createCanvas(750,600);

    spaceShip1 = createSprite(375,300,20,20);
    spaceShip1.addAnimation('thrust', spaceShip1image); 
    spaceShip1.scale = 0.4;
    spaceShip1.friction = 0.005;
    //spaceShip1.rotateToDirection = true;

    var SSH1position = database.ref('spaceShip/position');
    //SSH1position.on("value");
}

function draw()
{
    background(bgimg); 
    /*
    
    if(keyDown(LEFT_ARROW))
    {
        spaceShip1.x = spaceShip1.x - 5;
    }
    else if(keyDown(RIGHT_ARROW))
    {
        spaceShip1.x = spaceShip1.x + 5;
    }
    else if(keyDown(UP_ARROW))
    {
        spaceShip1.y = spaceShip1.y - 5;
    }
    else if(keyDown(DOWN_ARROW))
    {
        spaceShip1.y = spaceShip1.y + 5;
    }
*/

    if (mouseIsPressed) 
    {
        spaceShip1.attractionPoint(1, mouseX, mouseY);
    }

    push();
    fill("white");
    text("use mouse to move the UFO", 305, 30);
    pop();

    drawSprites();
}


//function mousePresed()
//{
    //spaceShip1.attractionPoint(0.6, mouseX, mouseY);
//}

//function readPosition()
//{
   //position = data.val();
   //spaceShip1.x = position.x;
   //spaceShip1.y = position.y;
//}


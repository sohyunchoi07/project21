var canvas;
var music;
var blueb, orangeb, purpleb, greenb;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    blueb = createSprite(0,580,360,30);
    blueb.shapeColor = "blue";
    orangeb = createSprite(295,580,200,30);
    orangeb.shapeColor = "orange"; 
    purpleb = createSprite(515,580,200,30);
    purpleb.shapeColor = "purple";
    greenb = createSprite(740,580,220,30);
    greenb.shapeColor = "green"; 

    //create box sprite and give velocity
    box = createSprite(random(20,750),100,40,40);
    box.shapeColor = "white";
    box.velocityX = 10;
    box.velocityY = 10;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();
    box.bounceOff(edges)

    if(blueb.isTouching(box) && box.bounceOff(blueb)){
        box.shapeColor = "blue";
    }

    if(purpleb.isTouching(box) && box.bounceOff(purpleb)){
        box.shapeColor = "purple";
    }

    if(greenb.isTouching(box) && box.bounceOff(greenb)){
        box.shapeColor = "green"; 
    }

    if(orangeb.isTouching(box)){
        box.shapeColor = "orange";
        box.velocityX = 0;
        box.velocityY = 0;
    }
    //add condition to check if box touching surface and make it box
    drawSprites();
}

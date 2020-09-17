var Doggo, happyDoggo;
var database;
var foodS, foodStock;
var dog;

function preload()
{
  Doggo = loadImage("dogImg.png");
  happyDoggo = loadImage("dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  
  dog = createSprite(250, 250, 10, 10);
  dog.addImage(Doggo);
  dog.scale = "0.3";

  database = firebase.database();

  foodStock = database.ref("Food");
  foodStock.on("value", readStock);
  
}


function draw() {  
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){

    writeStock(foodS);
    dog.addImage(happyDoggo);

  }

  drawSprites();


}

function readStock(data){

  foodS = data.val();

}

function writeStock(x){

  if(x <=0){
    x = 0;
  }else{
    x = x - 1;
  }

  database.ref('/').update({
    Food: x
  })

}

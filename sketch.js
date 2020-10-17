const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var pen,backgroundImg
var score=0
var bg="day.png"
function preload() {
  getBgImage() 
  
}


function setup() {
  var canvas=createCanvas(1000,700);
  engine = Engine.create();
  world = engine.world;

 

 ground=new Ground(width/2,690,width,25)
 ground2=new Ground(500,500,400,20)
 ground3=new Ground(800,350,275,20)

 polygon=new Polygon(200,500)
 point=new SlingShot(polygon.body,{x:175,y:350})


 b1=new Box1(350,450,50,50)
 b2=new Box2(400,450,50,50)
 b3=new Box3(450,450,50,50)
 b4=new Box1(500,450,50,50)
 b5=new Box2(550,450,50,50)
 b6=new Box3(600,450,50,50)
 b7=new Box1(650,450,50,50)

 b8=new Box3(400,395,50,50)
 b9=new Box1(450,395,50,50)
 b10=new Box2(500,395,50,50)
 b11=new Box3(550,395,50,50)
 b12=new Box1(600,395,50,50)

 b13=new Box2(450,350,50,50)
 b14=new Box3(500,350,50,50)
 b15=new Box1(550,350,50,50)

 b16=new Box1(500,300,50,50)


 b18=new Box4(700,300,50,50)
 b19=new Box5(750,300,50,50)
 b20=new Box6(800,300,50,50)
 b21=new Box4(850,300,50,50)
 b22=new Box5(900,300,50,50)

 b23=new Box6(750,250,50,50)
 b24=new Box4(800,250,50,50)
 b25=new Box5(850,250,50,50)

 b26=new Box5(800,200,50,50)


 
 
}

function draw() {
  if(backgroundImg){
    background(backgroundImg);
}

  Engine.update(engine)
 

 ground.display()
 ground2.display()
 ground3.display()
 
 
 point.display()
 polygon.display()


 b1.display()
 b2.display()
 b3.display()
 b4.display()
 b5.display()
 b6.display()
 b7.display()

 b8.display()
 b9.display()
 b10.display()
 b11.display()
 b12.display()

 b13.display()
 b14.display()
 b15.display()

 b16.display()



 b18.display()
 b19.display()
 b20.display()
 b21.display()
 b22.display()

 b23.display()
 b24.display()
 b25.display()

 b26.display()

 b1.score()
 b2.score()
 b3.score()
 b4.score()
 b5.score()
 b6.score()
 b7.score()
 b8.score()
 b9.score()
 b10.score()
 b11.score()
 b12.score()
 b13.score()
 b14.score()
 b15.score()
 b16.score()
 //no b17
 b18.score()
 b19.score()
 b20.score()
 b21.score()
 b22.score()
 b23.score()
 b24.score()
 b25.score()
 b26.score()
 


 textFont('Italic');
 textSize(16);
 fill (0)
 text ("press space to retry",10,15)
 textSize(35)
 text ("Score "+score,800,50)


 if(score===250){
   textSize(35)
   textFont('Italic')
   fill(57,255,20)
   text ("YOU WIN",width/2,height/2)
 }

 
 


 

  
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  point.fly();
}
function keyPressed(){
  if(keyCode===32){
      point.attach(polygon.body)
      Matter.Body.setPosition(polygon.body,{x:175,y:350})
  }
}

async function getBgImage(){
  var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo")
  var responseJson = await response.json()
  console.log(responseJson)
  var dateTime=responseJson.datetime
  console.log(dateTime)
  var hour=dateTime.slice(11,13)
  console.log(hour)
  if(hour>=6 && hour<=19){
     bg ="day.png"
  }
  else{
      bg="dawn.png"
  }
  backgroundImg=loadImage(bg)
}
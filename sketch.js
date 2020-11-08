const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World = Matter.World;
const Constraint = Matter.Constraint;

let engine, world;

let ground;

let Ballls1=[];
let Ballls2=[];
let Ballls3=[];
let Ballls4=[];
let Ballls5=[];

let particles;

let Ball1;

let displayBall1, displayBall2, displayBall3, displayBall4;

let count = 0;

let j;

let gameState="play";

//let BallIndex = 0;
//let options = {isStatic:false, restitution:0.5};
function setup(){
    var backg = createCanvas(400,800);
    engine = Engine.create();
    world = engine.world;
    fill("red");
    ground = new Ground(200, 795,1920, 15, {isStatic:true, density:50});
    //makeBalls();

    for(var x1 = 0;x1 <= 400; x1 = x1+40){
        Ballls1.push(new Ball(x1, 200, 5,{isStatic:true}));
    }
    for(var x2 = 5;x2 <= 1200; x2 = x2+30){
        Ballls2.push(new Ball(x2, 100, 5,{isStatic:true}));
    }
    for(var x3 = 9;x3 <= 800; x3 = x3+20){
        Ballls3.push(new Ball(x3, 150, 5, {isStatic:true}));
    }
    for(var x4 = 9;x4 <= 800; x4 = x4+20){
        Ballls4.push(new Ball(x4, 50, 5, {isStatic:true}));
      }
    for(var x5 = 0; x5 <= 400; x5 = x5+100){
      Ballls5.push(new Ground(x5, 650, 20, 300,{density: 40, isStatic:true}))
    //  console.log(x5)s
    }

}

function draw(){
    background("white")
    Engine.update(engine);
    ground.display();
    world.gravity.y = 0.5;
    
    for(displayBall1 = 0; displayBall1 <= 10; displayBall1++){
            Ballls1[displayBall1].display();
    }

    for(displayBall2 = 0; displayBall2 <= 20; displayBall2++){
        Ballls2[displayBall2].display();
    }

    for(displayBall3 = 0; displayBall3 <= 20; displayBall3++){
        Ballls3[displayBall3].display();
     }

     for(displayBall4 = 0; displayBall4 <= 30; displayBall4++){
        Ballls4[displayBall4].display();
     }

    for(var displayDividers = 0; displayDividers <= 4; displayDividers++){
        Ballls5[displayDividers].display();
    }

textSize(10)
/*text("Score1: " + p1, 25, 600);
text("Score2: " + p2,125, 600);
text("Score3: " + p3,225, 600);
text("Score4: " + p4,325, 600);*/
text("1", 45, 500)
text("2", 145, 500)
text("3", 245, 500)
text("4", 345, 500)
   // mousePressed();
    if(particles != null){
        particles.display();
        if(particles.position.y>760){
            if(particles.position.x<300){
                score = score+500
                particles=null
                if(count>=5){
                    gameState = "end";
         }
      }
            else if(particles.position.x >= 301 && particles.position.x < 600){
                score = score+100
                particles=null
                if(count>=5){
                    gameState = "end";
                  }
            }
    }
  }
}

function keyPressed(){
    console.log("abc")
    if(keyCode === 32){
        
    
    if(gameState!="end"){
        count++
        particles = new Ball(mouseX,100, 5);
    }
}
}
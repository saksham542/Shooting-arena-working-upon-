var bullet,target,saksham,bullet2;


function preload() {
    bulletImg = loadImage("sprites/bullets.png");
    bulletImg2 = loadImage("sprites/bullets.png");
    bulletImg3 = loadImage("sprites/bullets.png");
    targetImg = loadImage("sprites/target.png");
    targetImg2 = loadImage("sprites/target.png");
    targetImg3 = loadImage("sprites/target.png");
    gunImg = loadImage("sprites/gun.png");
    chImg = loadImage("sprites/crosshair.png");
    backgroundS = loadImage("sprites/BackGrond.jpg");
}

function setup(){
    createCanvas(1200,600);
    bullet = createSprite(150, 445, 30,70);
    bullet.addImage(bulletImg);
    bullet.scale = 0.1;
    var bulletvar = 0;

    target = createSprite(1000, 175, 30,70);
    target.addImage(targetImg);
    target.scale = 0.1;

    target3 = createSprite(650, 125, 30,70);
    target3.addImage(targetImg3);
    target3.scale = 0.1;

    target2 = createSprite(250, 100, 30,70);
    target2.addImage(targetImg2);
    target2.scale = 0.1;

    gun = createSprite(10,505, 30,70);
    gun.addImage(gunImg);
    gun.scale = 0.5;

    crosshair = createSprite(150, 505, 30,70);
    crosshair.addImage(chImg);
    crosshair.scale = 0.03;

    

    /*target.debug = true;
    target2.debug = true;
    target3.debug = true;
    bullet.debug = true;*/

    target.setCollider("rectangle",0,0,600,350);
    target2.setCollider("rectangle",0,0,600,350);
    target3.setCollider("rectangle",0,0,600,350);
    bullet.setCollider("rectangle",0,0,600,350);
}

function draw(){
    background(backgroundS);  
    drawSprites();
    if(keyDown ("up")){
    crosshair.y = crosshair.y - 3
    }

    if(keyDown ("down")){
        crosshair.y = crosshair.y + 3
        }

    if(keyDown ("right")){
            crosshair.x = crosshair.x + 3
            }

    if(keyDown ("left")){
                crosshair.x = crosshair.x - 3
                }

    

    if(bullet.isTouching(target)){
        target.destroy() 
        bullet.destroy()
        var bulletvar = 1;
        bullet2 = createSprite(gun.x + 180, gun.y - 60, 30,70);
        bullet2.addImage(bulletImg2);
        bullet2.scale = 0.1;
        bullet2.setCollider("rectangle",0,0,600,350);
    }
    if(bullet.collide(target2)){
        target2.destroy() 
        bullet.destroy()
        var bulletvar = 1;
        bullet2 = createSprite(gun.x + 180, gun.y - 60, 30,70);
        bullet2.addImage(bulletImg2);
        bullet2.scale = 0.1;
        bullet2.setCollider("rectangle",0,0,600,350);
    }
    if(bullet.collide(target3)){
        target3.destroy()
        bullet.destroy()
        var bulletvar = 1;
        bullet2 = createSprite(gun.x + 180, gun.y - 60, 30,70);
        bullet2.addImage(bulletImg2);
        bullet2.scale = 0.1;
        bullet2.setCollider("rectangle",0,0,600,350);
    }

    if(keyWentDown("space")){
        gun.y = crosshair.y + 60
        gun.x = 10;
        if(bulletvar === 0){
        bullet.y = gun.y - 60;
        bullet.velocityX = 3;
    }
        if(bulletvar === 1){
            bullet2.velocityX = 3;
        }
    }

}


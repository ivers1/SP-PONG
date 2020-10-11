let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let ballRadius = 10;
let ballSpeed = 5;
let x = canvas.width / 2;
let y = canvas.height / 2;
let dx = 5;
let dy = 5;
let pH = 100;
let pW = 10;
let pX = 0;
let pY = canvas.height / 2 - pH / 2;
let aiPx = canvas.width - pW;
let aiPy = canvas.height / 2 - pH / 2;
let ai = 0.08;
let netX = canvas.width / 2;
let netY = 0;
let netH = canvas.height;
let netW = 5;
let upP = false;
let downP = false;
let pOneScore = 0;
let pTwoScore = 0;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("click", dangerSpeed, false);

function keyDownHandler(e) {
    
    switch (e.keyCode) {
        case 38:
            upP = true;
            break;
            
        case 40:
            downP = true;
            break;
    }
}

function keyUpHandler(e) {
    
    switch (e.keyCode) {
        case 38:
            upP = false;
            break;
            
        case 40:
            downP = false;
            break;
    }
}

function reset() {
    x = canvas.width / 2;
    y = canvas.height / 2;
    dx =-dx;
    ballSpeed = 5;
}

function dangerSpeed(){
    dx = 10;
    dy = 10;
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function drawP() {
    ctx.beginPath();
        ctx.rect(pX, pY, pW, pH);
        ctx.fillStyle ="red";
        ctx.fill();
        ctx.closePath();
}

function drawAi() {
    ctx.beginPath();
        ctx.rect(aiPx, aiPy, pW, pH);
        ctx.fillStyle ="red";
        ctx.fill();
        ctx.closePath();
}

function drawNet() {
    ctx.beginPath();
    ctx.rect(netX, netY, netW, netH);
    ctx.fillStyle ="green";
    ctx.fill();
    ctx.closePath();
}

function drawPlOneScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "black";
    ctx.fillText(pOneScore, 150, 20);
}

function drawPlTwoScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "black";
    ctx.fillText(pTwoScore, 450, 20);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
   
    drawBall();
    drawP();
    drawAi();
    drawNet();
    drawPlOneScore();
    drawPlTwoScore();
    
 
    x += dx;
    y += dy;    
    
    
  if (upP && pY > 0) {
      pY -= 8;
  }
    else if (downP && (pY < canvas.height - pH)) {
        pY += 8;
    }
    
    if (y + ballRadius >= canvas.height || y - ballRadius <= 0) {
        dy = - dy;
    }
    
    if (x + ballRadius > canvas.width) {
        if(y > aiPy && y < aiPy + pH ) {
            dx = -dx;
        
    } else {
        pOneScore += 1;
       reset();
        }
    }
    
    if (x - ballRadius < 0) {
        if(y > pY && y < pY + pH) {
            dx = -dx;
        }
        else {
        pTwoScore += 1;
            if ( pOneScore > window.localStorage.getItem("highscore")){
                window.localStorage.setItem("highscore", pOneScore)
            }
            alert("looooser points: " + pOneScore);
       document.location.reload();
            reset();
        }
        
    }
   
    
    aiPy += ((y - (aiPy + pH / 2))) * ai;
    
   
 requestAnimationFrame(draw);   

}
draw();


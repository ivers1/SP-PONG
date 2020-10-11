const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


//const player = {
//ctx.fillStyle = 'red';
//ctx.fillRect(5, 100, 25, 100);
//};

//const ai = {
//ctx.fillStyle = 'blue';
//ctx.fillRect(570, 100, 25, 100);
//};


//ctx.beginPath();
//ctx.arc(canvas.width / 2, canvas.height / 2, 10, 0, Math.PI * 2);
//ctx.fillStyle = 'black';
//ctx.fill();

const netWidth = 4;
const netHeight = canvas.height;

const paddleWidth = 10;
const paddleHeight = 100;

let upArrowPressed = false;
let downArrowPressed = false;


const net = {
  x: canvas.width / 2 - netWidth / 2,
  y: 0,
  width: netWidth,
  height: netHeight,
  color: "#FFF"
};

const player = {
x: 5, 
y: canvas.height / 2 - paddleHeight / 2, 
w: paddleWidth, 
h: paddleHeight,
color: 'white',
score: 0    
};

const ai = {
  x: canvas.width - (paddleWidth + 10),
  y: canvas.height / 2 - paddleHeight / 2,
  width: paddleWidth,
  height: paddleHeight,
  color: 'white',
  score: 0
};


const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    size: 20,
    color: 'white',
    dx: 5,
    dy: 4
};

function drawNet() {
  
// set the color of net

  ctx.fillStyle = net.color;

  
// syntax --> fillRect(x, y, width, height)

  ctx.fillRect(net.x, net.y, net.width, net.height);
}

function drawPaddle(x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}


//function drawPlayer(){
//ctx.beginPath();    
//ctx.Rect(player.x, play.y, player.w, player.h);
//ctx.fillStyle = 'red';
//ctx.closePath();    
//ctx.fill();    
//}


//function update() {
//drawPlayer();
//}

function drawBall(x, y, size, color) {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2, true);
    ctx.fillStyle = color;
    ctx.closePath();
    ctx.fill();
}


function update() {


     

    
//positions    

ball.x += ball.dx;
ball.y += ball.dy; 
    
//detect walls/collisons
    
if(ball.x + ball.size > canvas.width || ball.x -ball.size < 0) {
    ball.dx = ball.dx * -1;
} 
    
// detect top and bottom walls
    
if(ball.y + ball.size > canvas.height || ball.y -ball.size < 0) {
    ball.dy = ball.dy * -1;
} 
}

function render(){
ctx.fillStyle = "#000";    
ctx.fillRect(0, 0, canvas.width, canvas.height);    
    
drawNet();
drawPaddle(user.x, user.y, user.width, user.height, user.color);
drawPaddle(ai.x, ai.y, ai.width, ai.height, ai.color);    
drawBall();    
}
    
function gameLoop(){
    
 update();   
render();
}
    
    setInterval(gameLoop, 1000 / 60);
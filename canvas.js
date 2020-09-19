const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'red';
ctx.fillRect(5, 100, 25, 100);
ctx.fillStyle = 'blue';
ctx.fillRect(570, 100, 25, 100);

//ctx.beginPath();
//ctx.arc(canvas.width / 2, canvas.height / 2, 10, 0, Math.PI * 2);
//ctx.fillStyle = 'black';
//ctx.fill();

const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    size: 20,
    dx: 5,
    dy: 4
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2);
    ctx.fillStyle = 'black';
    ctx.fill();
}

function update() {
ctx.clearRect(0, 0, canvas.width, canvas.height);    
drawBall();
    
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
    
    
    
requestAnimationFrame(update); 
}

update();